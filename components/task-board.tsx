"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Hammer, Users } from "lucide-react";
import type { Forest, Task } from "@/lib/types";

export function TaskBoard({ tasks, forests }: { tasks: Task[]; forests: Forest[] }) {
  const [claims, setClaims] = useState<string[]>([]);
  const [skill, setSkill] = useState("All");

  const visible = useMemo(
    () => tasks.filter((task) => skill === "All" || task.skill === skill),
    [skill, tasks]
  );

  return (
    <section id="tasks" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-earth">Volunteer</p>
          <h2 className="mt-2 text-4xl font-black">Choose a useful job</h2>
          <p className="mt-3 max-w-xl text-forest-700">
            Match your time and skills to work that helps a local food forest grow.
          </p>
        </div>
        <select
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          className="rounded-full border border-forest-700/20 bg-white px-5 py-3 font-semibold"
        >
          <option>All</option>
          <option>Everyone</option>
          <option>Handy</option>
          <option>People</option>
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((task) => {
          const forest = forests.find((item) => item.id === task.forestId);
          const claimed = claims.includes(task.id);
          return (
            <article key={task.id} className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold text-forest-700">
                  {task.skill}
                </span>
                <Hammer size={20} />
              </div>
              <h3 className="mt-5 text-2xl font-black">{task.title}</h3>
              <p className="mt-2 text-sm font-semibold text-earth">{forest?.name}</p>
              <p className="mt-4 min-h-16 text-sm leading-6 text-forest-700">{task.description}</p>
              <div className="mt-5 space-y-2 text-sm">
                <p className="flex items-center gap-2"><Clock size={16} /> {task.date}</p>
                <p className="flex items-center gap-2">
                  <Users size={16} /> {task.claimed + (claimed ? 1 : 0)} of {task.peopleNeeded} joined
                </p>
              </div>
              <button
                onClick={() =>
                  setClaims((current) =>
                    claimed ? current.filter((id) => id !== task.id) : [...current, task.id]
                  )
                }
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5"
              >
                {claimed && <CheckCircle2 size={18} />}
                {claimed ? "Task claimed" : "Claim this task"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
