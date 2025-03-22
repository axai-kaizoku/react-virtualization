export type Post = {
  id: number
  title: string
  body: string
}

export type PostsData = {
  [category: string]: Post[]
}

export const posts: PostsData = {
  "One Piece": [
    {
      id: 1,
      title: "Straw Hat Confrontation",
      body: "Luffy challenges a mysterious pirate allied with a rogue Soul Reaper—an epic clash on the high seas."
    },
    {
      id: 2,
      title: "Pirate Alliance",
      body: "In a surprising twist, the Straw Hats join forces with former enemies to take down a common threat."
    },
    {
      id: 3,
      title: "Treasure of Friendship",
      body: "A heartfelt journey as the crew discovers that the true treasure is the bond they share."
    },
    {
      id: 4,
      title: "Battle on the Grand Line",
      body: "An all-out brawl erupts when a rogue ninja crew attempts to steal a mysterious artifact."
    }
  ],
  Bleach: [
    {
      id: 5,
      title: "Soul Reaper Showdown",
      body: "Ichigo and Renji face off against shadowy foes from an alternate realm where ninja and pirates collide."
    },
    {
      id: 6,
      title: "Crossing Blades",
      body: "A duel sparks between a Bleach warrior and a fierce Jujutsu sorcerer, blending styles from two worlds."
    },
    {
      id: 7,
      title: "Spirit and Shinobi",
      body: "An unlikely alliance forms as a Soul Reaper teams up with a determined ninja to overcome a cursed threat."
    },
    {
      id: 8,
      title: "Legacy of the Zanpakutō",
      body: "Old legends resurface when a long-lost pirate captain awakens a forgotten power within a Bleach fighter."
    }
  ],
  Naruto: [
    {
      id: 9,
      title: "Ninja vs. Cursed Spirits",
      body: "Naruto and Sasuke lead their team into a dark dimension where cursed energy challenges their ninja resolve."
    },
    {
      id: 10,
      title: "Shadow and Light",
      body: "A tense standoff unfolds between a jujutsu sorcerer and a determined shinobi, blurring the lines of destiny."
    },
    {
      id: 11,
      title: "The Will of Fire Ignites",
      body: "In a battle that transcends dimensions, the spirit of Konoha meets the mysterious energy of another world."
    },
    {
      id: 12,
      title: "Fists of Fury",
      body: "An explosive confrontation erupts when rival ninjas and rogue spiritual warriors clash in a no-holds-barred brawl."
    }
  ],
  "Jujutsu Kaisen": [
    {
      id: 13,
      title: "Curse Clash",
      body: "Yuji Itadori leads an assault against a monstrous curse that has joined forces with a vengeful pirate captain."
    },
    {
      id: 14,
      title: "Sorcery and Shinobi",
      body: "A riveting cross-over as sorcery meets ninja tactics when an ancient curse is unleashed in a hidden village."
    },
    {
      id: 15,
      title: "Infinite Combat",
      body: "Satoru Gojo and a legendary Soul Reaper engage in a mind-bending duel that defies the laws of reality."
    }
  ]
}
