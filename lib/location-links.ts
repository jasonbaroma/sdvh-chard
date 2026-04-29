import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Chard",
  href: "/",
};

type LocationMetadata = {
  label: string;
  href: string;
  county: string;
  region: string;
  population: string;
};

const mainLocationMetadata: LocationMetadata = {
  label: "Chard",
  href: "/",
  county: "Somerset",
  region: "South West England",
  population: "13800",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Crewkerne",
    href: `/${slugifyLocation("Crewkerne")}`,
    county: "Somerset",
    region: "South West England",
    population: "7900",
  },
  {
    label: "Bridport",
    href: `/${slugifyLocation("Bridport")}`,
    county: "Dorset",
    region: "South West England",
    population: "7400",
  },
  {
    label: "Somerton",
    href: `/${slugifyLocation("Somerton")}`,
    county: "Somerset",
    region: "South West England",
    population: "4700",
  },
  {
    label: "Axminster",
    href: `/${slugifyLocation("Axminster")}`,
    county: "Devon",
    region: "South West England",
    population: "5900",
  },
  {
    label: "Wellington",
    href: `/${slugifyLocation("Wellington")}`,
    county: "Somerset",
    region: "South West England",
    population: "14900",
  },
  {
    label: "Ilminster",
    href: `/${slugifyLocation("Ilminster")}`,
    county: "Somerset",
    region: "South West England",
    population: "5800",
  },
];

export const nearbyLocationLinks = LOCATION_METADATA.map(({ label, href }) => ({
  label,
  href,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentHref = currentLocationLabel ? `/${slugifyLocation(currentLocationLabel)}` : "/";
  const filteredNearbyLinks = nearbyLocationLinks.filter((location) => location.href !== currentHref);

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_METADATA.map(({ label }, index) => ({
  index: index + 1,
  label,
  county: LOCATION_METADATA[index]?.county ?? "",
  region: LOCATION_METADATA[index]?.region ?? "",
  slug: slugifyLocation(label),
}));