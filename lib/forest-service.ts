import type { Forest } from "./types";
import { supabase } from "./supabase";

type ForestRow = {
  id: string;
  name: string;
  neighbourhood: string | null;
  description: string | null;
  latitude: number;
  longitude: number;
  image_url: string | null;
  status: string;
};

export async function getForests(): Promise<Forest[]> {
  const { data, error } = await supabase
    .from("forests")
    .select(
      "id, name, neighbourhood, description, latitude, longitude, image_url, status",
    )
    .order("name");

  if (error) {
    console.error("Failed to load forests:", error.message);
    return [];
  }

  return (data as ForestRow[]).map((forest) => ({
    id: forest.id,
    name: forest.name,
    neighbourhood: forest.neighbourhood ?? "",
    description: forest.description ?? "",
    latitude: forest.latitude,
    longitude: forest.longitude,
    image:
      forest.image_url ??
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    status: forest.status === "Starting" ? "Starting" : "Active",
  }));
}