import type { Forest, Harvest, Task } from "./types";

export const forests: Forest[] = [
  {
    id: "f1",
    name: "Voedselbos Eindhoven",
    neighbourhood: "Strijp-R",
    description:
      "Community food forest where volunteers help grow edible plants, increase biodiversity, and educate visitors about sustainable food systems.",
    latitude: 51.4328,
    longitude: 5.4455,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    status: "Active",
  },
  {
    id: "f2",
    name: "Voedselbos Henri Dunantpark",
    neighbourhood: "Woensel",
    description:
      "Public food forest with edible trees, shrubs and herbs where residents can learn about urban nature and seasonal harvesting.",
    latitude: 51.4730,
    longitude: 5.4790,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    status: "Active",
  },
];

export const tasks: Task[] = [
  {
    id: "t1",
    forestId: "f1",
    title: "Build two compost bays",
    description:
      "Help assemble reclaimed timber compost bays. Tools and guidance are provided.",
    date: "Saturday · 10:00",
    skill: "Handy",
    peopleNeeded: 4,
    claimed: 2,
  },
  {
    id: "t2",
    forestId: "f1",
    title: "Mulch the berry lane",
    description:
      "Move woodchips and mulch around the berry shrubs to improve soil health.",
    date: "Sunday · 13:00",
    skill: "Everyone",
    peopleNeeded: 8,
    claimed: 5,
  },
  {
    id: "t3",
    forestId: "f2",
    title: "Welcome new volunteers",
    description:
      "Introduce visitors to the food forest and explain how they can get involved.",
    date: "Wednesday · 18:30",
    skill: "People",
    peopleNeeded: 2,
    claimed: 0,
  },
];

export const harvests: Harvest[] = [
  {
    id: "h1",
    forestId: "f1",
    name: "Redcurrant",
    status: "Ripe now",
    months: "June – July",
    lesson:
      "Currants provide food for both people and birds while attracting important pollinators.",
    image:
      "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h2",
    forestId: "f1",
    name: "Apple",
    status: "Coming soon",
    months: "August – October",
    lesson:
      "Different apple varieties extend the harvest season and increase biodiversity.",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "h3",
    forestId: "f2",
    name: "Comfrey",
    status: "Do not pick",
    months: "Learning plant",
    lesson:
      "Comfrey is commonly used to create nutrient-rich mulch and improve soil quality.",
    image:
      "https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=800&q=80",
  },
];