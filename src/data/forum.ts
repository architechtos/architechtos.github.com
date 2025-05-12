
export interface ForumPost {
  id: string;
  title: {
    en: string;
    de: string;
  };
  content: {
    en: string;
    de: string;
  };
  authorName: string;
  authorId: string;
  date: string;
  imageSrc?: string;
  comments: ForumComment[];
}

export interface ForumComment {
  id: string;
  content: {
    en: string;
    de: string;
  };
  authorName: string;
  authorId: string;
  date: string;
  imageSrc?: string;
}

export const forumPosts: ForumPost[] = [
  {
    id: "post-1",
    title: {
      en: "What's your favorite tea brewing method?",
      de: "Was ist Ihre Lieblingsmethode zum Teekochen?"
    },
    content: {
      en: "I've been experimenting with different brewing methods for my green tea. I usually use a temperature-controlled kettle at 80°C and steep for 2 minutes. What methods do you prefer?",
      de: "Ich habe mit verschiedenen Brühmethoden für meinen grünen Tee experimentiert. Normalerweise verwende ich einen temperaturgesteuerten Wasserkocher bei 80°C und lasse den Tee 2 Minuten ziehen. Welche Methoden bevorzugen Sie?"
    },
    authorName: "Tea Explorer",
    authorId: "user-123",
    date: "2025-05-08T14:30:00Z",
    comments: [
      {
        id: "comment-1",
        content: {
          en: "I use a traditional Japanese kyusu pot for green teas. It makes a huge difference in taste!",
          de: "Ich verwende eine traditionelle japanische Kyusu-Kanne für grüne Tees. Es macht einen großen Unterschied im Geschmack!"
        },
        authorName: "Matcha Fan",
        authorId: "user-124",
        date: "2025-05-08T15:15:00Z"
      },
      {
        id: "comment-2",
        content: {
          en: "Try cold brewing your green tea overnight in the refrigerator. It's less bitter and brings out different flavors.",
          de: "Versuchen Sie, Ihren grünen Tee über Nacht im Kühlschrank kalt zu brühen. Er ist weniger bitter und bringt andere Aromen hervor."
        },
        authorName: "Cold Brew Master",
        authorId: "user-125",
        date: "2025-05-08T16:45:00Z"
      }
    ]
  },
  {
    id: "post-2",
    title: {
      en: "Best tea for relaxation?",
      de: "Bester Tee zur Entspannung?"
    },
    content: {
      en: "I've been having trouble sleeping lately and would love recommendations for calming teas to drink in the evening. What works for you?",
      de: "Ich hatte in letzter Zeit Schlafprobleme und würde mich über Empfehlungen für beruhigende Tees am Abend freuen. Was funktioniert bei Ihnen?"
    },
    authorName: "Sleepless Sipper",
    authorId: "user-126",
    date: "2025-05-10T19:20:00Z",
    comments: [
      {
        id: "comment-3",
        content: {
          en: "Valerian root tea works wonders for me! It's not the tastiest, but it really helps me fall asleep.",
          de: "Baldriantee wirkt bei mir Wunder! Er schmeckt nicht am besten, aber er hilft mir wirklich beim Einschlafen."
        },
        authorName: "Deep Sleeper",
        authorId: "user-127",
        date: "2025-05-10T20:05:00Z"
      },
      {
        id: "comment-4",
        content: {
          en: "I blend chamomile, lavender, and a touch of lemon balm. Works like a charm and tastes great too!",
          de: "Ich mische Kamille, Lavendel und einen Hauch von Zitronenmelisse. Wirkt wie ein Zauber und schmeckt auch gut!"
        },
        authorName: "Herbal Mixer",
        authorId: "user-128",
        date: "2025-05-10T21:30:00Z"
      }
    ]
  }
];

export function getForumPostById(id: string): ForumPost | undefined {
  return forumPosts.find(post => post.id === id);
}
