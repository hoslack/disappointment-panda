const quotesJson = [
  {
    id: 1,
    quote:
      "Most people are too focused on their own lives to worry much about yours. You are not as important as you think you are.",
  },
  {
    id: 2,
    quote:
      "Consistent effort and choices shape your outcomes. Your failures are your own fault, even though external factors play a role.",
  },
  {
    id: 3,
    quote:
      "Good intentions don't matter if your actions hurt others. People judge you by your actions, not your intentions.",
  },
  {
    id: 4,
    quote:
      "No matter how good you are at your job, there is always someone who can take your place. You are replaceable at work.",
  },
  {
    id: 5,
    quote:
      "Every day spent procrastinating or avoiding growth is a day wasted. Your time is limited.",
  },
  {
    id: 6,
    quote:
      "Many of your beliefs are a result of your upbringing, environment, and social circles rather than independent thought. Most of your beliefs are unoriginal.",
  },
  {
    id: 7,
    quote:
      "Surrounding yourself with negativity or mediocrity likely impacts you. You are the average of the five people you spend the most time with.",
  },
  {
    id: 8,
    quote:
      "Growth only happens when you step out of your comfort zone and face challenges. Your comfort zone is your enemy.",
  },
  {
    id: 9,
    quote:
      "Perceptions are often clouded by cognitive biases that you may not even be aware of. You are more biased than you think.",
  },
  {
    id: 10,
    quote:
      "Overconfidence and poor decision-making can result from overestimating your abilities and knowledge. You often overestimate your abilities and knowledge.",
  },
  {
    id: 11,
    quote:
      "Neglecting diet, exercise, and mental health has long-term consequences. Your health will deteriorate if you don’t actively maintain it.",
  },
  {
    id: 12,
    quote:
      "Emotions often drive decisions more than logic. You are not as rational as you believe.",
  },
  {
    id: 13,
    quote:
      "Success stories often hide the many failures and setbacks that precede them. Significant failures are inevitable.",
  },
  {
    id: 14,
    quote:
      "Caring too much about what others think can limit your choices and stifle your true self. You care too much about what others think.",
  },
  {
    id: 15,
    quote:
      "Friendships, family ties, and romantic partnerships need nurturing or they will deteriorate. Relationships require constant effort.",
  },
  {
    id: 16,
    quote:
      "No matter how much you care about someone, they will only change if they want to. You can’t change people.",
  },
  {
    id: 17,
    quote:
      "Happiness is fleeting and requires continuous effort and gratitude. It's not a permanent state.",
  },
  {
    id: 18,
    quote:
      "Waiting for the perfect moment often means missing opportunities. You'll never be fully ready for important decisions.",
  },
  {
    id: 19,
    quote:
      "Most people are focused on their own lives and problems. They don’t care about your success.",
  },
  {
    id: 20,
    quote:
      "Every moment and decision is precious because life has an expiration date.",
  },
  {
    id: 21,
    quote:
      "No matter what you do, someone will always be unhappy with you. You can never please everyone.",
  },
  {
    id: 22,
    quote:
      "Past mistakes can impact future opportunities and relationships. Your past mistakes will haunt you.",
  },
  {
    id: 23,
    quote:
      "Many others share your experiences, thoughts, and feelings. You are not as unique as you think.",
  },
  {
    id: 24,
    quote:
      "Life requires compromises and sacrifices. You can't have everything you want.",
  },
  {
    id: 25,
    quote:
      "Self-doubt and negative self-talk can hinder your progress more than any external factor. Often, you are your own worst enemy.",
  },
  {
    id: 26,
    quote:
      "As you change, some relationships will no longer fit your life. You will outgrow some friends.",
  },
  {
    id: 27,
    quote:
      "Everyone interprets your actions and words through their own lens. You will never be fully understood by anyone.",
  },
  {
    id: 28,
    quote:
      "Life is unpredictable and often forces you to adapt. Plans will rarely go as expected.",
  },
  {
    id: 29,
    quote:
      "Even in a crowd, isolation is a common feeling. Periods of loneliness are inevitable.",
  },
  {
    id: 30,
    quote:
      "Apologizing and making amends is crucial after hurting others. Mistakes that hurt others are bound to happen.",
  },
  {
    id: 31,
    quote:
      "Death and separation are inevitable parts of life. Loved ones will be lost.",
  },
  {
    id: 32,
    quote:
      "Consistently making the right choices requires hard work. Self-discipline is a struggle.",
  },
  {
    id: 33,
    quote:
      "Memories are often distorted by emotions and biases. Your memories are unreliable.",
  },
  {
    id: 34,
    quote:
      "Being in the right place at the right time often involves luck. Opportunities will be missed.",
  },
  {
    id: 35,
    quote:
      "Trying to control others' opinions is a waste of energy. You can't control how others see you.",
  },
  {
    id: 36,
    quote:
      "Sometimes, circumstances are beyond your control, and your best won't be good enough. Your best efforts will occasionally fall short.",
  },
  {
    id: 37,
    quote:
      "Trust can be broken by those you least expect. Betrayal is a reality.",
  },
  {
    id: 38,
    quote:
      "Hard work does not always lead to acknowledgment. Your efforts will sometimes go unrecognized.",
  },
  {
    id: 39,
    quote:
      "Clear communication is a constant challenge. Misunderstandings are common.",
  },
  {
    id: 40,
    quote:
      "It's impossible to be liked by everyone. Some people will dislike you for no reason.",
  },
  {
    id: 41,
    quote:
      "Detours and setbacks are part of the journey. Life will not follow a straight path.",
  },
  {
    id: 42,
    quote: "Life is not always just or balanced. Unfair situations will arise.",
  },
  {
    id: 43,
    quote:
      "Decisions made in the past can haunt you. Regret is a common experience.",
  },
  {
    id: 44,
    quote:
      "No one else can fulfill you completely. You are responsible for your own happiness.",
  },
  {
    id: 45,
    quote:
      "First impressions are often based on looks. You will be judged by your appearance.",
  },
  {
    id: 46,
    quote:
      "Some aspirations will prove unattainable. Letting go of certain dreams is necessary.",
  },
  {
    id: 47,
    quote:
      "Life is full of tough decisions with no clear right or wrong. Difficult choices must be made.",
  },
  {
    id: 48,
    quote:
      "Periods of confusion and lack of direction are normal. Feeling lost at times is inevitable.",
  },
  {
    id: 49,
    quote:
      "Fully embracing yourself is a lifelong challenge. Self-acceptance is difficult.",
  },
  {
    id: 50,
    quote:
      "Independence is a myth; everyone needs support sometimes. Asking for help is necessary.",
  },
  {
    id: 51,
    quote:
      "Not all feedback will be constructive or deserved. Encountering unfair criticism is likely.",
  },
  {
    id: 52,
    quote:
      "Letting go of grudges is easier said than done. Forgiveness is a struggle.",
  },
  {
    id: 53,
    quote:
      "Your efforts will not always be recognized or valued. Feeling unappreciated is common.",
  },
  {
    id: 54,
    quote:
      "Aging and illness are inevitable parts of life. Health issues are bound to arise.",
  },
  {
    id: 55,
    quote:
      "Money problems are common and stressful. Financial difficulties will occur.",
  },
  {
    id: 56,
    quote:
      "Knowing the right thing to do is not always clear. Ethical dilemmas will be faced.",
  },
  {
    id: 57,
    quote:
      "Career growth is not always linear or predictable. Professional setbacks will happen.",
  },
  {
    id: 58,
    quote:
      "Balancing responsibilities is a constant challenge. Time management is difficult.",
  },
  {
    id: 59,
    quote:
      "Life's demands can sometimes be too much to handle. Feeling overwhelmed is natural.",
  },
  {
    id: 60,
    quote:
      "Expectations from society can be limiting and stressful. Societal pressures are inevitable.",
  },
  {
    id: 61,
    quote:
      "Knowing who you are and what you stand for takes time. Identity struggles are common.",
  },
  {
    id: 62,
    quote:
      "There will always be someone better, faster, or smarter. Competition is a fact of life.",
  },
  {
    id: 63,
    quote:
      "Not all situations have clear right or wrong answers. Moral ambiguity is a reality.",
  },
  {
    id: 64,
    quote:
      "Neither you nor anyone else will ever be perfect. Accepting imperfections is necessary.",
  },
  {
    id: 65,
    quote:
      "Others will doubt your abilities and potential. You will be underestimated.",
  },
  {
    id: 66,
    quote:
      "Comparing yourself to others is natural but often harmful. Envy is a common feeling.",
  },
  {
    id: 67,
    quote:
      "Finding harmony between professional and personal life is challenging. Work-life balance is difficult.",
  },
  {
    id: 68,
    quote:
      "Facing what scares you is essential for growth. Confronting fears is important.",
  },
  {
    id: 69,
    quote: "Not all your efforts will succeed. Failure is part of the process.",
  },
  {
    id: 70,
    quote:
      "Navigating relationships with challenging individuals is unavoidable. Dealing with difficult people is necessary.",
  },
  {
    id: 71,
    quote:
      "Adapting to new circumstances can be hard. Struggling with change is common.",
  },
  {
    id: 72,
    quote:
      "Achieving your goals often requires giving up other things. Sacrifices must be made.",
  },
  {
    id: 73,
    quote:
      "Not every moment of life is exciting or fulfilling. Boredom will be experienced.",
  },
  {
    id: 74,
    quote:
      "Not everyone will accept or want what you offer. Rejection is a reality.",
  },
  {
    id: 75,
    quote:
      "Believing in your own value is a constant effort. Self-worth is often a struggle.",
  },
  {
    id: 76,
    quote:
      "Love and relationships can lead to deep emotional pain. Heartbreak will be felt.",
  },
  {
    id: 77,
    quote: "Fairness is not guaranteed in life. Injustice will be encountered.",
  },
  {
    id: 78,
    quote:
      "Time, money, and energy are finite. Resource limitations are unavoidable.",
  },
  {
    id: 79,
    quote:
      "Choices must be made because you can't do everything. Prioritization is essential.",
  },
  {
    id: 80,
    quote:
      "Not everything you hear or read is true. Dealing with misinformation is necessary.",
  },
  {
    id: 81,
    quote:
      "Expressing yourself clearly is often difficult. Communication struggles are common.",
  },
  {
    id: 82,
    quote:
      "Self-compassion is crucial for moving forward. Forgiving yourself is important.",
  },
  {
    id: 83,
    quote:
      "Life's unpredictability can disrupt plans. Unexpected obstacles will arise.",
  },
  {
    id: 84,
    quote:
      "Staying driven and focused requires effort. Motivation is a constant struggle.",
  },
  {
    id: 85,
    quote:
      "Your values will sometimes clash with reality. Ethical conflicts are inevitable.",
  },
  {
    id: 86,
    quote:
      "Progress is not always constant or visible. Periods of stagnation are normal.",
  },
  {
    id: 87,
    quote:
      "Finding a sense of belonging can be challenging. Feeling disconnected is common.",
  },
  {
    id: 88,
    quote:
      "Appreciating what you have is not always easy. Gratitude can be difficult.",
  },
  {
    id: 89,
    quote:
      "Family, friends, and society will influence your choices. External pressures are inevitable.",
  },
  {
    id: 90,
    quote:
      "Unresolved issues can impact your present and future. Confronting your past is necessary.",
  },
  {
    id: 91,
    quote:
      "Not everything is within your power to change. Loss of control is a part of life.",
  },
  {
    id: 92,
    quote:
      "Finding equilibrium between competing demands is difficult. Balance is a constant challenge.",
  },
  { id: 93, quote: "Recognizing and accepting your boundaries is necessary." },
];

export default quotesJson;
