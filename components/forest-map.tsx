"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import type { Forest } from "@/lib/types";

export function ForestMap({ forests }: { forests: Forest[] }) {
  const node = useRef<HTMLDivElement | null>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    if (!node.current || !token) return;
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: node.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [5.4697, 51.4416],
      zoom: 11
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    forests.forEach((forest) => {
      const popup = new mapboxgl.Popup({ offset: 18 }).setHTML(
        `<strong>${forest.name}</strong><br/><span>${forest.neighbourhood}</span>`
      );

      new mapboxgl.Marker({ color: "#31552e" })
        .setLngLat([forest.longitude, forest.latitude])
        .setPopup(popup)
        .addTo(map);
    });

    return () => map.remove();
  }, [forests, token]);

  if (!token) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed border-forest-500/40 bg-forest-50 p-8 text-center">
        <div>
          <p className="text-lg font-bold">Map preview</p>
          <p className="mt-2 max-w-md text-sm text-forest-700">
            Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local to activate the interactive map.
            The forest cards below remain fully usable without it.
          </p>
        </div>
      </div>
    );
  }

  return <div ref={node} className="min-h-[420px] overflow-hidden rounded-3xl shadow-soft" />;
}
