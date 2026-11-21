/**
 * Central Census 2011 values from Government of Haryana,
 * Statistical Abstract of Haryana 2023-24, Table 3.6 (area/population/density/sex ratio)
 * and Table 10.6 (literacy). These reflect 2011 district boundaries.
 * IMPORTANT: Do not use area2011 as modern boundaries for Bhiwani (2016 split) or
 * Hisar (2025 Hansi formation). Population density uses 2011 boundaries.
 */
export const HARYANA_CENSUS_2011_SOURCE =
  "https://cdnbbsr.s3waas.gov.in/s32b0f658cbffd284984fb11d90254081f/uploads/2025/03/202503171202509032.pdf";

export type DistrictStatistics = {
  areaKm2: number;
  population: number;
  sexRatio: number | null;
  literacyPct: number | null;
  densityPerKm2: number | null;
  basis: "census2011" | "districtProfile";
  sourceUrl: string;
};

export const HARYANA_DISTRICT_STATISTICS: Record<string, DistrictStatistics> = {
  'Ambala': { areaKm2: 1574, population: 1128350, sexRatio: 885, literacyPct: 81.75, densityPerKm2: 717, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Kurukshetra': { areaKm2: 1530, population: 964655, sexRatio: 888, literacyPct: 76.31, densityPerKm2: 630, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Yamunanagar': { areaKm2: 1768, population: 1214205, sexRatio: 877, literacyPct: 77.99, densityPerKm2: 687, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Panchkula': { areaKm2: 898, population: 561293, sexRatio: 873, literacyPct: 81.88, densityPerKm2: 625, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Faridabad': { areaKm2: 741, population: 1809733, sexRatio: 873, literacyPct: 81.70, densityPerKm2: 2442, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Mewat (Nuh)': { areaKm2: 1507, population: 1089263, sexRatio: 907, literacyPct: 54.08, densityPerKm2: 723, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Palwal': { areaKm2: 1359, population: 1042708, sexRatio: 880, literacyPct: 69.32, densityPerKm2: 767, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Gurugram': { areaKm2: 1258, population: 1514432, sexRatio: 854, literacyPct: 84.70, densityPerKm2: 1204, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Mahendragarh': { areaKm2: 1899, population: 922088, sexRatio: 895, literacyPct: 77.72, densityPerKm2: 486, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Rewari': { areaKm2: 1594, population: 900332, sexRatio: 898, literacyPct: 80.99, densityPerKm2: 565, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Hisar': { areaKm2: 3983, population: 1743931, sexRatio: 872, literacyPct: 72.89, densityPerKm2: 438, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Jind': { areaKm2: 2702, population: 1334152, sexRatio: 871, literacyPct: 71.44, densityPerKm2: 494, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Sirsa': { areaKm2: 4277, population: 1295189, sexRatio: 897, literacyPct: 68.82, densityPerKm2: 303, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Fatehabad': { areaKm2: 2538, population: 942011, sexRatio: 902, literacyPct: 67.92, densityPerKm2: 371, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Rohtak': { areaKm2: 1745, population: 1061204, sexRatio: 867, literacyPct: 80.22, densityPerKm2: 608, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Sonipat': { areaKm2: 2122, population: 1450001, sexRatio: 856, literacyPct: 79.12, densityPerKm2: 683, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Bhiwani': { areaKm2: 4778, population: 1634445, sexRatio: 886, literacyPct: 75.21, densityPerKm2: 342, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Jhajjar': { areaKm2: 1834, population: 958405, sexRatio: 862, literacyPct: 80.65, densityPerKm2: 523, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Karnal': { areaKm2: 2520, population: 1505324, sexRatio: 887, literacyPct: 74.73, densityPerKm2: 597, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Panipat': { areaKm2: 1268, population: 1205437, sexRatio: 864, literacyPct: 75.94, densityPerKm2: 951, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  'Kaithal': { areaKm2: 2317, population: 1074304, sexRatio: 881, literacyPct: 69.15, densityPerKm2: 464, basis: "census2011", sourceUrl: HARYANA_CENSUS_2011_SOURCE },
  "Hansi": { areaKm2: 1349.76, population: 540994, sexRatio: null, literacyPct: null, densityPerKm2: null, basis: "districtProfile", sourceUrl: "https://hansi.haryana.gov.in/about-district/" },
  "Charkhi-Dadri": { areaKm2: 1370.11, population: 502276, sexRatio: 881, literacyPct: 67.04, densityPerKm2: null, basis: "districtProfile", sourceUrl: "https://charkhidadri.gov.in/" },
};

/** Indian grouping of numbers without runtime locale differences. */
export const formatIndianNumber = (value: number): string =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);

export const formatPercent = (value: number | null): string =>
  value === null ? "—" : `${value.toFixed(2)}%`;
