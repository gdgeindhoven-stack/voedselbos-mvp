"use client";

import { FormEvent, useState } from "react";

export function HourLog() {
  const [saved, setSaved] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-forest-900 px-5 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-forest-100">Show the impact</p>
          <h2 className="mt-3 text-4xl font-black">Log volunteer hours</h2>
          <p className="mt-4 max-w-lg leading-7 text-forest-100">
            A lightweight record helps coordinators understand participation and report community impact.
          </p>
        </div>
        <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-forest-900 shadow-soft">
          <label className="block text-sm font-bold">Task</label>
          <select required className="mt-2 w-full rounded-xl border p-3">
            <option value="">Select a task</option>
            <option>Build two compost bays</option>
            <option>Mulch the berry lane</option>
            <option>Welcome new volunteers</option>
          </select>
          <label className="mt-4 block text-sm font-bold">Hours</label>
          <input required min="0.5" step="0.5" type="number" className="mt-2 w-full rounded-xl border p-3" />
          <label className="mt-4 block text-sm font-bold">What did you do?</label>
          <textarea className="mt-2 min-h-24 w-full rounded-xl border p-3" placeholder="Optional note" />
          <button className="mt-4 w-full rounded-full bg-earth px-5 py-3 font-bold text-white">
            Save hours
          </button>
          {saved && <p className="mt-3 text-center text-sm font-bold text-forest-700">Hours saved in this demo.</p>}
        </form>
      </div>
    </section>
  );
}
