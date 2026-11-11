/** Sport figures transcribed from the PIB Asian Games factsheet, checked 10 Nov 2026.
 * Ranking and top-five standings: Indian Olympic Association campaign page.
 */
export const asianGamesSources = {
  pib: "https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2319703&lang=2&reg=48",
  ioa: "https://olympic.ind.in/asian-games-2026/",
} as const

export const sportMedals = [
  { sport: "Athletics", gold: 1, silver: 9, bronze: 14 },
  { sport: "Shooting", gold: 3, silver: 8, bronze: 4 },
  { sport: "Archery", gold: 5, silver: 2, bronze: 2 },
  { sport: "Boxing", gold: 3, silver: 0, bronze: 3 },
  { sport: "Wrestling", gold: 2, silver: 2, bronze: 2 },
  { sport: "Squash", gold: 0, silver: 2, bronze: 3 },
  { sport: "Sailing", gold: 0, silver: 1, bronze: 2 },
  { sport: "Cricket", gold: 2, silver: 0, bronze: 0 },
  { sport: "Hockey", gold: 2, silver: 0, bronze: 0 },
  { sport: "Kabaddi", gold: 2, silver: 0, bronze: 0 },
  { sport: "Golf", gold: 1, silver: 1, bronze: 0 },
  { sport: "Weightlifting", gold: 0, silver: 1, bronze: 0 },
  { sport: "Wushu", gold: 0, silver: 1, bronze: 0 },
  ...["Badminton", "Kurash", "Mixed Martial Arts", "Rowing", "Sepak Takraw", "Soft tennis", "Table tennis"].map(sport => ({ sport, gold: 0, silver: 0, bronze: 1 })),
]
export const indiaMedals = sportMedals.reduce((total, row) => ({ gold: total.gold + row.gold, silver: total.silver + row.silver, bronze: total.bronze + row.bronze }), { gold: 0, silver: 0, bronze: 0 })
export const indiaTotal = indiaMedals.gold + indiaMedals.silver + indiaMedals.bronze

export const asianGamesQuestions = [
  { question: "Which country hosted the 20th Asian Games?", answer: "Japan, in Aichi Prefecture and Nagoya.", explanation: "Distinguish the host country from the host region. Aichi and Nagoya identify the 2026 edition, while Hangzhou hosted the preceding edition." },
  { question: "When were the 2026 Asian Games held?", answer: "19 September–4 October 2026.", explanation: "These are the Asian Games dates. The Asian Para Games were a separate competition with a different schedule." },
  { question: "How many medals did India win?", answer: `${indiaTotal}: ${indiaMedals.gold} gold, ${indiaMedals.silver} silver and ${indiaMedals.bronze} bronze.`, explanation: "Add the three medal colours: 21 + 27 + 37 = 85. Do not confuse an athlete count with a medal-event count." },
  { question: "Where did India finish in the overall standings?", answer: "Fourth.", explanation: "The IOA table places India behind China, Japan and South Korea. Medal rankings use gold medals first, rather than the overall number of medals." },
  { question: "Which sport contributed the most Indian medals?", answer: "Athletics, with 24 medals.", explanation: "Its breakdown is 1 gold + 9 silver + 14 bronze. The sport with the most total medals need not lead in gold medals." },
  { question: "Which sport contributed the most Indian gold medals?", answer: "Archery, with 5 gold medals.", explanation: "The PIB sport table records 5 gold, 2 silver and 2 bronze in archery, for a total of 9." },
  { question: "How many gold medals came from cricket, hockey and kabaddi together?", answer: "Six.", explanation: "Each of these three sports contributed two gold medals: 2 + 2 + 2 = 6. This compares event medals, not the number of players on each team." },
  { question: "What was India's wrestling medal breakdown?", answer: "2 gold, 2 silver and 2 bronze: 6 in total.", explanation: "Use the complete sport table rather than extrapolating from a single winner's result." },
  { question: "Which medal colour contributed the largest share of India's tally?", answer: "Bronze, with 37 medals.", explanation: "Compare the three counts: 37 exceeds 27 silver and 21 gold. Bronze accounts for about 43.5% of the 85 medals." },
  { question: "Who led India's parade at the opening ceremony?", answer: "Manu Bhaker and Pawan Sehrawat.", explanation: "The PIB account names the shooter and kabaddi player as the opening-parade flag bearers. Do not substitute the closing ceremony's representative." },
]
