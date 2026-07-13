import Image from "next/image";
import { ArrowRight, Leaf, MapPin, Sprout } from "lucide-react";
import { ForestMap } from "@/components/forest-map";
import { HourLog } from "@/components/hour-log";
import { TaskBoard } from "@/components/task-board";
import { forests, harvests, tasks } from "@/lib/demo-data";

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-forest-900/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-black">
            <Sprout /> Voedselbos
          </a>
          <nav className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#forests">Find a forest</a>
            <a href="#tasks">Volunteer</a>
            <a href="#harvest">Harvest guide</a>
          </nav>
          <a href="#tasks" className="rounded-full bg-forest-900 px-4 py-2 text-sm font-bold text-white">
            Get involved
          </a>
        </div>
      </header>

      <section className="overflow-hidden px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.3em] text-earth">For the builders</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] md:text-7xl">
              Grow food.<br />Grow community.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-forest-700">
              Discover a food forest near you, help with practical work and learn what the season is teaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#forests" className="flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 font-bold text-white">
                Find a forest <ArrowRight size={18} />
              </a>
              <a href="#tasks" className="rounded-full border border-forest-900 px-6 py-3 font-bold">
                Browse tasks
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src={forests[0].image}
              width={900}
              height={700}
              alt="Green community forest"
              className="h-[480px] w-full rounded-[3rem] object-cover shadow-soft"
              priority
            />
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-3xl font-black">3</p>
              <p className="text-sm text-forest-700">forests in this demo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="forests" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[0.25em] text-earth">Explore</p>
          <h2 className="mt-2 text-4xl font-black">Find a forest near you</h2>
          <p className="mt-3 max-w-2xl text-forest-700">
            Start with a neighbourhood, then see current tasks and seasonal harvest information.
          </p>
          <div className="mt-9">
            <ForestMap forests={forests} />
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {forests.map((forest) => (
              <article key={forest.id} className="overflow-hidden rounded-3xl border border-forest-900/10">
                <Image src={forest.image} width={700} height={400} alt="" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black">{forest.name}</h3>
                    <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold">{forest.status}</span>
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm text-earth">
                    <MapPin size={15} /> {forest.neighbourhood}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-forest-700">{forest.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TaskBoard tasks={tasks} forests={forests} />
      <HourLog />

      <section id="harvest" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-bold uppercase tracking-[0.25em] text-earth">Seasonal guide</p>
        <h2 className="mt-2 text-4xl font-black">What the forest is teaching now</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {harvests.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <Image src={item.image} width={700} height={400} alt={item.name} className="h-52 w-full object-cover" />
              <div className="p-6">
                <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-bold">{item.status}</span>
                <h3 className="mt-4 text-2xl font-black">{item.name}</h3>
                <p className="mt-1 text-sm font-bold text-earth">{item.months}</p>
                <p className="mt-4 flex gap-2 text-sm leading-6 text-forest-700">
                  <Leaf className="mt-1 shrink-0" size={16} /> {item.lesson}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-forest-900/10 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 md:flex-row">
          <p className="font-black">Voedselbos</p>
          <p className="text-sm text-forest-700">A proof of concept for neighbourhood food forests.</p>
        </div>
      </footer>
    </main>
  );
}
