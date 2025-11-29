// Comprehensive question database for Misshka's Learning App
// All questions across multiple subjects with NO emojis to avoid hints

export type Subject = 'math' | 'science' | 'english' | 'general-knowledge' | 'art' | 'logic';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category =
  | 'animals' | 'space' | 'physics' | 'chemistry' | 'nature' // science
  | 'reading' | 'vocabulary' | 'grammar' // english
  | 'geography' | 'history' | 'culture' // general knowledge
  | 'colors' | 'creativity' | 'music' // art
  | 'patterns' | 'puzzles' | 'reasoning'; // logic

export interface Question {
  id: number;
  subject: Subject;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const ALL_QUESTIONS: Question[] = [
  // ========== SCIENCE - Animals ==========
  { id: 1, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal says 'Meow'?", options: ["Dog", "Cat", "Cow", "Pig"], correct: 1, explanation: "Cats say 'Meow'! They are cute and fluffy." },
  { id: 2, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal lives in water?", options: ["Elephant", "Fish", "Lion", "Bear"], correct: 1, explanation: "Fish live in water! They have gills to breathe underwater." },
  { id: 3, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal can fly?", options: ["Eagle", "Cow", "Turtle", "Pig"], correct: 0, explanation: "Eagles can fly high in the sky with their big wings!" },
  { id: 4, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has a trunk?", options: ["Elephant", "Giraffe", "Tiger", "Bear"], correct: 0, explanation: "Elephants have long trunks to grab food and spray water!" },
  { id: 5, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal hops?", options: ["Snake", "Kangaroo", "Crocodile", "Turtle"], correct: 1, explanation: "Kangaroos hop on their strong back legs!" },
  { id: 6, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal is the biggest in the ocean?", options: ["Shark", "Whale", "Dolphin", "Octopus"], correct: 1, explanation: "Blue whales are the biggest animals on Earth!" },
  { id: 7, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal changes color to hide?", options: ["Elephant", "Lion", "Chameleon", "Bear"], correct: 2, explanation: "Chameleons can change their skin color to blend in!" },
  { id: 8, subject: 'science', category: 'animals', difficulty: 'medium', question: "How many legs does a spider have?", options: ["6 legs", "8 legs", "4 legs", "10 legs"], correct: 1, explanation: "Spiders have 8 legs! Count them: 1, 2, 3, 4, 5, 6, 7, 8!" },
  { id: 9, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which bird cannot fly?", options: ["Eagle", "Penguin", "Parrot", "Owl"], correct: 1, explanation: "Penguins cannot fly, but they are great swimmers!" },
  { id: 10, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal carries its baby in a pouch?", options: ["Kangaroo", "Elephant", "Giraffe", "Lion"], correct: 0, explanation: "Kangaroos are marsupials! Baby kangaroos grow in mom's pouch." },
  { id: 11, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which insect makes honey?", options: ["Ant", "Bee", "Butterfly", "Ladybug"], correct: 1, explanation: "Bees make honey from flower nectar! It's delicious and healthy." },

  // ========== SCIENCE - Space ==========
  { id: 12, subject: 'science', category: 'space', difficulty: 'easy', question: "Which planet do we live on?", options: ["Saturn", "Earth", "Mars", "Jupiter"], correct: 1, explanation: "We live on Earth! It's the perfect planet for life." },
  { id: 13, subject: 'science', category: 'space', difficulty: 'easy', question: "What gives us light during the day?", options: ["Moon", "Stars", "Sun", "Clouds"], correct: 2, explanation: "The Sun gives us light and warmth during the day!" },
  { id: 14, subject: 'science', category: 'space', difficulty: 'easy', question: "What do we see in the sky at night?", options: ["Sun", "Rainbow", "Moon", "Flowers"], correct: 2, explanation: "We see the Moon at night! It reflects the Sun's light." },
  { id: 15, subject: 'science', category: 'space', difficulty: 'medium', question: "Which planet has beautiful rings around it?", options: ["Earth", "Saturn", "Mars", "Venus"], correct: 1, explanation: "Saturn has beautiful rings made of ice and rocks!" },
  { id: 16, subject: 'science', category: 'space', difficulty: 'medium', question: "How many planets are in our solar system?", options: ["5 planets", "8 planets", "10 planets", "12 planets"], correct: 1, explanation: "There are 8 planets in our solar system!" },
  { id: 17, subject: 'science', category: 'space', difficulty: 'hard', question: "Which planet is called the Red Planet?", options: ["Earth", "Mars", "Saturn", "Venus"], correct: 1, explanation: "Mars is called the Red Planet because of its red soil!" },

  // ========== SCIENCE - Nature ==========
  { id: 18, subject: 'science', category: 'nature', difficulty: 'easy', question: "What do plants need to grow?", options: ["Water and Sun", "Toys", "TV", "Ice cream"], correct: 0, explanation: "Plants need water and sunlight to grow big and strong!" },
  { id: 19, subject: 'science', category: 'nature', difficulty: 'easy', question: "What season comes after Winter?", options: ["Fall", "Summer", "Spring", "Autumn"], correct: 2, explanation: "Spring comes after winter! Flowers bloom in spring." },
  { id: 20, subject: 'science', category: 'nature', difficulty: 'easy', question: "Where do apples grow?", options: ["On trees", "Underground", "In water", "In caves"], correct: 0, explanation: "Apples grow on trees! They are yummy and healthy." },
  { id: 21, subject: 'science', category: 'nature', difficulty: 'medium', question: "What do bees collect from flowers?", options: ["Water", "Nectar", "Dirt", "Leaves"], correct: 1, explanation: "Bees collect nectar from flowers to make honey!" },
  { id: 22, subject: 'science', category: 'nature', difficulty: 'medium', question: "Which tree stays green all year?", options: ["Oak tree", "Maple tree", "Pine tree", "Apple tree"], correct: 2, explanation: "Pine trees stay green all year! They're called evergreens." },

  // ========== SCIENCE - Physics/Chemistry ==========
  { id: 23, subject: 'science', category: 'physics', difficulty: 'easy', question: "What happens when you drop a ball?", options: ["It flies up", "It falls down", "It floats", "It disappears"], correct: 1, explanation: "Gravity pulls the ball down to the ground!" },
  { id: 24, subject: 'science', category: 'chemistry', difficulty: 'easy', question: "What color is pure water?", options: ["Red", "Clear", "Yellow", "Green"], correct: 1, explanation: "Water is clear and colorless!" },
  { id: 25, subject: 'science', category: 'physics', difficulty: 'medium', question: "What makes a rainbow appear?", options: ["Paint", "Sunlight and Rain", "Clouds only", "Wind"], correct: 1, explanation: "Rainbows form when sunlight shines through rain drops!" },
  { id: 26, subject: 'science', category: 'chemistry', difficulty: 'medium', question: "What is ice made of?", options: ["Stone", "Frozen water", "Glass", "Plastic"], correct: 1, explanation: "Ice is frozen water! It melts when it gets warm." },
  { id: 27, subject: 'science', category: 'physics', difficulty: 'hard', question: "What are clouds made of?", options: ["Cotton", "Tiny water drops", "Smoke", "Paper"], correct: 1, explanation: "Clouds are made of tiny water droplets floating in the air!" },
  { id: 28, subject: 'science', category: 'chemistry', difficulty: 'hard', question: "What gas do we breathe in to stay alive?", options: ["Oxygen", "Helium", "Carbon", "Nitrogen"], correct: 0, explanation: "We breathe oxygen from the air to stay alive!" },

  // ========== ENGLISH - Reading ==========
  { id: 29, subject: 'english', category: 'reading', difficulty: 'easy', question: "What is the first letter of the alphabet?", options: ["B", "A", "C", "D"], correct: 1, explanation: "A is the first letter! A, B, C, D..." },
  { id: 30, subject: 'english', category: 'reading', difficulty: 'easy', question: "How many letters are in the word 'CAT'?", options: ["2 letters", "3 letters", "4 letters", "5 letters"], correct: 1, explanation: "CAT has 3 letters: C-A-T!" },
  { id: 31, subject: 'english', category: 'reading', difficulty: 'easy', question: "What letter does 'Dog' start with?", options: ["C", "D", "B", "A"], correct: 1, explanation: "Dog starts with the letter D!" },
  { id: 32, subject: 'english', category: 'reading', difficulty: 'medium', question: "Which word rhymes with 'CAT'?", options: ["DOG", "HAT", "PIG", "COW"], correct: 1, explanation: "CAT and HAT rhyme! They both end with 'AT'." },
  { id: 33, subject: 'english', category: 'reading', difficulty: 'medium', question: "What is the opposite of 'BIG'?", options: ["Huge", "Small", "Tall", "Wide"], correct: 1, explanation: "Small is the opposite of big!" },
  { id: 34, subject: 'english', category: 'reading', difficulty: 'hard', question: "How many vowels are there? (A, E, I, O, U)", options: ["3 vowels", "4 vowels", "5 vowels", "6 vowels"], correct: 2, explanation: "There are 5 vowels: A, E, I, O, U!" },

  // ========== ENGLISH - Vocabulary ==========
  { id: 35, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you use to write?", options: ["Spoon", "Pencil", "Shoe", "Hat"], correct: 1, explanation: "We use a pencil or pen to write!" },
  { id: 36, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you wear on your feet?", options: ["Hat", "Gloves", "Shoes", "Shirt"], correct: 2, explanation: "We wear shoes on our feet!" },
  { id: 37, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you sleep in?", options: ["Chair", "Bed", "Table", "Floor"], correct: 1, explanation: "We sleep in a bed at night!" },
  { id: 38, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What is a baby dog called?", options: ["Kitten", "Puppy", "Calf", "Chick"], correct: 1, explanation: "A baby dog is called a puppy!" },
  { id: 39, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What do you use to eat soup?", options: ["Fork", "Knife", "Spoon", "Hands"], correct: 2, explanation: "We use a spoon to eat soup!" },
  { id: 40, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is the opposite of 'HAPPY'?", options: ["Joyful", "Excited", "Sad", "Angry"], correct: 2, explanation: "Sad is the opposite of happy!" },

  // ========== ENGLISH - Grammar ==========
  { id: 41, subject: 'english', category: 'grammar', difficulty: 'easy', question: "Which is correct: 'I ___ happy'?", options: ["am", "is", "are", "be"], correct: 0, explanation: "We say 'I am happy'!" },
  { id: 42, subject: 'english', category: 'grammar', difficulty: 'medium', question: "Which is correct: 'She ___ running'?", options: ["am", "is", "are", "be"], correct: 1, explanation: "We say 'She is running'!" },
  { id: 43, subject: 'english', category: 'grammar', difficulty: 'medium', question: "What comes at the end of a sentence?", options: ["Comma", "Period", "Question mark", "Exclamation"], correct: 1, explanation: "A period (.) goes at the end of a sentence!" },
  { id: 44, subject: 'english', category: 'grammar', difficulty: 'hard', question: "Which is correct: 'They ___ playing'?", options: ["am", "is", "are", "be"], correct: 2, explanation: "We say 'They are playing'!" },

  // ========== GENERAL KNOWLEDGE - Geography ==========
  { id: 45, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is the biggest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1, explanation: "The Pacific Ocean is the biggest ocean in the world!" },
  { id: 46, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is the color of grass?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2, explanation: "Grass is green!" },
  { id: 47, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "Which is the tallest mountain?", options: ["Kilimanjaro", "Everest", "Fuji", "Alps"], correct: 1, explanation: "Mount Everest is the tallest mountain in the world!" },
  { id: 48, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is frozen water called?", options: ["Steam", "Ice", "Rain", "Snow"], correct: 1, explanation: "Frozen water is called ice!" },
  { id: 49, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "How many continents are there?", options: ["5 continents", "6 continents", "7 continents", "8 continents"], correct: 2, explanation: "There are 7 continents on Earth!" },

  // ========== GENERAL KNOWLEDGE - History/Culture ==========
  { id: 50, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do we celebrate on birthdays?", options: ["School", "Another year", "Homework", "Sleeping"], correct: 1, explanation: "We celebrate getting one year older on birthdays!" },
  { id: 51, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do you say when someone helps you?", options: ["Goodbye", "Thank you", "Hello", "Sorry"], correct: 1, explanation: "We say 'Thank you' when someone helps us!" },
  { id: 52, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What holiday has a Christmas tree?", options: ["Halloween", "Christmas", "Easter", "New Year"], correct: 1, explanation: "We decorate Christmas trees for Christmas!" },
  { id: 53, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What do we use money for?", options: ["Eating", "Buying things", "Sleeping", "Walking"], correct: 1, explanation: "We use money to buy things we need!" },
  { id: 54, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "What did people use before cars?", options: ["Airplanes", "Horses", "Bicycles", "Trains"], correct: 1, explanation: "People rode horses before cars were invented!" },

  // ========== ART - Colors ==========
  { id: 55, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is the sky on a sunny day?", options: ["Green", "Blue", "Red", "Yellow"], correct: 1, explanation: "The sky is blue on a sunny day!" },
  { id: 56, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is a banana?", options: ["Red", "Yellow", "Blue", "Green"], correct: 1, explanation: "Bananas are yellow when ripe!" },
  { id: 57, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is the sun?", options: ["Blue", "Yellow", "Green", "Purple"], correct: 1, explanation: "The sun looks yellow to us!" },
  { id: 58, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color do you get when you mix red and yellow?", options: ["Purple", "Orange", "Green", "Brown"], correct: 1, explanation: "Red + Yellow = Orange!" },
  { id: 59, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color do you get when you mix blue and yellow?", options: ["Purple", "Orange", "Green", "Brown"], correct: 2, explanation: "Blue + Yellow = Green!" },
  { id: 60, subject: 'art', category: 'colors', difficulty: 'hard', question: "What are the primary colors?", options: ["Red, Yellow, Blue", "Orange, Green, Purple", "Black, White, Gray", "Pink, Brown, Tan"], correct: 0, explanation: "The primary colors are Red, Yellow, and Blue!" },

  // ========== ART - Creativity ==========
  { id: 61, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What do you use to draw?", options: ["Crayon", "Spoon", "Shoe", "Book"], correct: 0, explanation: "We use crayons or pencils to draw!" },
  { id: 62, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What shape is a ball?", options: ["Square", "Circle", "Triangle", "Star"], correct: 1, explanation: "A ball is round like a circle!" },
  { id: 63, subject: 'art', category: 'creativity', difficulty: 'medium', question: "How many sides does a triangle have?", options: ["2 sides", "3 sides", "4 sides", "5 sides"], correct: 1, explanation: "A triangle has 3 sides!" },
  { id: 64, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What shape is a door?", options: ["Circle", "Triangle", "Rectangle", "Star"], correct: 2, explanation: "Most doors are rectangles!" },
  { id: 65, subject: 'art', category: 'creativity', difficulty: 'hard', question: "How many sides does a hexagon have?", options: ["4 sides", "5 sides", "6 sides", "7 sides"], correct: 2, explanation: "A hexagon has 6 sides!" },

  // ========== ART - Music ==========
  { id: 66, subject: 'art', category: 'music', difficulty: 'easy', question: "What makes music?", options: ["Silence", "Sounds", "Colors", "Shapes"], correct: 1, explanation: "Music is made of sounds!" },
  { id: 67, subject: 'art', category: 'music', difficulty: 'medium', question: "What do you hit to make drum sounds?", options: ["Piano", "Drums", "Guitar", "Flute"], correct: 1, explanation: "You hit drums to make drum sounds!" },
  { id: 68, subject: 'art', category: 'music', difficulty: 'hard', question: "How many black and white keys does a piano have?", options: ["50 keys", "88 keys", "100 keys", "64 keys"], correct: 1, explanation: "A full piano has 88 keys!" },

  // ========== LOGIC - Patterns ==========
  { id: 69, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? 1, 2, 3, ___", options: ["1", "4", "5", "10"], correct: 1, explanation: "The pattern is counting: 1, 2, 3, 4!" },
  { id: 70, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? A, B, C, ___", options: ["A", "D", "Z", "B"], correct: 1, explanation: "The pattern is the alphabet: A, B, C, D!" },
  { id: 71, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? 2, 4, 6, ___", options: ["7", "8", "9", "10"], correct: 1, explanation: "The pattern is even numbers: 2, 4, 6, 8!" },
  { id: 72, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? Red, Blue, Red, Blue, ___", options: ["Green", "Red", "Yellow", "Blue"], correct: 1, explanation: "The pattern repeats: Red, Blue, Red, Blue, Red!" },
  { id: 73, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 1, 2, 4, 8, ___", options: ["10", "12", "16", "20"], correct: 2, explanation: "Each number doubles: 1, 2, 4, 8, 16!" },

  // ========== LOGIC - Puzzles ==========
  { id: 74, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "If you have 2 apples and get 1 more, how many do you have?", options: ["1 apple", "2 apples", "3 apples", "4 apples"], correct: 2, explanation: "2 apples + 1 apple = 3 apples!" },
  { id: 75, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "Which one is different? Cat, Dog, Car, Rabbit", options: ["Cat", "Dog", "Car", "Rabbit"], correct: 2, explanation: "Car is different because it's not an animal!" },
  { id: 76, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "If today is Monday, what is tomorrow?", options: ["Sunday", "Tuesday", "Wednesday", "Friday"], correct: 1, explanation: "Tomorrow after Monday is Tuesday!" },
  { id: 77, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "Which is heavier? A brick or a feather?", options: ["Brick", "Feather", "Same", "Neither"], correct: 0, explanation: "A brick is much heavier than a feather!" },
  { id: 78, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "How many months have 28 days?", options: ["1 month", "12 months", "2 months", "6 months"], correct: 1, explanation: "All 12 months have at least 28 days!" },

  // ========== LOGIC - Reasoning ==========
  { id: 79, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "What do you use an umbrella for?", options: ["To eat", "When it rains", "To sleep", "To read"], correct: 1, explanation: "We use umbrellas when it rains to stay dry!" },
  { id: 80, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "When do you need a coat?", options: ["When hot", "When cold", "When sleeping", "When eating"], correct: 1, explanation: "We wear coats when it's cold outside!" },
  { id: 81, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "Why do we need to brush our teeth?", options: ["To play", "To keep them clean", "To eat more", "To sleep better"], correct: 1, explanation: "We brush teeth to keep them clean and healthy!" },
  { id: 82, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "What happens if you don't water a plant?", options: ["It grows bigger", "It changes color", "It dries out", "It flies"], correct: 2, explanation: "Plants dry out and die without water!" },
  { id: 83, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do birds fly south in winter?", options: ["To find warm weather", "To see friends", "To sleep", "To swim"], correct: 0, explanation: "Birds fly south to find warmer weather and food!" },
];

// Helper functions
export const getQuestionsBySubject = (subject: Subject): Question[] => {
  return ALL_QUESTIONS.filter(q => q.subject === subject);
};

export const getQuestionsByDifficulty = (subject: Subject, difficulty: Difficulty): Question[] => {
  return ALL_QUESTIONS.filter(q => q.subject === subject && q.difficulty === difficulty);
};

export const getQuestionsByCategory = (category: Category): Question[] => {
  return ALL_QUESTIONS.filter(q => q.category === category);
};

export const getRandomQuestion = (subject: Subject, difficulty: Difficulty, excludeIds: number[] = []): Question | null => {
  const available = ALL_QUESTIONS.filter(
    q => q.subject === subject &&
         q.difficulty === difficulty &&
         !excludeIds.includes(q.id)
  );

  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
};

// Get all subjects and their metadata
export const SUBJECT_METADATA = {
  'math': { name: 'Math', icon: '🔢', description: 'Numbers and calculations' },
  'science': { name: 'Science', icon: '🔬', description: 'Explore the world' },
  'english': { name: 'English', icon: '📚', description: 'Reading and words' },
  'general-knowledge': { name: 'General Knowledge', icon: '🌍', description: 'Learn about the world' },
  'art': { name: 'Art', icon: '🎨', description: 'Colors and creativity' },
  'logic': { name: 'Logic', icon: '🧩', description: 'Puzzles and patterns' },
};
