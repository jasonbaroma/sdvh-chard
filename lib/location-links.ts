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
  population: "13674",
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
    label: "Ilminster",
    href: `/${slugifyLocation("Ilminster")}`,
    county: "Somerset",
    region: "South West England",
    population: "5808",
  },
  {
    label: "Honiton",
    href: `/${slugifyLocation("Honiton")}`,
    county: "Devon",
    region: "South West England",
    population: "11922",
  },
  {
    label: "Bridport",
    href: `/${slugifyLocation("Bridport")}`,
    county: "Dorset",
    region: "South West England",
    population: "10612",
  },
  {
    label: "Langport",
    href: `/${slugifyLocation("Langport")}`,
    county: "Somerset",
    region: "South West England",
    population: "1081",
  },
  {
    label: "Colyton",
    href: `/${slugifyLocation("Colyton")}`,
    county: "Devon",
    region: "South West England",
    population: "2305",
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
  slug: slugifyLocation(label),
}));

export const mainLocationMetadata = {
  name: mainLocationName,
  county: 'Somerset',
  region: 'South West England',
  population: '13674',
}
