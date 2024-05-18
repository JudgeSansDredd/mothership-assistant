import { CharacterClass, SkillType } from "./types";

export const characterClasses: CharacterClass[] = [
  {
    name: "marine",
    description:
      "Marines are handy in a fight, but whenever they Panic it may cause problems for the rest of the crew.",
    // modifiers: ["+10 Combat", "+10 Body Save", "+20 Fear Save", "+1 Max Wound"],
    modifiers: [
      {
        description: "+10 Combat",
        stats: { combat: 10 },
      },
      {
        description: "+10 Body Save",
        saves: { body: 10 },
      },
      {
        description: "+20 Fear Save",
        saves: { fear: 20 },
      },
      {
        description: "+1 Max Wound",
        wounds: 1,
      },
    ],
    skills: {
      granted: ["military training", "athletics"],
      bonus: [{ expert: 1 }, { trained: 2 }],
    },
  },
  {
    name: "android",
    description:
      "Androids are a terrifying and exciting addition to any crew. They tend to unnerve other crewmembers with their cold inhumanity.",
    modifiers: [
      {
        description: "+20 Intellect",
        stats: { intellect: 20 },
      },
      {
        description: "-10 to 1 Stat",
        stats: { any: -10 },
      },
      {
        description: "+60 Fear Save",
        saves: { fear: 60 },
      },
      {
        description: "+1 Max Wound",
        wounds: 1,
      },
    ],
    skills: {
      granted: ["linguistics", "computers", "mathematics"],
      bonus: [{ expert: 1 }, { trained: 2 }],
    },
  },
  {
    name: "scientist",
    description:
      "Scientists are doctors, researchers, or anyone who wnats to slice open creatures (or infected crewmembers) with a scalpel.",
    // modifiers: ["+10 Intellect", "+5 to 1 Stat", "+30 Sanity Save"],
    modifiers: [
      {
        description: "+10 Intellect",
        stats: { intellect: 10 },
      },
      {
        description: "+5 to 1 Stat",
        stats: { any: 5 },
      },
      {
        description: "+30 Sanity Save",
        saves: { sanity: 30 },
      },
    ],
    skills: {
      bonus: [{ master: 1 }, { expert: 1 }, { trained: 2 }],
    },
  },
  {
    name: "teamster",
    description:
      "Teamsters are rough and tumble blue-collar space workers, mechnaics, engineers, miners, and pilots",
    // modifiers: ["+5 to All Stats", "+10 to All Saves"],
    modifiers: [
      {
        description: "+5 to All Stats",
        stats: { strength: 5, speed: 5, intellect: 5, combat: 5 },
      },
      {
        description: "+10 to All Saves",
        saves: { sanity: 10, fear: 10, body: 10 },
      },
    ],
    skills: {
      granted: ["industrial equipment", "zero-g"],
      bonus: [{ trained: 1 }, { expert: 1 }],
    },
  },
];

export const trainedSkillNames = [
  "archaeology",
  "art",
  "athletics",
  "botany",
  "chemistry",
  "computers",
  "geology",
  "industrial equipment",
  "jury-rigging",
  "linguistics",
  "mathematics",
  "military training",
  "rimwise",
  "theology",
  "zero-g",
  "zoology",
] as const;

export const expertSkillNames = [
  "asteroid mining",
  "ecology",
  "explosives",
  "field medicine",
  "firearms",
  "hacking",
  "hand-to-hand combat",
  "mechanical repair",
  "mysticism",
  "pathology",
  "pharmacology",
  "physics",
  "piloting",
  "psychology",
  "wilderness survival",
] as const;

export const masterSkillNames = [
  "artificial intelligence",
  "command",
  "cybernetics",
  "engineering",
  "exobiology",
  "hyperspace",
  "planetology",
  "robotics",
  "sophontology",
  "surgery",
  "xenoesotericism",
] as const;

export const skills: SkillType[] = [
  {
    name: "archaeology",
    description: "Ancient cultures and artifcats",
    level: "trained",
  },
  {
    name: "art",
    description:
      "The expression or application of a species' creative ability and imagination.",
    level: "trained",
  },
  {
    name: "athletics",
    description: "Physical fitness, sports, and games.",
    level: "trained",
  },
  {
    name: "botany",
    description: "The study of plant life.",
    level: "trained",
  },
  {
    name: "chemistry",
    description: "The study of matter and its chemical elements and compounds.",
    level: "trained",
  },
  {
    name: "computers",
    description: "Fluent use of computers and their networks.",
    level: "trained",
  },
  {
    name: "geology",
    description:
      "The study of the solid features of any terrestrial planet or its satellites.",
    level: "trained",
  },
  {
    name: "industrial equipment",
    description:
      "The safe and proper use of heavy machinery and tools (exosuits, forklifts, drills, breakers, laser cutters, etc.).",
    level: "trained",
  },
  {
    name: "jury-rigging",
    description:
      "Makeshift repair, using only the tools and materials at hand.",
    level: "trained",
  },
  {
    name: "linguistics",
    description: "The study of languages (alive, dead, and undiscovered).",
    level: "trained",
  },
  {
    name: "mathematics",
    description: "The study of numbers, quantity, and space.",
    level: "trained",
  },
  {
    name: "military training",
    description: "The study of languages (alive, dead, and undiscovered).",
    level: "trained",
  },
  {
    name: "rimwise",
    description:
      "Practical knowledge and know-how regarding outer rim colonies, their customs, and the seedier parts of the galaxy.",
    level: "trained",
  },
  {
    name: "theology",
    description: "The study of the divine or devotion to a religion.",
    level: "trained",
  },
  {
    name: "zero-g",
    description:
      "Practice and know-how of working in a vacuum, orientation, vaccsuit operation, etc.",
    level: "trained",
  },
  {
    name: "zoology",
    description: "The study of animal life.",
    level: "trained",
  },
  {
    name: "asteroid mining",
    description:
      "Training in the tools and procedures used for mining asteroids.",
    level: "expert",
    prerequisites: ["industrial equipment", "geology"],
  },
  {
    name: "ecology",
    description:
      "The study of organisms and how they relate to their environment.",
    level: "expert",
    prerequisites: ["botany", "geology"],
  },
  {
    name: "explosives",
    description:
      "Design and effective use of explosive devices (bombs, grenade, shells, land mines, etc.).",
    level: "expert",
    prerequisites: ["jury-rigging", "chemistry", "military training"],
  },
  {
    name: "field medicine",
    description: "Emergency medical care and treatment.",
    level: "expert",
    prerequisites: ["zoology", "botany"],
  },
  {
    name: "firearms",
    description: "Safe and effective use of guns.",
    level: "expert",
    prerequisites: ["military training", "rimwise"],
  },
  {
    name: "hacking",
    description: "Unauthorized access to computer systems and networks.",
    level: "expert",
    prerequisites: ["computers"],
  },
  {
    name: "hand-to-hand combat",
    description: "Melee fighting.",
    level: "expert",
    prerequisites: ["rimwise", "athletics"],
  },
  {
    name: "mechanical repair",
    description: "Fixing broken machines.",
    level: "expert",
    prerequisites: ["industrial equipment", "jury-rigging"],
  },
  {
    name: "mysticism",
    description: "Spiritual apprehension of hidden knowledge.",
    level: "expert",
    prerequisites: ["art", "theology", "archaeology"],
  },
  {
    name: "pathology",
    description: "Study of the causes and effects of diseases.",
    level: "expert",
    prerequisites: ["zoology", "botany"],
  },
  {
    name: "pharmacology",
    description: "Study of drugs and medication.",
    level: "expert",
    prerequisites: ["chemistry"],
  },
  {
    name: "physics",
    description:
      "Study of matter, motion, energy, and their effects in space and time.",
    level: "expert",
    prerequisites: ["mathematics"],
  },
  {
    name: "piloting",
    description:
      "Operation and control of aircraft, spacecraft, and other vehicles.",
    level: "expert",
    prerequisites: ["zero-g"],
  },
  {
    name: "psychology",
    description: "The study of behavior and the human mind.",
    level: "expert",
    prerequisites: ["linguistics", "zoology", "botany"],
  },
  {
    name: "wilderness survival",
    description:
      "Applicable know-how regarding the basic necessities of life (food, water, shelter) in a natural environment.",
    level: "expert",
    prerequisites: ["botany", "military training"],
  },
  {
    name: "artificial intelligence",
    description: "The study of intelligence as demonstrated by machines.",
    level: "master",
    prerequisites: ["hacking"],
  },
  {
    name: "command",
    description: "Leadership, management, and authority.",
    level: "master",
    prerequisites: ["firearms", "piloting"],
  },
  {
    name: "cybernetics",
    description:
      "The physical and neural interfaces between organisms and machines.",
    level: "master",
    prerequisites: ["mechanical repair"],
  },
  {
    name: "engineering",
    description:
      "The design, building, and use of engines, machines, and structures.",
    level: "master",
    prerequisites: ["mechanical repair"],
  },
  {
    name: "exobiology",
    description: "The study of and search for intelligent alien life.",
    level: "master",
    prerequisites: ["pathology"],
  },
  {
    name: "hyperspace",
    description: "Faster-than-light travel.",
    level: "master",
    prerequisites: ["piloting", "physics", "mysticism"],
  },
  {
    name: "planetology",
    description: "Study of planets and other celestial bodies.",
    level: "master",
    prerequisites: ["ecology", "asteroid mining"],
  },
  {
    name: "robotics",
    description:
      "Design, maintenance, and operation of robots, drones, and androids.",
    level: "master",
    prerequisites: ["mechanical repair"],
  },
  {
    name: "sophontology",
    description: "The study of the behavior and mind of inhuman entities.",
    level: "master",
    prerequisites: ["psychology"],
  },
  {
    name: "surgery",
    description: "Manually operating on living or dead biological subjects.",
    level: "master",
    prerequisites: ["field medicine", "pathology"],
  },
  {
    name: "xenoesotericism",
    description:
      "Obscure beliefs, mysticism, and religion regarding non-human entities.",
    level: "master",
    prerequisites: ["mysticism"],
  },
];

export const bgColors = {
  primary:
    "bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white",
  secondary:
    "text-black dark:text-white bg-gray-400 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700",
  tertiary:
    "text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-black dark:hover:bg-gray-900",
};
