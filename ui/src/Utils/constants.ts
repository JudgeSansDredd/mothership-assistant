import { CharacterClassType, SkillType } from "./types";

export const statNames = ["strength", "speed", "intellect", "combat"] as const;
export const saveNames = ["sanity", "fear", "body"] as const;

export const characterClasses: CharacterClassType[] = [
  {
    name: "marine",
    description:
      "Marines are handy in a fight, but whenever they Panic it may cause problems for the rest of the crew.",
    traumaResponse:
      "Whenever you panic, every close friendly player must make a fear save.",
    skillDescription:
      "Military Training, Athletics, and 1 Expert Skill or 2 Trained Skills.",
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
    traumaResponse:
      "Fear saves made by close friendly players are at disadvantage.",
    skillDescription:
      "Linguistics, Computers, Mathematics, and 1 Expert or 2 Trained Skills.",
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
    traumaResponse:
      "Whenever you fail a sanity save, all close friendly players gain one stress.",
    skillDescription:
      "1 Master Skill, and an Expert and Trained Skill prerequisite. Additionally, 1 Trained Skill.",
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
      bonus: [{ master: 1, expert: 1, trained: 2 }],
    },
  },
  {
    name: "teamster",
    description:
      "Teamsters are rough and tumble blue-collar space workers, mechnaics, engineers, miners, and pilots.",
    traumaResponse:
      "Once per session, you may take advantage on a panic check.",
    skillDescription:
      "Industrial Equipment, Zero-G, and 1 Trained Skill and 1 Expert Skill.",
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
      bonus: [{ trained: 1, expert: 1 }],
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
    x: 0,
    y: 12,
    preReqLineStartPoint: 90,
  },
  {
    name: "art",
    description:
      "The expression or application of a species' creative ability and imagination.",
    level: "trained",
    x: 0,
    y: 11,
    preReqLineStartPoint: 35,
  },
  {
    name: "athletics",
    description: "Physical fitness, sports, and games.",
    level: "trained",
    x: 0,
    y: 16,
    preReqLineStartPoint: 70,
  },
  {
    name: "botany",
    description: "The study of plant life.",
    level: "trained",
    x: 0,
    y: 3,
    preReqLineStartPoint: 56,
    preReqLines: [
      [
        { type: "line", dx: 80 },
        { type: "curve", start: "left", end: "top" },
        { type: "line", dy: -60 },
        { type: "curve", start: "bottom", end: "right" },
        { type: "line", dx: 67 },
        { type: "line", dy: -5 },
        { type: "curve", start: "bottom", end: "right" },
        { type: "line", dx: 32 },
        { type: "curve", start: "left", end: "top" },
        { type: "endArrow", position: "bottom", skill: "psychology" },
      ],
      [
        { type: "line", dx: 80 },
        { type: "curve", start: "left", end: "top" },
        { type: "line", dy: -60 },
        { type: "curve", start: "bottom", end: "right" },
        { type: "endArrow", position: "left", skill: "pathology" },
      ],
      [
        { type: "line", dx: 80 },
        { type: "curve", start: "left", end: "top" },
        { type: "line", dy: -60 },
        { type: "curve", start: "bottom", end: "right" },
        { type: "line", dx: 67 },
        { type: "line", dy: 5 },
        { type: "curve", start: "top", end: "right" },
        { type: "line", dx: 32 },
        { type: "curve", start: "left", end: "bottom" },
        { type: "endArrow", position: "top", skill: "field medicine" },
      ],
      [{ type: "endArrow", position: "left", skill: "ecology" }],
    ],
  },
  {
    name: "chemistry",
    description: "The study of matter and its chemical elements and compounds.",
    level: "trained",
    y: 7,
    x: 0,
    preReqLineStartPoint: 75,
  },
  {
    name: "computers",
    description: "Fluent use of computers and their networks.",
    level: "trained",
    y: 8,
    x: 0,
    preReqLineStartPoint: 80,
  },
  {
    name: "geology",
    description:
      "The study of the solid features of any terrestrial planet or its satellites.",
    level: "trained",
    x: 0,
    y: 4,
    preReqLineStartPoint: 65,
  },
  {
    name: "industrial equipment",
    description:
      "The safe and proper use of heavy machinery and tools (exosuits, forklifts, drills, breakers, laser cutters, etc.).",
    level: "trained",
    x: 0,
    y: 5,
    preReqLineStartPoint: 135,
  },
  {
    name: "jury-rigging",
    description:
      "Makeshift repair, using only the tools and materials at hand.",
    level: "trained",
    x: 0,
    y: 6,
    preReqLineStartPoint: 90,
  },
  {
    name: "linguistics",
    description: "The study of languages (alive, dead, and undiscovered).",
    level: "trained",
    x: 0,
    y: 0,
    preReqLineStartPoint: 80,
    preReqLines: [
      [{ type: "endArrow", position: "left", skill: "psychology" }],
    ],
  },
  {
    name: "mathematics",
    description: "The study of numbers, quantity, and space.",
    level: "trained",
    y: 10,
    x: 0,
    preReqLineStartPoint: 90,
  },
  {
    name: "military training",
    description: "The study of languages (alive, dead, and undiscovered).",
    level: "trained",
    x: 0,
    y: 14,
    preReqLineStartPoint: 108,
  },
  {
    name: "rimwise",
    description:
      "Practical knowledge and know-how regarding outer rim colonies, their customs, and the seedier parts of the galaxy.",
    level: "trained",
    x: 0,
    y: 15,
    preReqLineStartPoint: 65,
  },
  {
    name: "theology",
    description: "The study of the divine or devotion to a religion.",
    level: "trained",
    x: 0,
    y: 13,
    preReqLineStartPoint: 70,
  },
  {
    name: "zero-g",
    description:
      "Practice and know-how of working in a vacuum, orientation, vaccsuit operation, etc.",
    level: "trained",
    y: 9,
    x: 0,
    preReqLineStartPoint: 60,
  },
  {
    name: "zoology",
    description: "The study of animal life.",
    level: "trained",
    x: 0,
    y: 1,
    preReqLineStartPoint: 63,
    preReqLines: [
      [
        { type: "line", dx: 160 },
        { type: "line", dy: -5 },
        { type: "curve", start: "bottom", end: "right" },
        { type: "line", dx: 32 },
        { type: "curve", start: "left", end: "top" },
        { type: "endArrow", position: "bottom", skill: "psychology" },
      ],
      [{ type: "endArrow", position: "left", skill: "pathology" }],
      [
        { type: "line", dx: 160 },
        { type: "line", dy: 5 },
        { type: "curve", start: "top", end: "right" },
        { type: "line", dx: 32 },
        { type: "curve", start: "left", end: "bottom" },
        { type: "endArrow", position: "top", skill: "field medicine" },
      ],
    ],
  },
  {
    name: "asteroid mining",
    description:
      "Training in the tools and procedures used for mining asteroids.",
    level: "expert",
    prerequisites: ["industrial equipment", "geology"],
    x: 1,
    y: 4,
    preReqLines: [
      // [
      //   { type: "endArrow", position: "left" },
      //   { type: "lineToPreReq", skillName: "geology" },
      // ],
      // [
      //   { type: "endArrow", position: "bottom" },
      //   { type: "curve", start: "top", end: "left" },
      //   { type: "line", dx: -10, dy: 0 },
      //   { type: "curve", start: "right", end: "bottom" },
      //   { type: "line", dx: 0, dy: 4 },
      //   { type: "lineToPreReq", skillName: "industrial equipment" },
      // ],
    ],
  },
  {
    name: "ecology",
    description:
      "The study of organisms and how they relate to their environment.",
    level: "expert",
    prerequisites: ["botany", "geology"],
    x: 1,
    y: 3,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "botany" },
    //   ],
    //   [
    //     { type: "endArrow", position: "bottom" },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "line", dx: -10, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 4 },
    //     { type: "lineToPreReq", skillName: "geology" },
    //   ],
    // ],
  },
  {
    name: "explosives",
    description:
      "Design and effective use of explosive devices (bombs, grenade, shells, land mines, etc.).",
    level: "expert",
    prerequisites: ["jury-rigging", "chemistry", "military training"],
    x: 1,
    y: 6,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "jury-rigging" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -125, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 20 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "chemistry" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -100, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 25 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 30 },
    //     { type: "skip", dx: 0, dy: 10 },
    //     { type: "line", dx: 0, dy: 25 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "military training" },
    //   ],
    // ],
  },
  {
    name: "field medicine",
    description: "Emergency medical care and treatment.",
    level: "expert",
    prerequisites: ["zoology", "botany"],
    x: 1,
    y: 2,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "top" },
    //     { type: "curve", start: "bottom", end: "left" },
    //     { type: "line", dx: -10, dy: 0 },
    //     { type: "curve", start: "right", end: "top" },
    //     { type: "line", dx: 0, dy: -4 },
    //     { type: "lineToPreReq", skillName: "zoology" },
    //   ],
    //   [
    //     { type: "endArrow", position: "top" },
    //     { type: "curve", start: "bottom", end: "left" },
    //     { type: "line", dx: -10, dy: 0 },
    //     { type: "curve", start: "right", end: "top" },
    //     { type: "line", dx: 0, dy: -4 },
    //     { type: "line", dx: -82, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 60 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "botany" },
    //   ],
    // ],
  },
  {
    name: "firearms",
    description: "Safe and effective use of guns.",
    level: "expert",
    prerequisites: ["military training", "rimwise"],
    x: 1,
    y: 14,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "military training" },
    //   ],
    //   [
    //     { type: "endArrow", position: "bottom" },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "line", dx: -105, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 4 },
    //     { type: "lineToPreReq", skillName: "rimwise" },
    //   ],
    // ],
  },
  {
    name: "hacking",
    description: "Unauthorized access to computer systems and networks.",
    level: "expert",
    prerequisites: ["computers"],
    x: 1,
    y: 8,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "computers" },
    //   ],
    // ],
  },
  {
    name: "hand-to-hand combat",
    description: "Melee fighting.",
    level: "expert",
    prerequisites: ["rimwise", "athletics"],
    x: 1,
    y: 15,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "rimwise" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -125, dy: 0 },
    //     { type: "curve", start: "right", end: "top" },
    //     { type: "line", dx: 0, dy: -20 },
    //     { type: "curve", start: "bottom", end: "left" },
    //     { type: "lineToPreReq", skillName: "military training" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -50, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 20 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "athletics" },
    //   ],
    // ],
  },
  {
    name: "mechanical repair",
    description: "Fixing broken machines.",
    level: "expert",
    prerequisites: ["industrial equipment", "jury-rigging"],
    x: 1,
    y: 5,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "industrial equipment" },
    //   ],
    //   [
    //     { type: "endArrow", position: "bottom" },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "line", dx: -150, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 4 },
    //     { type: "lineToPreReq", skillName: "jury-rigging" },
    //   ],
    // ],
  },
  {
    name: "mysticism",
    description: "Spiritual apprehension of hidden knowledge.",
    level: "expert",
    prerequisites: ["art", "theology", "archaeology"],
    x: 1,
    y: 11,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "art" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -20, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 60 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "theology" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -20, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 20 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "archaeology" },
    //   ],
    // ],
  },
  {
    name: "pathology",
    description: "Study of the causes and effects of diseases.",
    level: "expert",
    prerequisites: ["zoology", "botany"],
    x: 1,
    y: 1,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "zoology" },
    //   ],
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "line", dx: -100, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 60 },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "lineToPreReq", skillName: "botany" },
    //   ],
    // ],
  },
  {
    name: "pharmacology",
    description: "Study of drugs and medication.",
    level: "expert",
    prerequisites: ["chemistry"],
    x: 1,
    y: 7,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "chemistry" },
    //   ],
    // ],
  },
  {
    name: "physics",
    description:
      "Study of matter, motion, energy, and their effects in space and time.",
    level: "expert",
    prerequisites: ["mathematics"],
    x: 1,
    y: 10,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "mathematics" },
    //   ],
    // ],
  },
  {
    name: "piloting",
    description:
      "Operation and control of aircraft, spacecraft, and other vehicles.",
    level: "expert",
    prerequisites: ["zero-g"],
    x: 1,
    y: 9,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "zero-g" },
    //   ],
    // ],
  },
  {
    name: "psychology",
    description: "The study of behavior and the human mind.",
    level: "expert",
    prerequisites: ["linguistics", "zoology", "botany"],
    x: 1,
    y: 0,
    preReqLineStartPoint: 80,
    preReqLines: [
      // [
      //   { type: "endArrow", position: "bottom" },
      //   { type: "curve", start: "top", end: "left" },
      //   { type: "line", dx: -10, dy: 0 },
      //   { type: "curve", start: "right", end: "bottom" },
      //   { type: "line", dx: 0, dy: 4 },
      //   { type: "line", dx: -82, dy: 0 },
      //   { type: "curve", start: "right", end: "bottom" },
      //   { type: "line", dx: 0, dy: 60 },
      //   { type: "curve", start: "top", end: "left" },
      //   { type: "lineToPreReq", skillName: "botany" },
      // ],
      // [
      //   { type: "endArrow", position: "bottom" },
      //   { type: "curve", start: "top", end: "left" },
      //   { type: "line", dx: -10, dy: 0 },
      //   { type: "curve", start: "right", end: "bottom" },
      //   { type: "line", dx: 0, dy: 4 },
      //   { type: "lineToPreReq", skillName: "zoology" },
      // ],
    ],
  },
  {
    name: "wilderness survival",
    description:
      "Applicable know-how regarding the basic necessities of life (food, water, shelter) in a natural environment.",
    level: "expert",
    prerequisites: ["botany", "military training"],
    x: 1,
    y: 13,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "top" },
    //     { type: "curve", start: "bottom", end: "left" },
    //     { type: "line", dx: -27, dy: 0 },
    //     { type: "skip", dx: -10, dy: 0 },
    //     { type: "line", dx: -37, dy: 0 },
    //     { type: "curve", start: "right", end: "top" },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -29 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -4 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -16 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -30 },
    //     { type: "skip", dx: 0, dy: -10 },
    //     { type: "line", dx: 0, dy: -25 },
    //     { type: "curve", start: "bottom", end: "left" },
    //     { type: "lineToPreReq", skillName: "botany" },
    //   ],
    //   [
    //     { type: "endArrow", position: "bottom" },
    //     { type: "curve", start: "top", end: "left" },
    //     { type: "line", dx: -10, dy: 0 },
    //     { type: "curve", start: "right", end: "bottom" },
    //     { type: "line", dx: 0, dy: 4 },
    //     { type: "lineToPreReq", skillName: "military training" },
    //   ],
    // ],
  },
  {
    name: "artificial intelligence",
    description: "The study of intelligence as demonstrated by machines.",
    level: "master",
    prerequisites: ["hacking"],
    x: 2,
    y: 8,
  },
  {
    name: "command",
    description: "Leadership, management, and authority.",
    level: "master",
    prerequisites: ["firearms", "piloting"],
    x: 2,
    y: 14,
  },
  {
    name: "cybernetics",
    description:
      "The physical and neural interfaces between organisms and machines.",
    level: "master",
    prerequisites: ["mechanical repair"],
    x: 2,
    y: 6,
  },
  {
    name: "engineering",
    description:
      "The design, building, and use of engines, machines, and structures.",
    level: "master",
    prerequisites: ["mechanical repair"],
    x: 2,
    y: 5,
  },
  {
    name: "exobiology",
    description: "The study of and search for intelligent alien life.",
    level: "master",
    prerequisites: ["pathology"],
    x: 2,
    y: 1,
  },
  {
    name: "hyperspace",
    description: "Faster-than-light travel.",
    level: "master",
    prerequisites: ["piloting", "physics", "mysticism"],
    x: 2,
    y: 10,
  },
  {
    name: "planetology",
    description: "Study of planets and other celestial bodies.",
    level: "master",
    prerequisites: ["ecology", "asteroid mining"],
    x: 2,
    y: 3,
  },
  {
    name: "robotics",
    description:
      "Design, maintenance, and operation of robots, drones, and androids.",
    level: "master",
    prerequisites: ["mechanical repair"],
    x: 2,
    y: 4,
  },
  {
    name: "sophontology",
    description: "The study of the behavior and mind of inhuman entities.",
    level: "master",
    prerequisites: ["psychology"],
    x: 2,
    y: 0,
    // preReqLines: [
    //   [
    //     { type: "endArrow", position: "left" },
    //     { type: "lineToPreReq", skillName: "psychology" },
    //   ],
    // ],
  },
  {
    name: "surgery",
    description: "Manually operating on living or dead biological subjects.",
    level: "master",
    prerequisites: ["field medicine", "pathology"],
    x: 2,
    y: 2,
  },
  {
    name: "xenoesotericism",
    description:
      "Obscure beliefs, mysticism, and religion regarding non-human entities.",
    level: "master",
    prerequisites: ["mysticism"],
    x: 2,
    y: 11,
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

export const skillYSpacing = 40;
export const skillXSpacing = 275;
