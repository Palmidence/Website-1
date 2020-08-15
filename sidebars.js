module.exports = {
  Modules: {
    General: ["modules/general/main"],
    Information: [
      "modules/information/broadcasts",
      "modules/information/rules",
    ],
    Environment: [
      "modules/environment/world",
      "modules/environment/time",
      "modules/environment/border",
      "modules/environment/mobs",
    ],
    Format: ["modules/format/players", "modules/format/teams"],
    Objectives: [
      "modules/objectives/ctw",
      "modules/objectives/ctf",
      "modules/objectives/control-points",
      "modules/objectives/dtm",
      "modules/objectives/dtc",
      "modules/objectives/monument-modes",
      "modules/objectives/blitz",
      "modules/objectives/scoring",
      "modules/objectives/other",
    ],
    Mechanics: [
      "modules/mechanics/filters",
      "modules/mechanics/regions",
      "modules/mechanics/spawns",
      "modules/mechanics/portals",
      "modules/mechanics/proximity-alarms",
      "modules/mechanics/lanes",
      "modules/mechanics/damage",
      "modules/mechanics/gamerules",
      "modules/mechanics/spawners",
    ],
    Gear: [
      "modules/gear/items",
      "modules/gear/potions",
      "modules/gear/kits",
      "modules/gear/classes",
      "modules/gear/pickups",
      "modules/gear/item-mods",
      "modules/gear/crafting",
      "modules/gear/repair-remove-keep",
      "modules/gear/projectiles",
      "modules/gear/tnt",
      "modules/gear/kill-rewards",
    ],
    Blocks: [
      "modules/blocks/blockdrops",
      "modules/blocks/falling-blocks",
      "modules/blocks/renewables",
    ],
  },
  Reference: {
    Items: [
      "reference/items/inventory",
      "reference/items/enchantments",
      "reference/items/attributes",
    ],
    Entities: [
      "reference/entities/entity-types",
      "reference/entities/spawn-reasons",
    ],
    Misc: [
      "reference/misc/formatting",
      "reference/misc/colors",
      "reference/misc/time-periods",
    ],
  },
  Guides: {
    "XML Pointers": [
      "guides/xml-pointers/regions",
      "guides/xml-pointers/filter-apply-order",
      "guides/xml-pointers/conventions",
    ],
    "Packaging Maps": [
      "guides/packaging/cleaning-files",
      "guides/packaging/pruning-chunks",
      "guides/packaging/compiling-and-releasing",
    ],
  },
  Events: [
    "events/main",
    {
      Format: ["events/xml", "events/examples"],
    },
    "events/teams",
  ],
  Examples: ["examples/airship-battle"],
};
