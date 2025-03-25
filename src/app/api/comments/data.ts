// Comment type definition
export type Comment = {
  id: number
  user: {
    name: string
    avatar: string
  }
  text: string
  createdAt: string
}

export const comments: Comment[] = [
  {
    id: 1,
    user: { name: "Monkey D. Luffy", avatar: "LD" },
    text: "I can feel the spirit of adventure in this discussion!",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  },
  {
    id: 2,
    user: { name: "Ichigo Kurosaki", avatar: "IK" },
    text: "This strategy hits as hard as my Bankai!",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  },
  {
    id: 3,
    user: { name: "Naruto Uzumaki", avatar: "NU" },
    text: "Believe it! I’m fired up by these epic tactics!",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  },
  {
    id: 4,
    user: { name: "Yuji Itadori", avatar: "YI" },
    text: "This post is a powerful jujutsu clash of ideas!",
    createdAt: new Date(Date.now() - 1000 * 60 * 40).toISOString()
  },
  {
    id: 5,
    user: { name: "Roronoa Zoro", avatar: "RZ" },
    text: "I sliced through that explanation like one of my three swords.",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString()
  },
  {
    id: 6,
    user: { name: "Renji Abarai", avatar: "RA" },
    text: "Your breakdown is as sharp as my Zanpakutō.",
    createdAt: new Date(Date.now() - 1000 * 60 * 75).toISOString()
  },
  {
    id: 7,
    user: { name: "Sasuke Uchiha", avatar: "SU" },
    text: "Cool insights—quiet but deadly like a Chidori strike.",
    createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString()
  },
  {
    id: 8,
    user: { name: "Megumi Fushiguro", avatar: "MF" },
    text: "This approach is as layered as a well-cast shikigami.",
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString()
  },
  {
    id: 9,
    user: { name: "Boa Hancock", avatar: "BH" },
    text: "I’m impressed—this idea is as striking as my presence.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString()
  },
  {
    id: 10,
    user: { name: "Urahara Kisuke", avatar: "UK" },
    text: "Ingenious as always—a true cross-over of tactics!",
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString()
  },
  {
    id: 11,
    user: { name: "Sabo", avatar: "SA" },
    text: "Your ideas burst with energy, like a hidden flame ready to ignite.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString()
  },
  {
    id: 12,
    user: { name: "Byakuya Kuchiki", avatar: "BK" },
    text: "Elegant and precise—the essence of a true strategist.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString()
  },
  {
    id: 13,
    user: { name: "Shikamaru Nara", avatar: "SN" },
    text: "A rather brilliant plan. It takes a lazy genius to appreciate this.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString()
  },
  {
    id: 14,
    user: { name: "Might Guy", avatar: "MG" },
    text: "Your passion is as explosive as my taijutsu!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString()
  },
  {
    id: 15,
    user: { name: "Satoru Gojo", avatar: "SG" },
    text: "This discussion is limitless—like my Infinity technique.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
  },
  {
    id: 16,
    user: { name: "Toshiro Hitsugaya", avatar: "TH" },
    text: "Cool as ice and just as impactful. Well done!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  },
  {
    id: 17,
    user: { name: "Itachi Uchiha", avatar: "IU" },
    text: "Subtle yet deadly—this perspective is a true Sharingan moment.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString()
  },
  {
    id: 18,
    user: { name: "Mitsuri Kanroji", avatar: "MK" },
    text: "Your words warm my heart like the passion of a true warrior.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString()
  },
  {
    id: 19,
    user: { name: "Levi Ackerman", avatar: "LA" },
    text: "Efficient, direct, and to the point. I approve.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString()
  },
  {
    id: 20,
    user: { name: "Minato Namikaze", avatar: "MN" },
    text: "A quick and brilliant take—a true flash of genius!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString()
  },
  {
    id: 21,
    user: { name: "Rukia Kuchiki", avatar: "RK" },
    text: "This post cuts through confusion like a well-aimed Getsuga Tenshō.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString()
  },
  {
    id: 22,
    user: { name: "Gaara", avatar: "GA" },
    text: "My heart isn’t cold—it's ignited by this passionate debate.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString()
  },
  {
    id: 23,
    user: { name: "Sukuna", avatar: "SU" },
    text: "A devilishly good argument. This is what power looks like.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString()
  },
  {
    id: 24,
    user: { name: "Rin Okumura", avatar: "RO" },
    text: "Fighting spirit and raw energy—just like a true battle of wills!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString()
  },
  {
    id: 25,
    user: { name: "Edward Elric", avatar: "EE" },
    text: "Alchemically speaking, this post is the perfect synthesis of ideas.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString()
  }
]
