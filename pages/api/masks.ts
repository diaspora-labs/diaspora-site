export default function handler(req, res) {
    const ntfs = [
        {
          id: 1,
          image: "/images/masks/mask-3.png",
          url: "/mask3.glb",
          name: "Cote D'Ivoire",
          title: ["Unlimited number of users."],
          details: ["Discord access", "Augmented Reality filter"],
          description: "Great choice for those who are just starting out with the Diaspora Collection and want to dip their toes in the water.",
          cost: 2,
          address: "7xtd7C6Z7JoEYaaPszSGi8xprkTAqeDBQMJV9aQVpeDg",
          scanner: 'https://streamable.com/k780zo',
          filter: 'https://streamable.com/57yv0b'
        },
        {
          id: 2,
          image: "/images/masks/mask-1.png",
          url: "/mask1.glb",
          name: "DAN",
          title: ["More Accessible.", "Limited to just 1000 passes."],
          details: ["Discord access", "Augmented Reality filter"],
          description: "Great option for those who want to be part of the action but may not be ready to commit to the exclusivity of the Red Mbambi Mask.",
          cost: 4,
          address: "FiSKfm8pGboM3uYzApG6qW9cGAVTzmePhdK5XEP27NDS",
          scanner: 'https://streamable.com/dbv3cd',
          filter: 'https://streamable.com/tw5guw'
        },
        {
          id: 3,
          image: "/images/masks/mask-2.png",
          url: "/mask2.glb",
          name: "Red Mbambi",
          title: ["Highly exclusive.", "333 available for minting."],
          details: ["Discord access", "Augmented Reality filter", "Comes with merchandise", "Founders AMA", "Guaranteed allowlist"],
          description: "Excellent choice for those who want to be at the forefront of the Diaspora Collection and have access to some of the best perks.",
          cost: 6,
          address: "7VeQFDT29scQKBzzEWc6od9kqxauYMC532nV4CW35181",
          scanner: "https://streamable.com/kxpmwg",
          filter: 'https://streamable.com/1xkpuu'
        },
    ]
    res.status(200).json(ntfs);
    // res.status(200).json({ text: 'Hello' });
}