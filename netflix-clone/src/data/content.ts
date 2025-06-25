export interface Content {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  rating: string;
  duration: string;
  category: string;
  genre: string[];
  isNewRelease?: boolean;
  isTrending?: boolean;
  episodes?: number;
}

export const contentData: Content[] = [
  {
    id: "1",
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    image: "/images/stranger-things.jpeg",
    year: 2016,
    rating: "TV-14",
    duration: "4 Seasons",
    category: "series",
    genre: ["Sci-Fi", "Horror", "Drama"],
    isTrending: true,
    episodes: 42
  },
  {
    id: "2",
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    image: "/images/the-crown.jpg",
    year: 2016,
    rating: "TV-MA",
    duration: "6 Seasons",
    category: "series",
    genre: ["Drama", "Biography", "History"],
    episodes: 60
  },
  {
    id: "3",
    title: "Ozark",
    description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    image: "/images/ozark.jpg",
    year: 2017,
    rating: "TV-MA",
    duration: "4 Seasons",
    category: "series",
    genre: ["Crime", "Drama", "Thriller"],
    episodes: 44
  },
  {
    id: "4",
    title: "Money Heist",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    image: "/images/money-heist.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
    year: 2017,
    rating: "TV-MA",
    duration: "5 Seasons",
    category: "series",
    genre: ["Crime", "Drama", "Thriller"],
    isTrending: true,
    episodes: 41
  },
  {
    id: "5",
    title: "Bridgerton",
    description: "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
    image: "/images/bridgerton.jpg",
    year: 2020,
    rating: "TV-MA",
    duration: "3 Seasons",
    category: "series",
    genre: ["Romance", "Drama", "Period"],
    isNewRelease: true,
    episodes: 24
  },
  {
    id: "6",
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    image: "/images/the-witcher.jpg",
    year: 2019,
    rating: "TV-MA",
    duration: "3 Seasons",
    category: "series",
    genre: ["Fantasy", "Adventure", "Drama"],
    episodes: 24
  },
  {
    id: "7",
    title: "Orange Is the New Black",
    description: "A privileged New Yorker ends up in a women's prison when a past crime catches up with her in this Emmy-winning series.",
    image: "/images/orange-is-the-new-black.jpg",
    year: 2013,
    rating: "TV-MA",
    duration: "7 Seasons",
    category: "series",
    genre: ["Comedy", "Drama", "Crime"],
    episodes: 91
  },
  {
    id: "8",
    title: "House of Cards",
    description: "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama.",
    image: "/images/house-of-cards.jpeg",
    year: 2013,
    rating: "TV-MA",
    duration: "6 Seasons",
    category: "series",
    genre: ["Political", "Drama", "Thriller"],
    episodes: 73
  },
  {
    id: "9",
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.",
    image: "/images/black-mirror.jpg",
    year: 2011,
    rating: "TV-MA",
    duration: "6 Seasons",
    category: "series",
    genre: ["Sci-Fi", "Thriller", "Anthology"],
    episodes: 27
  },
  {
    id: "10",
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
    image: "/images/squid-game.jpg",
    year: 2021,
    rating: "TV-MA",
    duration: "2 Seasons",
    category: "series",
    genre: ["Thriller", "Drama", "Action"],
    isTrending: true,
    isNewRelease: true,
    episodes: 17
  },
  {
    id: "11",
    title: "Wednesday",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while navigating her years at Nevermore Academy.",
    image: "/images/wednesday.jpg",
    year: 2022,
    rating: "TV-14",
    duration: "1 Season",
    category: "series",
    genre: ["Comedy", "Horror", "Mystery"],
    isNewRelease: true,
    episodes: 8
  },
  {
    id: "12",
    title: "Lupin",
    description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    image: "/images/lupin.jpg",
    year: 2021,
    rating: "TV-MA",
    duration: "3 Parts",
    category: "series",
    genre: ["Crime", "Drama", "Mystery"],
    episodes: 17
  },
  {
    id: "13",
    title: "Elite",
    description: "When three working-class teens enroll in an exclusive private school, the clash between them and the wealthy students leads to murder.",
    image: "/images/elite.jpg",
    year: 2018,
    rating: "TV-MA",
    duration: "7 Seasons",
    category: "series",
    genre: ["Drama", "Crime", "Romance"],
    episodes: 64
  },
  {
    id: "14",
    title: "Dark",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    image: "/images/dark.jpg",
    year: 2017,
    rating: "TV-MA",
    duration: "3 Seasons",
    category: "series",
    genre: ["Sci-Fi", "Mystery", "Thriller"],
    episodes: 26
  },
  {
    id: "15",
    title: "Narcos",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    image: "/images/narcos.jpg",
    year: 2015,
    rating: "TV-MA",
    duration: "3 Seasons",
    category: "series",
    genre: ["Crime", "Biography", "Drama"],
    episodes: 30
  },
  {
    id: "16",
    title: "Mindhunter",
    description: "In the late 1970s, two FBI agents broaden the realm of criminal science by investigating the psychology behind murder.",
    image: "/images/mindhunter.jpg",
    year: 2017,
    rating: "TV-MA",
    duration: "2 Seasons",
    category: "series",
    genre: ["Crime", "Drama", "Thriller"],
    episodes: 19
  },
  {
    id: "17",
    title: "13 Reasons Why",
    description: "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
    image: "/images/13-reasons-why.jpg",
    year: 2017,
    rating: "TV-MA",
    duration: "4 Seasons",
    category: "series",
    genre: ["Drama", "Mystery"],
    episodes: 49
  },
  {
    id: "18",
    title: "You",
    description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
    image: "/images/you.jpg",
    year: 2018,
    rating: "TV-MA",
    duration: "4 Seasons",
    category: "series",
    genre: ["Thriller", "Drama", "Crime"],
    episodes: 40
  },
  {
    id: "19",
    title: "The Queen's Gambit",
    description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    image: "/images/queens-gambit.jpg",
    year: 2020,
    rating: "TV-MA",
    duration: "Limited Series",
    category: "series",
    genre: ["Drama", "Biography"],
    episodes: 7
  }
];

export const getContentByCategory = (category: string) => {
  return contentData.filter(content => 
    content.genre.some(g => g.toLowerCase().includes(category.toLowerCase()))
  );
};

export const getTrendingContent = () => {
  return contentData.filter(content => content.isTrending);
};

export const getNewReleases = () => {
  return contentData.filter(content => content.isNewRelease);
};

export const getFeaturedContent = () => {
  return contentData[0]; // Stranger Things as featured content
};
