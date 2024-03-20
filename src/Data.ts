// TODO: [
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d0/HMGTurreticon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c7/Shieldrelayicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/ac/Teslaicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5d/Minefieldicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/7f/Fireminefieldicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/88/MGsentryicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e3/Gatlingsentryicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5e/Mortarsentryicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/ba/Autocannoasentryicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/3b/Missilesentryicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/27/EMSmortaricon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/OrbitalGatlingicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e6/OrbitalAirbursticon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/1a/Orbital120icon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fb/Orbital380icon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/OrbitalWalkingicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/74/OrbitalLasericon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/e0/OrbitalRailcannonicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/6/6d/OrbitalPrecisionicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/36/OrbitalGasicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/1/12/OrbitalEMSicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ef/OrbitalSmokeicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4d/EagleStrafingicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/9/94/EagleAirstrikeicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/79/EagleClusterbombicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/00/EagleSmokeicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fd/EagleRocketpodicon.png",
//   "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2d/Eagle500icon.png"
// ]
export type Direction = 'down' | 'left' | 'right' | 'up' | undefined;

export type Category = {
  id: number;
  name: string;
}

export type Stratagem = {
  name: string;
  code: Direction[];
  category_id: number;
  icon: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Support Weapons",
  },
  {
    id: 2,
    name: "Backpacks",
  },
  {
    id: 3,
    name: "Orbitals",
  },
  {
    id: 4,
    name: "Eagles",
  },
  {
    id: 5,
    name: "Defensive",
  },
  {
    id: 6,
    name: "Mission",
  }
];

export const SUPPORT_WEAPONS: Stratagem[] = [
  {
    name: "Machine Gun",
    code: ["down", "left", "down", "up", "right"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/MG-43icon.png"
  },
  {
    name: "Anti-Materiel Rifle",
    code: ["down", "left", "right", "up", "down"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/b0/APW-1icon.png"
  },
  {
    name: "Stalwart",
    code: ["down", "left", "down", "up", "up", "left"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/46/M-105icon.png"
  },
  {
    name: "Expendable Anti-Tank",
    code: ["down", "down", "left", "up", "right"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/46/EAT-17icon.png"
  },
  {
    name: "Recoilless Rifle",
    code: ["down", "left", "right", "right", "left"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2a/GR-8icon.png"
  },
  {
    name: "Flamethrower",
    code: ["down", "left", "up", "down", "up"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/2/2b/FLAM-40icon.png"
  },
  {
    name: "Autocannon",
    code: ["down", "left", "down", "up", "up", "right"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d4/AC-8icon.png"
  },
  {
    name: "Railgun",
    code: ["down", "right", "down", "up", "left", "right"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/7/70/RS-422icon.png"
  },
  {
    name: "Spear",
    code: ["down", "down", "up", "down", "down"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/fc/FAF-14icon.png"
  },
  {
    name: "Grenade Launcher",
    code: ["down", "left", "up", "left", "down"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/5d/GL-21icon.png"
  },
  {
    name: "Laser Cannon",
    code: ["down", "left", "down", "up", "left"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/d5/LAS-98icon.png"
  },
  {
    name: "Arc Thrower",
    code: ["down", "right", "down", "up", "left", "left"],
    category_id: 1,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/4a/ARC-3icon.png"
  },
];

export const BACKPACKS: Stratagem[] = [
  {
    name: "Jump Pack",
    code: ["down", "up", "up", "down", "up"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/5/56/LIFT-850icon.png"
  },
  {
    name: "Supply Pack",
    code: ["down", "left", "down", "up", "up", "down"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/0/0f/B-1icon.png"
  },
  {
    name: "“Guard Dog” Rover",
    code: ["down", "up", "left", "up", "right", "right"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/c/c2/AX-LAS-5icon.png",
  },
  {
    name: "Ballistic Shield Backpack",
    code: ["down", "left", "down", "down", "up", "left"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/4/49/SH-20icon.png",
  },
  {
    name: "Shield Generator Pack",
    code: ["down", "up", "left", "right", "left", "right"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/e/ec/SH-32icon.png"
  },
  {
    name: "“Guard Dog”",
    code: ["down", "up", "left", "up", "right", "down"],
    category_id: 2,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/ab/AX-AR-23icon.png"
  },
];

export const ORBITALS: Stratagem[] = [
  {
    name: "Orbital Gatling Barrage",
    code: ["right", "down", "left", "up", "up"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/86/Reinforceicon.png"
  },
  {
    name: "Orbital Airburst Strike",
    code: ["right", "right", "right"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a9/SOSicon.png"
  },
  {
    name: "Orbital 120MM HE Barrage",
    code: ["right", "right", "down", "left", "right", "down"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital 380MM HE Barrage",
    code: ["right", "down", "up", "up", "left", "down", "down"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Walking Barrage",
    code: ["right", "down", "right", "down", "right", "down"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Laser",
    code: ["right", "down", "up", "right", "down"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Railcannon Strike",
    code: ["right", "up", "down", "down", "right"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Precision Strike",
    code: ["right", "right", "up"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Gas Strike",
    code: ["right", "right", "down", "right"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital EMS Strike",
    code: ["right", "right", "left", "down"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Orbital Smoke Strike",
    code: ["right", "right", "down", "up"],
    category_id: 3,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
];

export const EAGLES: Stratagem[] = [
  {
    name: "Eagle Strafing Run",
    code: ["up", "right", "right"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle Airstrike",
    code: ["up", "right", "down", "right"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle Cluster Bomb",
    code: ["up", "right", "down", "down", "right"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle Napalm Airstrike",
    code: ["up", "right", "down", "up"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Jump Pack",
    code: ["down", "up", "up", "down", "up"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle Smoke Strike",
    code: ["up", "right", "up", "down"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle 110MM Rocket Pods",
    code: ["up", "right", "up", "left"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle 500KG Bomb",
    code: ["up", "right", "down", "down", "down"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Eagle Rearm",
    code: ["up", "up", "left", "up", "right"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/d/dc/HD2_Eagle_Rearm_Icon.jpg"
  },
  {
    name: "Machine Gun Sentry",
    code: ["down", "up", "right", "right", "up"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Gatling Sentry",
    code: ["down", "up", "right", "left"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Mortar Sentry",
    code: ["down", "up", "right", "right", "down"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Autocannon Sentry",
    code: ["down", "up", "right", "up", "left", "up"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Rocket Sentry",
    code: ["down", "up", "right", "right", "left"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "EMS Mortar Sentry",
    code: ["down", "up", "right", "down", "right"],
    category_id: 4,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
];

export const DEFENSE: Stratagem[] = [
  {
    name: "HMG Emplacement",
    code: ["down", "up", "left", "right", "right", "left"],
    category_id: 5,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Shield Generator Relay",
    code: ["down", "down", "left", "right", "left", "right"],
    category_id: 5,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Tesla Tower",
    code: ["down", "up", "right", "up", "left", "right"],
    category_id: 5,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Anti-Personnel Minefield",
    code: ["down", "left", "up", "right"],
    category_id: 5,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Incendiary Mines",
    code: ["down", "left", "left", "down"],
    category_id: 5,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
];

export const MISSION: Stratagem[] = [
  {
    name: "Resupply",
    code: ["down", "down", "up", "right"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/3/37/ResupplyIcon.png"
  },
  {
    name: "Reinforce",
    code: ["up", "down", "right", "left", "up"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/86/Reinforceicon.png"
  },
  {
    name: "SOS Beacon",
    code: ["up", "down", "right", "up"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/a/a9/SOSicon.png"
  },
  {
    name: "Hellbomb",
    code: ["down", "up", "left", "down", "up", "right", "down", "up"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/b/b0/Strat_NUX-223_Hellbomb_mk1.png"
  },
  {
    name: "SEAF Artillery",
    code: ["right", "up", "up", "down"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "Seismic Probe",
    code: ["up", "up", "left", "right", "down", "down"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
  {
    name: "SSSD Delivery",
    code: [],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/f/f5/DeliverSSSDicon.png"
  },
  {
    name: "Upload Data",
    code: ["right", "right", "left", "left"],
    category_id: 6,
    icon: "https://static.wikia.nocookie.net/helldivers_gamepedia/images/8/8d/EagleNapalmicon.png"
  },
];

export const ALL_STRATAGEMS: Stratagem[] = [
  ...BACKPACKS,
  ...MISSION,
  ...SUPPORT_WEAPONS,
  ...ORBITALS,
  ...EAGLES,
  ...DEFENSE,
];
