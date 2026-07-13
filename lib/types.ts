export type Forest = {
  id: string;
  name: string;
  neighbourhood: string;
  description: string;
  latitude: number;
  longitude: number;
  image: string;
  status: "Active" | "Starting";
};

export type Task = {
  id: string;
  forestId: string;
  title: string;
  description: string;
  date: string;
  skill: string;
  peopleNeeded: number;
  claimed: number;
};

export type Harvest = {
  id: string;
  forestId: string;
  name: string;
  status: "Ripe now" | "Coming soon" | "Do not pick";
  months: string;
  lesson: string;
  image: string;
};
