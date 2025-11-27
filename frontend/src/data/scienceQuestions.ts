// Science questions organized by difficulty level
export interface ScienceQuestion {
  id: number;
  question: string;
  emoji: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'animals' | 'space' | 'physics' | 'chemistry' | 'nature';
}

export const SCIENCE_QUESTIONS: ScienceQuestion[] = [
  // EASY - Animals
  { id: 1, question: "Which animal says 'Meow'?", emoji: "🐱", options: ["🐶 Dog", "🐱 Cat", "🐮 Cow", "🐷 Pig"], correct: 1, explanation: "Cats say 'Meow'! They are cute and fluffy.", difficulty: 'easy', category: 'animals' },
  { id: 2, question: "Which animal lives in water?", emoji: "🌊", options: ["🐘 Elephant", "🐠 Fish", "🦁 Lion", "🐻 Bear"], correct: 1, explanation: "Fish live in water! They have gills to breathe underwater.", difficulty: 'easy', category: 'animals' },
  { id: 3, question: "Which animal can fly?", emoji: "✨", options: ["🦅 Eagle", "🐄 Cow", "🐢 Turtle", "🐷 Pig"], correct: 0, explanation: "Eagles can fly high in the sky with their big wings!", difficulty: 'easy', category: 'animals' },
  { id: 4, question: "Which animal has a trunk?", emoji: "🐘", options: ["🐘 Elephant", "🦒 Giraffe", "🐅 Tiger", "🐻 Bear"], correct: 0, explanation: "Elephants have long trunks to grab food and spray water!", difficulty: 'easy', category: 'animals' },
  { id: 5, question: "Which animal hops?", emoji: "🦘", options: ["🐍 Snake", "🦘 Kangaroo", "🐊 Crocodile", "🐢 Turtle"], correct: 1, explanation: "Kangaroos hop on their strong back legs!", difficulty: 'easy', category: 'animals' },

  // MEDIUM - Animals
  { id: 6, question: "Which animal is the biggest?", emoji: "🐋", options: ["🐁 Mouse", "🐋 Whale", "🐶 Dog", "🐱 Cat"], correct: 1, explanation: "Blue whales are the biggest animals on Earth!", difficulty: 'medium', category: 'animals' },
  { id: 7, question: "Which animal changes color?", emoji: "🦎", options: ["🐘 Elephant", "🦁 Lion", "🦎 Chameleon", "🐻 Bear"], correct: 2, explanation: "Chameleons can change their skin color to hide!", difficulty: 'medium', category: 'animals' },
  { id: 8, question: "Which animal has 8 legs?", emoji: "🕷️", options: ["🐜 Ant (6)", "🕷️ Spider (8)", "🐶 Dog (4)", "🐔 Chicken (2)"], correct: 1, explanation: "Spiders have 8 legs! Count them: 1, 2, 3, 4, 5, 6, 7, 8!", difficulty: 'medium', category: 'animals' },
  { id: 9, question: "Which bird cannot fly?", emoji: "🐧", options: ["🦅 Eagle", "🐧 Penguin", "🦜 Parrot", "🦉 Owl"], correct: 1, explanation: "Penguins cannot fly, but they are great swimmers!", difficulty: 'medium', category: 'animals' },
  { id: 10, question: "Which animal sleeps standing up?", emoji: "🐴", options: ["🐱 Cat", "🐶 Dog", "🐴 Horse", "🐻 Bear"], correct: 2, explanation: "Horses can sleep while standing up!", difficulty: 'medium', category: 'animals' },

  // HARD - Animals
  { id: 11, question: "Which animal is a marsupial (carries babies in a pouch)?", emoji: "🦘", options: ["🦘 Kangaroo", "🐘 Elephant", "🦒 Giraffe", "🦁 Lion"], correct: 0, explanation: "Kangaroos are marsupials! Baby kangaroos (joeys) grow in mom's pouch.", difficulty: 'hard', category: 'animals' },
  { id: 12, question: "Which insect makes honey?", emoji: "🐝", options: ["🐜 Ant", "🐝 Bee", "🦋 Butterfly", "🐞 Ladybug"], correct: 1, explanation: "Bees make honey from flower nectar! It's delicious and healthy.", difficulty: 'hard', category: 'animals' },

  // EASY - Space
  { id: 13, question: "Which planet do we live on?", emoji: "🌍", options: ["🪐 Saturn", "🌍 Earth", "🔴 Mars", "☀️ Sun"], correct: 1, explanation: "We live on Earth! It's the perfect planet for life.", difficulty: 'easy', category: 'space' },
  { id: 14, question: "What gives us light during the day?", emoji: "☀️", options: ["🌙 Moon", "⭐ Stars", "☀️ Sun", "🔦 Flashlight"], correct: 2, explanation: "The Sun gives us light and warmth during the day!", difficulty: 'easy', category: 'space' },
  { id: 15, question: "What do we see in the sky at night?", emoji: "🌙", options: ["☀️ Sun", "🌈 Rainbow", "🌙 Moon", "☁️ Clouds"], correct: 2, explanation: "We see the Moon at night! It reflects the Sun's light.", difficulty: 'easy', category: 'space' },

  // MEDIUM - Space
  { id: 16, question: "Which planet has rings?", emoji: "🪐", options: ["🌍 Earth", "🪐 Saturn", "🔴 Mars", "🌕 Moon"], correct: 1, explanation: "Saturn has beautiful rings made of ice and rocks!", difficulty: 'medium', category: 'space' },
  { id: 17, question: "How many planets are in our solar system?", emoji: "🌌", options: ["5 planets", "8 planets", "10 planets", "12 planets"], correct: 1, explanation: "There are 8 planets in our solar system!", difficulty: 'medium', category: 'space' },
  { id: 18, question: "Which planet is closest to the Sun?", emoji: "☀️", options: ["🌍 Earth", "🔴 Mars", "☿️ Mercury", "🪐 Saturn"], correct: 2, explanation: "Mercury is the closest planet to the Sun!", difficulty: 'medium', category: 'space' },

  // HARD - Space
  { id: 19, question: "What is a shooting star really?", emoji: "💫", options: ["A star falling", "A meteor", "A planet", "A UFO"], correct: 1, explanation: "Shooting stars are meteors burning up in Earth's atmosphere!", difficulty: 'hard', category: 'space' },
  { id: 20, question: "Which planet is called the Red Planet?", emoji: "🔴", options: ["🌍 Earth", "🔴 Mars", "🪐 Saturn", "🌕 Venus"], correct: 1, explanation: "Mars is called the Red Planet because of its red soil!", difficulty: 'hard', category: 'space' },

  // EASY - Physics/Chemistry
  { id: 21, question: "What happens when you drop a ball?", emoji: "⚽", options: ["It flies up", "It falls down", "It floats", "It disappears"], correct: 1, explanation: "Gravity pulls the ball down to the ground!", difficulty: 'easy', category: 'physics' },
  { id: 22, question: "What do plants need to grow?", emoji: "🌱", options: ["Water & Sun", "Toys", "TV", "Phones"], correct: 0, explanation: "Plants need water and sunlight to grow big and strong!", difficulty: 'easy', category: 'nature' },
  { id: 23, question: "What color is water?", emoji: "💧", options: ["Red", "Clear/Blue", "Yellow", "Green"], correct: 1, explanation: "Water is clear, but looks blue in large amounts!", difficulty: 'easy', category: 'chemistry' },

  // MEDIUM - Physics/Chemistry
  { id: 24, question: "What makes a rainbow?", emoji: "🌈", options: ["Paint", "Sunlight & Rain", "Clouds", "Wind"], correct: 1, explanation: "Rainbows form when sunlight shines through rain drops!", difficulty: 'medium', category: 'physics' },
  { id: 25, question: "What is ice made of?", emoji: "🧊", options: ["Stone", "Frozen water", "Glass", "Plastic"], correct: 1, explanation: "Ice is frozen water! It melts when it gets warm.", difficulty: 'medium', category: 'chemistry' },
  { id: 26, question: "Why do things fall down and not up?", emoji: "🍎", options: ["Wind", "Gravity", "Magic", "Air"], correct: 1, explanation: "Gravity pulls everything toward the Earth!", difficulty: 'medium', category: 'physics' },

  // HARD - Physics/Chemistry
  { id: 27, question: "What are clouds made of?", emoji: "☁️", options: ["Cotton", "Tiny water drops", "Smoke", "Paper"], correct: 1, explanation: "Clouds are made of tiny water droplets floating in the air!", difficulty: 'hard', category: 'physics' },
  { id: 28, question: "What gas do we breathe in to stay alive?", emoji: "💨", options: ["Oxygen", "Helium", "Carbon", "Nitrogen"], correct: 0, explanation: "We breathe oxygen from the air to stay alive!", difficulty: 'hard', category: 'chemistry' },

  // EASY - Nature
  { id: 29, question: "What season comes after Winter?", emoji: "🌸", options: ["Fall", "Summer", "Spring", "Winter"], correct: 2, explanation: "Spring comes after winter! Flowers bloom in spring.", difficulty: 'easy', category: 'nature' },
  { id: 30, question: "Where do apples grow?", emoji: "🍎", options: ["On trees", "Under ground", "In water", "In caves"], correct: 0, explanation: "Apples grow on trees! They are yummy and healthy.", difficulty: 'easy', category: 'nature' },

  // MEDIUM - Nature
  { id: 31, question: "What do bees collect from flowers?", emoji: "🐝", options: ["Water", "Nectar", "Dirt", "Leaves"], correct: 1, explanation: "Bees collect nectar from flowers to make honey!", difficulty: 'medium', category: 'nature' },
  { id: 32, question: "Which tree stays green all year?", emoji: "🌲", options: ["Oak tree", "Maple tree", "Pine tree", "Apple tree"], correct: 2, explanation: "Pine trees stay green all year! They're called evergreens.", difficulty: 'medium', category: 'nature' },
];

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): ScienceQuestion[] => {
  return SCIENCE_QUESTIONS.filter(q => q.difficulty === difficulty);
};

// Helper to get random questions without repetition
export const getRandomQuestions = (count: number, exclude: number[] = []): ScienceQuestion[] => {
  const available = SCIENCE_QUESTIONS.filter(q => !exclude.includes(q.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
