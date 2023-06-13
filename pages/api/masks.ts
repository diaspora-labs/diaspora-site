export default function handler(req, res) {
  const ntfs = [
    {
      id: 1,
      image: "/images/masks/mask-3.png",
      url: "/mask3.glb",
      name: "Cote D'Ivoire",
      nftId: "FbAmjby22kYiuMUZc66cGgoc39oEmiRqk52vi3tGQiDj",
      fpsMarketId: "5d6bvUJUEEKzBgLi2AtyQtZNQbP8uKXiMEsMh6uwvYbV",
      title: ["Unlimited number of users."],
      details: ["Discord access", "Augmented Reality filter"],
      description:
        "Great choice for those who are just starting out with the Diaspora Collection and want to dip their toes in the water.",
      modalDescription:
        "Amidst the bustling virtual marketplace, the Cote mask stands as a symbol of unity and support. The unlimited mintability of AR passes invites supporters of all backgrounds and inclinations to join the ranks of the DAO. The Cote tier encompasses the vibrant community that gravitates towards the essence of Diaspora DAO. These dedicated supporters, while unsure of their minting journey, remain close to the action, participating in general channels and embracing the spirit of collaboration. With open hearts and a shared passion for Web 3 and NFT art, the Cote supporters add their unique voice to the collective narrative, fostering an inclusive and dynamic ecosystem.",
      cost: 2,
      address: "7xtd7C6Z7JoEYaaPszSGi8xprkTAqeDBQMJV9aQVpeDg",
      scanner: "https://streamable.com/k780zo",
      filter: "https://streamable.com/57yv0b",
    },
    {
      id: 2,
      image: "/images/masks/mask-1.png",
      url: "/mask1.glb",
      name: "DAN",
      title: ["More Accessible.", "Limited to just 1000 passes."],
      details: ["Discord access", "Augmented Reality filter"],
      description:
        "Great option for those who want to be part of the action but may not be ready to commit to the exclusivity of the Red Mbambi Mask.",
      modalDescription:
        "Unveiling the ancient scrolls of knowledge and wisdom, the DAN mask represents the esteemed DAO Chroniclers. These ardent supporters embark on a journey of perpetual learning, staying attuned to every progression and revelation within the Diaspora DAO project. Limited to just 1000 mintable AR passes, the DAN tier symbolizes the commitment to staying up to date with project advancements. As Chroniclers, they immerse themselves in the lore, documenting and preserving the stories that unfold. Their engagement encompasses support, proposal creation, and active participation, chronicling the growth of Diaspora DAO and leaving their indelible mark on the tapestry of Web 3's transformative potential.",
      cost: 4,
      address: "FiSKfm8pGboM3uYzApG6qW9cGAVTzmePhdK5XEP27NDS",
      scanner: "https://streamable.com/dbv3cd",
      filter: "https://streamable.com/tw5guw",
    },
    {
      id: 3,
      image: "/images/masks/mask-2.png",
      url: "/mask2.glb",
      name: "Red Mbambi",
      title: ["Highly exclusive.", "333 available for minting."],
      details: [
        "Discord access",
        "Augmented Reality filter",
        "Comes with merchandise",
        "Founders AMA",
        "Guaranteed allowlist",
      ],
      description:
        "Excellent choice for those who want to be at the forefront of the Diaspora Collection and have access to some of the best perks.",
      modalDescription:
        "Deep in the heart of the virtual forest, a mystical creature known as the Red Mbambi roams. Its vibrant crimson hue symbolizes the passion and dedication of the DAO Contributors, who play a vital role in shaping the destiny of Diaspora DAO. With only 333 AR passes available, this exclusive tier represents the bridge between technical and non-technical supporters, offering a coveted guarantee to mint an Ancestor from the collection. Beyond the NFT realm, these contributors lend their expertise to product development, community moderation, and more, weaving their skills into the very fabric of the DAO's evolution. The Red Mbambi serves as a rallying emblem, reminding us of the power of collaboration and the transformative impact we can achieve together.",
      cost: 6,
      address: "7VeQFDT29scQKBzzEWc6od9kqxauYMC532nV4CW35181",
      scanner: "https://streamable.com/kxpmwg",
      filter: "https://streamable.com/1xkpuu",
    },
  ]
  res.status(200).json(ntfs)
  // res.status(200).json({ text: 'Hello' });
}
