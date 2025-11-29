// Comprehensive question database for Misshka's Learning App - 300+ Questions
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
  // ========== SCIENCE - Animals (60 questions) ==========
  { id: 1, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal says 'Meow'?", options: ["Dog", "Cat", "Cow", "Pig"], correct: 1, explanation: "Cats say 'Meow'! They are cute and fluffy." },
  { id: 2, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal lives in water?", options: ["Elephant", "Fish", "Lion", "Bear"], correct: 1, explanation: "Fish live in water! They have gills to breathe underwater." },
  { id: 3, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal can fly?", options: ["Eagle", "Cow", "Turtle", "Pig"], correct: 0, explanation: "Eagles can fly high in the sky with their big wings!" },
  { id: 4, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has a trunk?", options: ["Elephant", "Giraffe", "Tiger", "Bear"], correct: 0, explanation: "Elephants have long trunks to grab food and spray water!" },
  { id: 5, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal hops?", options: ["Snake", "Kangaroo", "Crocodile", "Turtle"], correct: 1, explanation: "Kangaroos hop on their strong back legs!" },
  { id: 6, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal gives us milk?", options: ["Chicken", "Cow", "Horse", "Goat"], correct: 1, explanation: "Cows give us milk that we drink every day!" },
  { id: 7, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal says 'Woof'?", options: ["Cat", "Dog", "Bird", "Mouse"], correct: 1, explanation: "Dogs say 'Woof'! They are loyal friends." },
  { id: 8, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has stripes?", options: ["Lion", "Tiger", "Bear", "Wolf"], correct: 1, explanation: "Tigers have beautiful orange and black stripes!" },
  { id: 9, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has a long neck?", options: ["Giraffe", "Elephant", "Horse", "Zebra"], correct: 0, explanation: "Giraffes have very long necks to reach tall trees!" },
  { id: 10, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal lays eggs?", options: ["Dog", "Cat", "Chicken", "Cow"], correct: 2, explanation: "Chickens lay eggs that we can eat!" },
  { id: 11, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has a shell?", options: ["Rabbit", "Turtle", "Fox", "Deer"], correct: 1, explanation: "Turtles have shells to protect themselves!" },
  { id: 12, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal loves carrots?", options: ["Lion", "Tiger", "Rabbit", "Bear"], correct: 2, explanation: "Rabbits love to eat carrots!" },
  { id: 13, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal says 'Moo'?", options: ["Sheep", "Cow", "Pig", "Horse"], correct: 1, explanation: "Cows say 'Moo'!" },
  { id: 14, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal builds dams?", options: ["Beaver", "Rabbit", "Squirrel", "Mouse"], correct: 0, explanation: "Beavers build dams in rivers!" },
  { id: 15, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has a mane?", options: ["Tiger", "Lion", "Bear", "Wolf"], correct: 1, explanation: "Male lions have beautiful manes around their head!" },
  { id: 16, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal swings from trees?", options: ["Elephant", "Monkey", "Bear", "Tiger"], correct: 1, explanation: "Monkeys swing from tree to tree!" },
  { id: 17, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has spots?", options: ["Zebra", "Tiger", "Leopard", "Lion"], correct: 2, explanation: "Leopards have beautiful spots on their fur!" },
  { id: 18, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal has black and white stripes?", options: ["Tiger", "Zebra", "Horse", "Giraffe"], correct: 1, explanation: "Zebras have black and white stripes!" },
  { id: 19, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal loves honey?", options: ["Bear", "Lion", "Tiger", "Wolf"], correct: 0, explanation: "Bears love to eat honey!" },
  { id: 20, subject: 'science', category: 'animals', difficulty: 'easy', question: "Which animal says 'Baa'?", options: ["Cow", "Pig", "Sheep", "Horse"], correct: 2, explanation: "Sheep say 'Baa'!" },

  { id: 21, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal is the biggest in the ocean?", options: ["Shark", "Whale", "Dolphin", "Octopus"], correct: 1, explanation: "Blue whales are the biggest animals on Earth!" },
  { id: 22, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal changes color to hide?", options: ["Elephant", "Lion", "Chameleon", "Bear"], correct: 2, explanation: "Chameleons can change their skin color to blend in!" },
  { id: 23, subject: 'science', category: 'animals', difficulty: 'medium', question: "How many legs does a spider have?", options: ["6 legs", "8 legs", "4 legs", "10 legs"], correct: 1, explanation: "Spiders have 8 legs!" },
  { id: 24, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which bird cannot fly?", options: ["Eagle", "Penguin", "Parrot", "Owl"], correct: 1, explanation: "Penguins cannot fly, but they are great swimmers!" },
  { id: 25, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal sleeps standing up?", options: ["Cat", "Dog", "Horse", "Bear"], correct: 2, explanation: "Horses can sleep while standing up!" },
  { id: 26, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has the longest tongue?", options: ["Giraffe", "Lion", "Bear", "Wolf"], correct: 0, explanation: "Giraffes have very long tongues to reach leaves!" },
  { id: 27, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal can run the fastest?", options: ["Lion", "Cheetah", "Horse", "Zebra"], correct: 1, explanation: "Cheetahs are the fastest land animals!" },
  { id: 28, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal never forgets?", options: ["Monkey", "Elephant", "Lion", "Bear"], correct: 1, explanation: "Elephants have amazing memory!" },
  { id: 29, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has a hump?", options: ["Horse", "Camel", "Cow", "Zebra"], correct: 1, explanation: "Camels have humps to store fat!" },
  { id: 30, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal uses echolocation?", options: ["Cat", "Bat", "Bird", "Mouse"], correct: 1, explanation: "Bats use echolocation to find their way in the dark!" },
  { id: 31, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has the longest neck relative to body?", options: ["Horse", "Giraffe", "Ostrich", "Swan"], correct: 1, explanation: "Giraffes have the longest necks!" },
  { id: 32, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal can hold its breath underwater longest?", options: ["Dolphin", "Whale", "Seal", "Otter"], correct: 1, explanation: "Whales can hold their breath for over an hour!" },
  { id: 33, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has the strongest bite?", options: ["Lion", "Crocodile", "Shark", "Bear"], correct: 1, explanation: "Crocodiles have incredibly strong bites!" },
  { id: 34, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal can regenerate its tail?", options: ["Cat", "Lizard", "Dog", "Rabbit"], correct: 1, explanation: "Some lizards can grow back their tails!" },
  { id: 35, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has fingerprints like humans?", options: ["Monkey", "Koala", "Bear", "Raccoon"], correct: 1, explanation: "Koalas have fingerprints very similar to humans!" },
  { id: 36, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which bird can fly backwards?", options: ["Eagle", "Hummingbird", "Parrot", "Owl"], correct: 1, explanation: "Hummingbirds can fly backwards!" },
  { id: 37, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has three hearts?", options: ["Whale", "Octopus", "Shark", "Dolphin"], correct: 1, explanation: "Octopuses have three hearts!" },
  { id: 38, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal can see in complete darkness?", options: ["Cat", "Owl", "Dog", "Rabbit"], correct: 1, explanation: "Owls have special eyes to see in the dark!" },
  { id: 39, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal has blue blood?", options: ["Whale", "Shark", "Lobster", "Fish"], correct: 2, explanation: "Lobsters and some crustaceans have blue blood!" },
  { id: 40, subject: 'science', category: 'animals', difficulty: 'medium', question: "Which animal can jump the highest?", options: ["Kangaroo", "Flea", "Grasshopper", "Rabbit"], correct: 1, explanation: "Fleas can jump incredibly high for their size!" },

  { id: 41, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal carries its baby in a pouch?", options: ["Kangaroo", "Elephant", "Giraffe", "Lion"], correct: 0, explanation: "Kangaroos are marsupials! Baby kangaroos grow in mom's pouch." },
  { id: 42, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which insect makes honey?", options: ["Ant", "Bee", "Butterfly", "Ladybug"], correct: 1, explanation: "Bees make honey from flower nectar!" },
  { id: 43, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal has the largest brain?", options: ["Elephant", "Sperm Whale", "Human", "Dolphin"], correct: 1, explanation: "Sperm whales have the largest brains of any animal!" },
  { id: 44, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal can survive without water the longest?", options: ["Camel", "Kangaroo Rat", "Snake", "Turtle"], correct: 1, explanation: "Kangaroo rats can survive without drinking water!" },
  { id: 45, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal has the strongest sense of smell?", options: ["Dog", "Bear", "Elephant", "Shark"], correct: 1, explanation: "Bears have an incredibly strong sense of smell!" },
  { id: 46, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal can lift 50 times its body weight?", options: ["Elephant", "Gorilla", "Ant", "Bear"], correct: 2, explanation: "Ants can lift up to 50 times their own body weight!" },
  { id: 47, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal has the longest lifespan?", options: ["Elephant", "Whale", "Tortoise", "Parrot"], correct: 2, explanation: "Some tortoises can live over 150 years!" },
  { id: 48, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal can communicate using electricity?", options: ["Dolphin", "Electric Eel", "Shark", "Whale"], correct: 1, explanation: "Electric eels use electricity to communicate and hunt!" },
  { id: 49, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal has the best memory?", options: ["Dolphin", "Elephant", "Chimpanzee", "Crow"], correct: 1, explanation: "Elephants have exceptional long-term memory!" },
  { id: 50, subject: 'science', category: 'animals', difficulty: 'hard', question: "Which animal can survive in space?", options: ["Cockroach", "Tardigrade", "Ant", "Spider"], correct: 1, explanation: "Tardigrades can survive extreme conditions including space!" },

  // ========== SCIENCE - Space (20 questions) ==========
  { id: 51, subject: 'science', category: 'space', difficulty: 'easy', question: "Which planet do we live on?", options: ["Saturn", "Earth", "Mars", "Jupiter"], correct: 1, explanation: "We live on Earth! It's the perfect planet for life." },
  { id: 52, subject: 'science', category: 'space', difficulty: 'easy', question: "What gives us light during the day?", options: ["Moon", "Stars", "Sun", "Clouds"], correct: 2, explanation: "The Sun gives us light and warmth during the day!" },
  { id: 53, subject: 'science', category: 'space', difficulty: 'easy', question: "What do we see in the sky at night?", options: ["Sun", "Rainbow", "Moon", "Flowers"], correct: 2, explanation: "We see the Moon at night! It reflects the Sun's light." },
  { id: 54, subject: 'science', category: 'space', difficulty: 'easy', question: "What are the bright dots in the night sky?", options: ["Airplanes", "Stars", "Clouds", "Birds"], correct: 1, explanation: "Stars are bright dots in the night sky!" },
  { id: 55, subject: 'science', category: 'space', difficulty: 'easy', question: "What color is the sky during the day?", options: ["Green", "Blue", "Red", "Yellow"], correct: 1, explanation: "The sky is blue during the day!" },
  { id: 56, subject: 'science', category: 'space', difficulty: 'easy', question: "What shape is the Moon?", options: ["Square", "Round", "Triangle", "Star"], correct: 1, explanation: "The Moon is round like a ball!" },
  { id: 57, subject: 'science', category: 'space', difficulty: 'easy', question: "When can we see stars best?", options: ["Morning", "Afternoon", "Night", "Noon"], correct: 2, explanation: "We can see stars best at night when it's dark!" },

  { id: 58, subject: 'science', category: 'space', difficulty: 'medium', question: "Which planet has beautiful rings around it?", options: ["Earth", "Saturn", "Mars", "Venus"], correct: 1, explanation: "Saturn has beautiful rings made of ice and rocks!" },
  { id: 59, subject: 'science', category: 'space', difficulty: 'medium', question: "How many planets are in our solar system?", options: ["5 planets", "8 planets", "10 planets", "12 planets"], correct: 1, explanation: "There are 8 planets in our solar system!" },
  { id: 60, subject: 'science', category: 'space', difficulty: 'medium', question: "Which planet is closest to the Sun?", options: ["Earth", "Mars", "Mercury", "Venus"], correct: 2, explanation: "Mercury is the closest planet to the Sun!" },
  { id: 61, subject: 'science', category: 'space', difficulty: 'medium', question: "Which planet is called the Red Planet?", options: ["Earth", "Mars", "Saturn", "Venus"], correct: 1, explanation: "Mars is called the Red Planet because of its red soil!" },
  { id: 62, subject: 'science', category: 'space', difficulty: 'medium', question: "Which is the biggest planet?", options: ["Earth", "Saturn", "Jupiter", "Mars"], correct: 2, explanation: "Jupiter is the biggest planet in our solar system!" },
  { id: 63, subject: 'science', category: 'space', difficulty: 'medium', question: "What is a group of stars called?", options: ["Cluster", "Constellation", "Galaxy", "Universe"], correct: 1, explanation: "A constellation is a group of stars that form a pattern!" },

  { id: 64, subject: 'science', category: 'space', difficulty: 'hard', question: "What is a shooting star really?", options: ["A star falling", "A meteor", "A planet", "A UFO"], correct: 1, explanation: "Shooting stars are meteors burning up in Earth's atmosphere!" },
  { id: 65, subject: 'science', category: 'space', difficulty: 'hard', question: "How long does it take Earth to orbit the Sun?", options: ["1 day", "1 month", "1 year", "1 week"], correct: 2, explanation: "Earth takes one year (365 days) to orbit the Sun!" },
  { id: 66, subject: 'science', category: 'space', difficulty: 'hard', question: "What keeps planets orbiting the Sun?", options: ["Wind", "Gravity", "Magnets", "Air"], correct: 1, explanation: "Gravity keeps planets orbiting around the Sun!" },
  { id: 67, subject: 'science', category: 'space', difficulty: 'hard', question: "Which planet is known for the Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], correct: 1, explanation: "Jupiter has a giant storm called the Great Red Spot!" },
  { id: 68, subject: 'science', category: 'space', difficulty: 'hard', question: "What is the closest star to Earth?", options: ["North Star", "The Sun", "Sirius", "Venus"], correct: 1, explanation: "The Sun is the closest star to Earth!" },
  { id: 69, subject: 'science', category: 'space', difficulty: 'hard', question: "What galaxy do we live in?", options: ["Andromeda", "Milky Way", "Whirlpool", "Triangulum"], correct: 1, explanation: "We live in the Milky Way galaxy!" },
  { id: 70, subject: 'science', category: 'space', difficulty: 'hard', question: "Which planet spins on its side?", options: ["Earth", "Mars", "Uranus", "Neptune"], correct: 2, explanation: "Uranus spins on its side, unlike other planets!" },

  // ========== SCIENCE - Nature (20 questions) ==========
  { id: 71, subject: 'science', category: 'nature', difficulty: 'easy', question: "What do plants need to grow?", options: ["Water and Sun", "Toys", "TV", "Ice cream"], correct: 0, explanation: "Plants need water and sunlight to grow!" },
  { id: 72, subject: 'science', category: 'nature', difficulty: 'easy', question: "What season comes after Winter?", options: ["Fall", "Summer", "Spring", "Autumn"], correct: 2, explanation: "Spring comes after winter! Flowers bloom in spring." },
  { id: 73, subject: 'science', category: 'nature', difficulty: 'easy', question: "Where do apples grow?", options: ["On trees", "Underground", "In water", "In caves"], correct: 0, explanation: "Apples grow on trees!" },
  { id: 74, subject: 'science', category: 'nature', difficulty: 'easy', question: "What color are most leaves?", options: ["Blue", "Green", "Red", "Yellow"], correct: 1, explanation: "Most leaves are green!" },
  { id: 75, subject: 'science', category: 'nature', difficulty: 'easy', question: "What falls from the sky when it rains?", options: ["Snow", "Water", "Leaves", "Candy"], correct: 1, explanation: "Water falls from the sky when it rains!" },
  { id: 76, subject: 'science', category: 'nature', difficulty: 'easy', question: "What do flowers need to make seeds?", options: ["Bees", "Cars", "Phones", "Books"], correct: 0, explanation: "Bees help flowers make seeds by spreading pollen!" },
  { id: 77, subject: 'science', category: 'nature', difficulty: 'easy', question: "What happens to leaves in fall?", options: ["They turn green", "They change color", "They grow bigger", "They bloom"], correct: 1, explanation: "Leaves change color in fall!" },

  { id: 78, subject: 'science', category: 'nature', difficulty: 'medium', question: "What do bees collect from flowers?", options: ["Water", "Nectar", "Dirt", "Leaves"], correct: 1, explanation: "Bees collect nectar from flowers to make honey!" },
  { id: 79, subject: 'science', category: 'nature', difficulty: 'medium', question: "Which tree stays green all year?", options: ["Oak tree", "Maple tree", "Pine tree", "Apple tree"], correct: 2, explanation: "Pine trees stay green all year! They're called evergreens." },
  { id: 80, subject: 'science', category: 'nature', difficulty: 'medium', question: "What is the tallest type of tree?", options: ["Oak", "Redwood", "Maple", "Pine"], correct: 1, explanation: "Redwood trees can grow over 300 feet tall!" },
  { id: 81, subject: 'science', category: 'nature', difficulty: 'medium', question: "What part of the plant grows underground?", options: ["Leaves", "Flowers", "Roots", "Stem"], correct: 2, explanation: "Roots grow underground and help plants get water!" },
  { id: 82, subject: 'science', category: 'nature', difficulty: 'medium', question: "What makes plants green?", options: ["Water", "Chlorophyll", "Sunlight", "Air"], correct: 1, explanation: "Chlorophyll makes plants green!" },
  { id: 83, subject: 'science', category: 'nature', difficulty: 'medium', question: "How many seasons are there in a year?", options: ["2 seasons", "3 seasons", "4 seasons", "5 seasons"], correct: 2, explanation: "There are 4 seasons: Spring, Summer, Fall, and Winter!" },

  { id: 84, subject: 'science', category: 'nature', difficulty: 'hard', question: "What process do plants use to make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Absorption"], correct: 1, explanation: "Plants use photosynthesis to make food from sunlight!" },
  { id: 85, subject: 'science', category: 'nature', difficulty: 'hard', question: "What gas do plants give us?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], correct: 1, explanation: "Plants give us oxygen that we breathe!" },
  { id: 86, subject: 'science', category: 'nature', difficulty: 'hard', question: "What is the process of water cycling called?", options: ["Photosynthesis", "Water Cycle", "Evaporation", "Condensation"], correct: 1, explanation: "The water cycle is how water moves around Earth!" },
  { id: 87, subject: 'science', category: 'nature', difficulty: 'hard', question: "Which part of the flower becomes the fruit?", options: ["Petal", "Stem", "Ovary", "Leaf"], correct: 2, explanation: "The ovary of the flower becomes the fruit!" },
  { id: 88, subject: 'science', category: 'nature', difficulty: 'hard', question: "What is the study of plants called?", options: ["Zoology", "Botany", "Geology", "Astronomy"], correct: 1, explanation: "Botany is the study of plants!" },
  { id: 89, subject: 'science', category: 'nature', difficulty: 'hard', question: "How do seeds spread?", options: ["Only by wind", "Wind, water, and animals", "Only by water", "They don't spread"], correct: 1, explanation: "Seeds spread by wind, water, and animals!" },
  { id: 90, subject: 'science', category: 'nature', difficulty: 'hard', question: "What is a young plant called?", options: ["Seed", "Seedling", "Sprout", "Bud"], correct: 1, explanation: "A young plant is called a seedling!" },

  // ========== SCIENCE - Physics/Chemistry (20 questions) ==========
  { id: 91, subject: 'science', category: 'physics', difficulty: 'easy', question: "What happens when you drop a ball?", options: ["It flies up", "It falls down", "It floats", "It disappears"], correct: 1, explanation: "Gravity pulls the ball down!" },
  { id: 92, subject: 'science', category: 'chemistry', difficulty: 'easy', question: "What color is pure water?", options: ["Red", "Clear", "Yellow", "Green"], correct: 1, explanation: "Water is clear and colorless!" },
  { id: 93, subject: 'science', category: 'physics', difficulty: 'easy', question: "What makes things fall down?", options: ["Wind", "Gravity", "Air", "Magic"], correct: 1, explanation: "Gravity pulls things toward Earth!" },
  { id: 94, subject: 'science', category: 'chemistry', difficulty: 'easy', question: "What is frozen water called?", options: ["Steam", "Ice", "Snow", "Rain"], correct: 1, explanation: "Frozen water is called ice!" },
  { id: 95, subject: 'science', category: 'physics', difficulty: 'easy', question: "What do we need to see?", options: ["Darkness", "Light", "Water", "Air"], correct: 1, explanation: "We need light to see things!" },
  { id: 96, subject: 'science', category: 'chemistry', difficulty: 'easy', question: "What happens to ice in the sun?", options: ["It freezes more", "It melts", "It turns green", "Nothing"], correct: 1, explanation: "Ice melts in the sun and becomes water!" },
  { id: 97, subject: 'science', category: 'physics', difficulty: 'easy', question: "What makes a ball bounce?", options: ["Air inside", "Magic", "Color", "Size"], correct: 0, explanation: "Air inside the ball helps it bounce!" },

  { id: 98, subject: 'science', category: 'physics', difficulty: 'medium', question: "What makes a rainbow appear?", options: ["Paint", "Sunlight and Rain", "Clouds only", "Wind"], correct: 1, explanation: "Rainbows form when sunlight shines through rain drops!" },
  { id: 99, subject: 'science', category: 'chemistry', difficulty: 'medium', question: "What is ice made of?", options: ["Stone", "Frozen water", "Glass", "Plastic"], correct: 1, explanation: "Ice is frozen water!" },
  { id: 100, subject: 'science', category: 'physics', difficulty: 'medium', question: "What causes echoes?", options: ["Magic", "Sound bouncing", "Wind", "Water"], correct: 1, explanation: "Echoes happen when sound bounces off surfaces!" },
  { id: 101, subject: 'science', category: 'chemistry', difficulty: 'medium', question: "What are the three states of water?", options: ["Hot, cold, warm", "Solid, liquid, gas", "Big, small, tiny", "Red, blue, clear"], correct: 1, explanation: "Water can be solid (ice), liquid (water), or gas (steam)!" },
  { id: 102, subject: 'science', category: 'physics', difficulty: 'medium', question: "Why do we see lightning before hearing thunder?", options: ["Light is faster", "Sound is faster", "They're the same", "Random chance"], correct: 0, explanation: "Light travels faster than sound!" },
  { id: 103, subject: 'science', category: 'chemistry', difficulty: 'medium', question: "What makes things rust?", options: ["Water and air", "Light", "Heat", "Cold"], correct: 0, explanation: "Iron rusts when it reacts with water and air!" },

  { id: 104, subject: 'science', category: 'physics', difficulty: 'hard', question: "What are clouds made of?", options: ["Cotton", "Tiny water drops", "Smoke", "Paper"], correct: 1, explanation: "Clouds are made of tiny water droplets!" },
  { id: 105, subject: 'science', category: 'chemistry', difficulty: 'hard', question: "What gas do we breathe in to stay alive?", options: ["Oxygen", "Helium", "Carbon", "Nitrogen"], correct: 0, explanation: "We breathe oxygen to stay alive!" },
  { id: 106, subject: 'science', category: 'physics', difficulty: 'hard', question: "What is the center of an atom called?", options: ["Electron", "Nucleus", "Proton", "Shell"], correct: 1, explanation: "The center of an atom is called the nucleus!" },
  { id: 107, subject: 'science', category: 'chemistry', difficulty: 'hard', question: "What is H2O?", options: ["Air", "Water", "Salt", "Sugar"], correct: 1, explanation: "H2O is the chemical formula for water!" },
  { id: 108, subject: 'science', category: 'physics', difficulty: 'hard', question: "What makes a magnet attract metal?", options: ["Gravity", "Magnetic force", "Heat", "Light"], correct: 1, explanation: "Magnets have a magnetic force that attracts certain metals!" },
  { id: 109, subject: 'science', category: 'chemistry', difficulty: 'hard', question: "What gas do plants need to grow?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], correct: 1, explanation: "Plants need carbon dioxide to make food!" },
  { id: 110, subject: 'science', category: 'physics', difficulty: 'hard', question: "What is the speed of light?", options: ["Very slow", "Medium speed", "Very fast", "Same as sound"], correct: 2, explanation: "Light travels incredibly fast - about 186,000 miles per second!" },

  // ========== ENGLISH - Reading (20 questions) ==========
  { id: 111, subject: 'english', category: 'reading', difficulty: 'easy', question: "What is the first letter of the alphabet?", options: ["B", "A", "C", "D"], correct: 1, explanation: "A is the first letter!" },
  { id: 112, subject: 'english', category: 'reading', difficulty: 'easy', question: "How many letters are in the word 'CAT'?", options: ["2 letters", "3 letters", "4 letters", "5 letters"], correct: 1, explanation: "CAT has 3 letters: C-A-T!" },
  { id: 113, subject: 'english', category: 'reading', difficulty: 'easy', question: "What letter does 'Dog' start with?", options: ["C", "D", "B", "A"], correct: 1, explanation: "Dog starts with D!" },
  { id: 114, subject: 'english', category: 'reading', difficulty: 'easy', question: "What is the last letter of the alphabet?", options: ["Y", "Z", "X", "W"], correct: 1, explanation: "Z is the last letter!" },
  { id: 115, subject: 'english', category: 'reading', difficulty: 'easy', question: "How many letters are in 'BOOK'?", options: ["3 letters", "4 letters", "5 letters", "6 letters"], correct: 1, explanation: "BOOK has 4 letters: B-O-O-K!" },
  { id: 116, subject: 'english', category: 'reading', difficulty: 'easy', question: "What letter comes after A?", options: ["C", "B", "D", "E"], correct: 1, explanation: "B comes after A in the alphabet!" },
  { id: 117, subject: 'english', category: 'reading', difficulty: 'easy', question: "What does 'Sun' start with?", options: ["T", "S", "R", "P"], correct: 1, explanation: "Sun starts with the letter S!" },

  { id: 118, subject: 'english', category: 'reading', difficulty: 'medium', question: "Which word rhymes with 'CAT'?", options: ["DOG", "HAT", "PIG", "COW"], correct: 1, explanation: "CAT and HAT rhyme!" },
  { id: 119, subject: 'english', category: 'reading', difficulty: 'medium', question: "What is the opposite of 'BIG'?", options: ["Huge", "Small", "Tall", "Wide"], correct: 1, explanation: "Small is the opposite of big!" },
  { id: 120, subject: 'english', category: 'reading', difficulty: 'medium', question: "Which word rhymes with 'TREE'?", options: ["LEAF", "BEE", "BRANCH", "ROOT"], correct: 1, explanation: "TREE and BEE rhyme!" },
  { id: 121, subject: 'english', category: 'reading', difficulty: 'medium', question: "What is the opposite of 'HOT'?", options: ["Warm", "Cold", "Cool", "Freezing"], correct: 1, explanation: "Cold is the opposite of hot!" },
  { id: 122, subject: 'english', category: 'reading', difficulty: 'medium', question: "Which word rhymes with 'SUN'?", options: ["MOON", "RUN", "SKY", "STAR"], correct: 1, explanation: "SUN and RUN rhyme!" },
  { id: 123, subject: 'english', category: 'reading', difficulty: 'medium', question: "What is a word with double letters?", options: ["CAT", "BOOK", "DOG", "SUN"], correct: 1, explanation: "BOOK has double O's!" },

  { id: 124, subject: 'english', category: 'reading', difficulty: 'hard', question: "How many vowels are there?", options: ["3 vowels", "4 vowels", "5 vowels", "6 vowels"], correct: 2, explanation: "There are 5 vowels: A, E, I, O, U!" },
  { id: 125, subject: 'english', category: 'reading', difficulty: 'hard', question: "What is a compound word?", options: ["A big word", "Two words joined", "A rhyming word", "A short word"], correct: 1, explanation: "A compound word is made of two words joined together, like 'sunflower'!" },
  { id: 126, subject: 'english', category: 'reading', difficulty: 'hard', question: "Which is a palindrome (reads same forwards and backwards)?", options: ["CAT", "MOM", "DOG", "SUN"], correct: 1, explanation: "MOM reads the same forwards and backwards!" },
  { id: 127, subject: 'english', category: 'reading', difficulty: 'hard', question: "What are words that sound the same but have different meanings?", options: ["Rhymes", "Homophones", "Synonyms", "Antonyms"], correct: 1, explanation: "Homophones sound the same but have different meanings, like 'sea' and 'see'!" },
  { id: 128, subject: 'english', category: 'reading', difficulty: 'hard', question: "How many letters are in the alphabet?", options: ["24 letters", "25 letters", "26 letters", "27 letters"], correct: 2, explanation: "There are 26 letters in the alphabet!" },
  { id: 129, subject: 'english', category: 'reading', difficulty: 'hard', question: "What is alliteration?", options: ["Rhyming words", "Same starting sound", "Opposite words", "Long words"], correct: 1, explanation: "Alliteration is when words start with the same sound, like 'Peter Piper'!" },
  { id: 130, subject: 'english', category: 'reading', difficulty: 'hard', question: "What type of word is 'quickly'?", options: ["Noun", "Verb", "Adjective", "Adverb"], correct: 3, explanation: "Quickly is an adverb - it describes how something is done!" },

  // ========== ENGLISH - Vocabulary (20 questions) ==========
  { id: 131, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you use to write?", options: ["Spoon", "Pencil", "Shoe", "Hat"], correct: 1, explanation: "We use a pencil to write!" },
  { id: 132, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you wear on your feet?", options: ["Hat", "Gloves", "Shoes", "Shirt"], correct: 2, explanation: "We wear shoes on our feet!" },
  { id: 133, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you sleep in?", options: ["Chair", "Bed", "Table", "Floor"], correct: 1, explanation: "We sleep in a bed!" },
  { id: 134, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you eat with?", options: ["Hands", "Fork", "Feet", "Nose"], correct: 1, explanation: "We eat with a fork and spoon!" },
  { id: 135, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you drink from?", options: ["Plate", "Cup", "Shoe", "Hat"], correct: 1, explanation: "We drink from a cup!" },
  { id: 136, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What tells time?", options: ["Book", "Clock", "Pencil", "Chair"], correct: 1, explanation: "A clock tells us the time!" },
  { id: 137, subject: 'english', category: 'vocabulary', difficulty: 'easy', question: "What do you wear on your head?", options: ["Shoes", "Gloves", "Hat", "Socks"], correct: 2, explanation: "We wear a hat on our head!" },

  { id: 138, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What is a baby dog called?", options: ["Kitten", "Puppy", "Calf", "Chick"], correct: 1, explanation: "A baby dog is called a puppy!" },
  { id: 139, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What do you use to eat soup?", options: ["Fork", "Knife", "Spoon", "Hands"], correct: 2, explanation: "We use a spoon to eat soup!" },
  { id: 140, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What is a baby cat called?", options: ["Puppy", "Kitten", "Calf", "Chick"], correct: 1, explanation: "A baby cat is called a kitten!" },
  { id: 141, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What do you use to cut paper?", options: ["Pencil", "Scissors", "Glue", "Ruler"], correct: 1, explanation: "We use scissors to cut paper!" },
  { id: 142, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What is someone who teaches called?", options: ["Doctor", "Teacher", "Chef", "Pilot"], correct: 1, explanation: "Someone who teaches is called a teacher!" },
  { id: 143, subject: 'english', category: 'vocabulary', difficulty: 'medium', question: "What room do you cook in?", options: ["Bedroom", "Bathroom", "Kitchen", "Living room"], correct: 2, explanation: "We cook in the kitchen!" },

  { id: 144, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is the opposite of 'HAPPY'?", options: ["Joyful", "Excited", "Sad", "Angry"], correct: 2, explanation: "Sad is the opposite of happy!" },
  { id: 145, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is a synonym for 'BIG'?", options: ["Small", "Tiny", "Large", "Little"], correct: 2, explanation: "Large is a synonym for big!" },
  { id: 146, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is the opposite of 'FAST'?", options: ["Quick", "Slow", "Speedy", "Rapid"], correct: 1, explanation: "Slow is the opposite of fast!" },
  { id: 147, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What do you call a person who flies airplanes?", options: ["Driver", "Pilot", "Sailor", "Captain"], correct: 1, explanation: "A person who flies airplanes is called a pilot!" },
  { id: 148, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is a group of cows called?", options: ["Pack", "Flock", "Herd", "Swarm"], correct: 2, explanation: "A group of cows is called a herd!" },
  { id: 149, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is someone who fixes cars called?", options: ["Doctor", "Mechanic", "Chef", "Artist"], correct: 1, explanation: "Someone who fixes cars is called a mechanic!" },
  { id: 150, subject: 'english', category: 'vocabulary', difficulty: 'hard', question: "What is a baby horse called?", options: ["Puppy", "Kitten", "Foal", "Calf"], correct: 2, explanation: "A baby horse is called a foal!" },

  // ========== ENGLISH - Grammar (20 questions) ==========
  { id: 151, subject: 'english', category: 'grammar', difficulty: 'easy', question: "Which is correct: 'I ___ happy'?", options: ["am", "is", "are", "be"], correct: 0, explanation: "We say 'I am happy'!" },
  { id: 152, subject: 'english', category: 'grammar', difficulty: 'easy', question: "What comes at the end of a telling sentence?", options: ["!", "?", ".", ","], correct: 2, explanation: "A period (.) comes at the end of a telling sentence!" },
  { id: 153, subject: 'english', category: 'grammar', difficulty: 'easy', question: "What comes at the end of a question?", options: ["!", "?", ".", ","], correct: 1, explanation: "A question mark (?) comes at the end of a question!" },
  { id: 154, subject: 'english', category: 'grammar', difficulty: 'easy', question: "Which is correct: 'He ___ a boy'?", options: ["am", "is", "are", "be"], correct: 1, explanation: "We say 'He is a boy'!" },
  { id: 155, subject: 'english', category: 'grammar', difficulty: 'easy', question: "What starts with a capital letter?", options: ["Middle of sentence", "Beginning of sentence", "End of sentence", "Nowhere"], correct: 1, explanation: "Sentences start with a capital letter!" },
  { id: 156, subject: 'english', category: 'grammar', difficulty: 'easy', question: "Which is a naming word?", options: ["Run", "Jump", "Dog", "Quickly"], correct: 2, explanation: "Dog is a noun - a naming word!" },
  { id: 157, subject: 'english', category: 'grammar', difficulty: 'easy', question: "Which is an action word?", options: ["Cat", "Run", "Happy", "Big"], correct: 1, explanation: "Run is a verb - an action word!" },

  { id: 158, subject: 'english', category: 'grammar', difficulty: 'medium', question: "Which is correct: 'She ___ running'?", options: ["am", "is", "are", "be"], correct: 1, explanation: "We say 'She is running'!" },
  { id: 159, subject: 'english', category: 'grammar', difficulty: 'medium', question: "Which is correct: 'They ___ playing'?", options: ["am", "is", "are", "be"], correct: 2, explanation: "We say 'They are playing'!" },
  { id: 160, subject: 'english', category: 'grammar', difficulty: 'medium', question: "What is a describing word called?", options: ["Noun", "Verb", "Adjective", "Adverb"], correct: 2, explanation: "An adjective is a describing word, like 'big' or 'happy'!" },
  { id: 161, subject: 'english', category: 'grammar', difficulty: 'medium', question: "Which is correct: 'I ___ to school yesterday'?", options: ["go", "goes", "went", "going"], correct: 2, explanation: "We say 'I went to school yesterday' for past tense!" },
  { id: 162, subject: 'english', category: 'grammar', difficulty: 'medium', question: "What is the plural of 'cat'?", options: ["Cat", "Cats", "Cates", "Caties"], correct: 1, explanation: "The plural of cat is cats!" },
  { id: 163, subject: 'english', category: 'grammar', difficulty: 'medium', question: "Which word is a pronoun?", options: ["Dog", "Run", "He", "Happy"], correct: 2, explanation: "He is a pronoun - it replaces a noun!" },

  { id: 164, subject: 'english', category: 'grammar', difficulty: 'hard', question: "What is the past tense of 'run'?", options: ["Runned", "Ran", "Running", "Runs"], correct: 1, explanation: "The past tense of run is ran!" },
  { id: 165, subject: 'english', category: 'grammar', difficulty: 'hard', question: "Which sentence is correct?", options: ["She go home", "She goes home", "She going home", "She goed home"], correct: 1, explanation: "She goes home is correct!" },
  { id: 166, subject: 'english', category: 'grammar', difficulty: 'hard', question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], correct: 1, explanation: "The plural of child is children!" },
  { id: 167, subject: 'english', category: 'grammar', difficulty: 'hard', question: "Which is correct: 'I have ___ apples'?", options: ["two", "to", "too", "tu"], correct: 0, explanation: "I have two apples - 'two' is the number!" },
  { id: 168, subject: 'english', category: 'grammar', difficulty: 'hard', question: "What is a contraction?", options: ["A long word", "Two words shortened", "A capital letter", "A period"], correct: 1, explanation: "A contraction is two words shortened, like 'don't' for 'do not'!" },
  { id: 169, subject: 'english', category: 'grammar', difficulty: 'hard', question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mices", "Mousies"], correct: 1, explanation: "The plural of mouse is mice!" },
  { id: 170, subject: 'english', category: 'grammar', difficulty: 'hard', question: "Which shows possession: 'The ___ toy'?", options: ["dogs", "dog's", "dogs'", "dog"], correct: 1, explanation: "The dog's toy shows the toy belongs to the dog!" },

  // ========== GENERAL KNOWLEDGE - Geography (25 questions) ==========
  { id: 171, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What color is grass?", options: ["Red", "Blue", "Green", "Yellow"], correct: 2, explanation: "Grass is green!" },
  { id: 172, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is the biggest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1, explanation: "The Pacific Ocean is the biggest!" },
  { id: 173, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What do fish live in?", options: ["Trees", "Water", "Caves", "Sky"], correct: 1, explanation: "Fish live in water!" },
  { id: 174, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is sand found at?", options: ["Mountain", "Beach", "Forest", "City"], correct: 1, explanation: "Sand is found at the beach!" },
  { id: 175, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What falls from clouds?", options: ["Leaves", "Rain", "Sand", "Rocks"], correct: 1, explanation: "Rain falls from clouds!" },
  { id: 176, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "Where do penguins live?", options: ["Desert", "Jungle", "Antarctica", "Forest"], correct: 2, explanation: "Penguins live in cold Antarctica!" },
  { id: 177, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is a very dry place called?", options: ["Ocean", "Desert", "Forest", "Lake"], correct: 1, explanation: "A desert is a very dry place!" },
  { id: 178, subject: 'general-knowledge', category: 'geography', difficulty: 'easy', question: "What is frozen water called?", options: ["Steam", "Ice", "Snow", "Rain"], correct: 1, explanation: "Frozen water is called ice!" },

  { id: 179, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "Which is the tallest mountain?", options: ["Kilimanjaro", "Everest", "Fuji", "Alps"], correct: 1, explanation: "Mount Everest is the tallest mountain!" },
  { id: 180, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "How many continents are there?", options: ["5 continents", "6 continents", "7 continents", "8 continents"], correct: 2, explanation: "There are 7 continents!" },
  { id: 181, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "America"], correct: 1, explanation: "Asia is the largest continent!" },
  { id: 182, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is the longest river?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1, explanation: "The Nile River is the longest!" },
  { id: 183, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is a large area of trees called?", options: ["Desert", "Ocean", "Forest", "Mountain"], correct: 2, explanation: "A large area of trees is called a forest!" },
  { id: 184, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is the largest desert?", options: ["Sahara", "Gobi", "Mojave", "Arabian"], correct: 0, explanation: "The Sahara is the largest hot desert!" },
  { id: 185, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "Which ocean is coldest?", options: ["Pacific", "Atlantic", "Arctic", "Indian"], correct: 2, explanation: "The Arctic Ocean is the coldest!" },
  { id: 186, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is a mountain that can erupt?", options: ["Hill", "Volcano", "Canyon", "Valley"], correct: 1, explanation: "A volcano is a mountain that can erupt!" },
  { id: 187, subject: 'general-knowledge', category: 'geography', difficulty: 'medium', question: "What is the imaginary line around Earth's middle?", options: ["Prime Meridian", "Equator", "Tropic", "Pole"], correct: 1, explanation: "The Equator is the line around Earth's middle!" },

  { id: 188, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What is the largest country by area?", options: ["China", "USA", "Russia", "Canada"], correct: 2, explanation: "Russia is the largest country by area!" },
  { id: 189, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What is the deepest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1, explanation: "The Pacific Ocean is the deepest!" },
  { id: 190, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "Africa"], correct: 1, explanation: "Australia is the smallest continent!" },
  { id: 191, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What causes earthquakes?", options: ["Wind", "Rain", "Moving plates", "Waves"], correct: 2, explanation: "Earthquakes happen when Earth's plates move!" },
  { id: 192, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What is the driest place on Earth?", options: ["Sahara Desert", "Atacama Desert", "Death Valley", "Gobi Desert"], correct: 1, explanation: "The Atacama Desert in Chile is the driest!" },
  { id: 193, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What is the study of Earth called?", options: ["Biology", "Geology", "Astronomy", "Zoology"], correct: 1, explanation: "Geology is the study of Earth!" },
  { id: 194, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What percentage of Earth is covered by water?", options: ["50%", "60%", "70%", "80%"], correct: 2, explanation: "About 70% of Earth is covered by water!" },
  { id: 195, subject: 'general-knowledge', category: 'geography', difficulty: 'hard', question: "What are the lines on a map that show height?", options: ["Latitude", "Longitude", "Contour lines", "Borders"], correct: 2, explanation: "Contour lines show height on maps!" },

  // ========== GENERAL KNOWLEDGE - Culture/History (25 questions) ==========
  { id: 196, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do we celebrate on birthdays?", options: ["School", "Another year", "Homework", "Sleeping"], correct: 1, explanation: "We celebrate getting one year older!" },
  { id: 197, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do you say when someone helps you?", options: ["Goodbye", "Thank you", "Hello", "Sorry"], correct: 1, explanation: "We say 'Thank you' when someone helps!" },
  { id: 198, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do we use money for?", options: ["Eating", "Buying things", "Sleeping", "Walking"], correct: 1, explanation: "We use money to buy things!" },
  { id: 199, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do you say when you meet someone?", options: ["Goodbye", "Hello", "Thank you", "Sorry"], correct: 1, explanation: "We say 'Hello' when we meet someone!" },
  { id: 200, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do you do when you're hungry?", options: ["Sleep", "Eat", "Play", "Read"], correct: 1, explanation: "We eat when we're hungry!" },
  { id: 201, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What do you say when you make a mistake?", options: ["Hello", "Goodbye", "Sorry", "Thank you"], correct: 2, explanation: "We say 'Sorry' when we make a mistake!" },
  { id: 202, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What meal do we eat in the morning?", options: ["Lunch", "Dinner", "Breakfast", "Snack"], correct: 2, explanation: "We eat breakfast in the morning!" },
  { id: 203, subject: 'general-knowledge', category: 'culture', difficulty: 'easy', question: "What day comes after Monday?", options: ["Sunday", "Tuesday", "Wednesday", "Friday"], correct: 1, explanation: "Tuesday comes after Monday!" },

  { id: 204, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What holiday has a Christmas tree?", options: ["Halloween", "Christmas", "Easter", "New Year"], correct: 1, explanation: "We decorate Christmas trees for Christmas!" },
  { id: 205, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "How many days are in a week?", options: ["5 days", "6 days", "7 days", "8 days"], correct: 2, explanation: "There are 7 days in a week!" },
  { id: 206, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "How many months are in a year?", options: ["10 months", "11 months", "12 months", "13 months"], correct: 2, explanation: "There are 12 months in a year!" },
  { id: 207, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What is the first month of the year?", options: ["December", "January", "February", "March"], correct: 1, explanation: "January is the first month!" },
  { id: 208, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What holiday do we give cards with hearts?", options: ["Christmas", "Halloween", "Valentine's Day", "Easter"], correct: 2, explanation: "We give heart cards on Valentine's Day!" },
  { id: 209, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What do people do at a library?", options: ["Cook", "Read", "Sleep", "Shop"], correct: 1, explanation: "People read books at the library!" },
  { id: 210, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What building do you go to when sick?", options: ["Library", "School", "Hospital", "Store"], correct: 2, explanation: "We go to the hospital when we're sick!" },
  { id: 211, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "What is the last month of the year?", options: ["November", "December", "January", "October"], correct: 1, explanation: "December is the last month!" },
  { id: 212, subject: 'general-knowledge', category: 'culture', difficulty: 'medium', question: "How many hours are in a day?", options: ["12 hours", "20 hours", "24 hours", "30 hours"], correct: 2, explanation: "There are 24 hours in a day!" },

  { id: 213, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "What did people use before cars?", options: ["Airplanes", "Horses", "Bicycles", "Trains"], correct: 1, explanation: "People rode horses before cars!" },
  { id: 214, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "Who invented the light bulb?", options: ["Einstein", "Edison", "Newton", "Tesla"], correct: 1, explanation: "Thomas Edison invented the light bulb!" },
  { id: 215, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "What was used to write before pencils?", options: ["Crayons", "Quills", "Markers", "Pens"], correct: 1, explanation: "People used feather quills to write!" },
  { id: 216, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "What were the first books made of?", options: ["Paper", "Papyrus", "Plastic", "Wood"], correct: 1, explanation: "Early books were made on papyrus!" },
  { id: 217, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "Who invented the telephone?", options: ["Edison", "Bell", "Einstein", "Franklin"], correct: 1, explanation: "Alexander Graham Bell invented the telephone!" },
  { id: 218, subject: 'general-knowledge', category: 'culture', difficulty: 'hard', question: "What do you call a story passed down through families?", options: ["News", "Legend", "Book", "Movie"], correct: 1, explanation: "A legend is a story passed down through families!" },
  { id: 219, subject: 'general-knowledge', category: 'culture', difficulty: 'hard', question: "What language is spoken in most countries?", options: ["Spanish", "English", "Chinese", "French"], correct: 1, explanation: "English is spoken in many countries around the world!" },
  { id: 220, subject: 'general-knowledge', category: 'history', difficulty: 'hard', question: "What ancient wonder still stands in Egypt?", options: ["Gardens", "Pyramids", "Statue", "Temple"], correct: 1, explanation: "The Pyramids of Egypt still stand today!" },

  // ========== ART - Colors (20 questions) ==========
  { id: 221, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is the sky on a sunny day?", options: ["Green", "Blue", "Red", "Yellow"], correct: 1, explanation: "The sky is blue!" },
  { id: 222, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is a banana?", options: ["Red", "Yellow", "Blue", "Green"], correct: 1, explanation: "Bananas are yellow when ripe!" },
  { id: 223, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is the sun?", options: ["Blue", "Yellow", "Green", "Purple"], correct: 1, explanation: "The sun is yellow!" },
  { id: 224, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color are clouds?", options: ["Black", "White", "Green", "Red"], correct: 1, explanation: "Clouds are usually white!" },
  { id: 225, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is chocolate?", options: ["Yellow", "Brown", "Blue", "Green"], correct: 1, explanation: "Chocolate is brown!" },
  { id: 226, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is snow?", options: ["Black", "White", "Blue", "Green"], correct: 1, explanation: "Snow is white!" },
  { id: 227, subject: 'art', category: 'colors', difficulty: 'easy', question: "What color is grass?", options: ["Red", "Green", "Blue", "Yellow"], correct: 1, explanation: "Grass is green!" },

  { id: 228, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color do you get when you mix red and yellow?", options: ["Purple", "Orange", "Green", "Brown"], correct: 1, explanation: "Red + Yellow = Orange!" },
  { id: 229, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color do you get when you mix blue and yellow?", options: ["Purple", "Orange", "Green", "Brown"], correct: 2, explanation: "Blue + Yellow = Green!" },
  { id: 230, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color do you get when you mix red and blue?", options: ["Purple", "Orange", "Green", "Brown"], correct: 0, explanation: "Red + Blue = Purple!" },
  { id: 231, subject: 'art', category: 'colors', difficulty: 'medium', question: "What is a light red color called?", options: ["Pink", "Orange", "Purple", "Brown"], correct: 0, explanation: "Light red is called pink!" },
  { id: 232, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color is the opposite of white?", options: ["Gray", "Black", "Brown", "Blue"], correct: 1, explanation: "Black is the opposite of white!" },
  { id: 233, subject: 'art', category: 'colors', difficulty: 'medium', question: "What color are most tree trunks?", options: ["Green", "Brown", "Red", "Blue"], correct: 1, explanation: "Tree trunks are usually brown!" },

  { id: 234, subject: 'art', category: 'colors', difficulty: 'hard', question: "What are the primary colors?", options: ["Red, Yellow, Blue", "Orange, Green, Purple", "Black, White, Gray", "Pink, Brown, Tan"], correct: 0, explanation: "The primary colors are Red, Yellow, and Blue!" },
  { id: 235, subject: 'art', category: 'colors', difficulty: 'hard', question: "What are the secondary colors?", options: ["Red, Yellow, Blue", "Orange, Green, Purple", "Black, White, Gray", "Pink, Brown, Tan"], correct: 1, explanation: "The secondary colors are Orange, Green, and Purple!" },
  { id: 236, subject: 'art', category: 'colors', difficulty: 'hard', question: "What is a rainbow of colors called?", options: ["Monochrome", "Spectrum", "Palette", "Blend"], correct: 1, explanation: "A rainbow of colors is called a spectrum!" },
  { id: 237, subject: 'art', category: 'colors', difficulty: 'hard', question: "How many colors are in a rainbow?", options: ["5 colors", "6 colors", "7 colors", "8 colors"], correct: 2, explanation: "There are 7 colors in a rainbow!" },
  { id: 238, subject: 'art', category: 'colors', difficulty: 'hard', question: "What color do you get mixing all colors together?", options: ["White", "Black", "Brown", "Gray"], correct: 2, explanation: "Mixing all paint colors makes brown!" },
  { id: 239, subject: 'art', category: 'colors', difficulty: 'hard', question: "What is a color scheme with one color called?", options: ["Rainbow", "Monochromatic", "Complementary", "Analogous"], correct: 1, explanation: "Using one color in different shades is monochromatic!" },
  { id: 240, subject: 'art', category: 'colors', difficulty: 'hard', question: "What are colors next to each other on the color wheel?", options: ["Primary", "Secondary", "Complementary", "Analogous"], correct: 3, explanation: "Colors next to each other are analogous!" },

  // ========== ART - Creativity/Music (20 questions) ==========
  { id: 241, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What do you use to draw?", options: ["Crayon", "Spoon", "Shoe", "Book"], correct: 0, explanation: "We use crayons or pencils to draw!" },
  { id: 242, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What shape is a ball?", options: ["Square", "Circle", "Triangle", "Star"], correct: 1, explanation: "A ball is round like a circle!" },
  { id: 243, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What shape is a box?", options: ["Circle", "Square", "Triangle", "Star"], correct: 1, explanation: "A box is shaped like a square!" },
  { id: 244, subject: 'art', category: 'creativity', difficulty: 'easy', question: "How many sides does a triangle have?", options: ["2 sides", "3 sides", "4 sides", "5 sides"], correct: 1, explanation: "A triangle has 3 sides!" },
  { id: 245, subject: 'art', category: 'creativity', difficulty: 'easy', question: "How many sides does a square have?", options: ["2 sides", "3 sides", "4 sides", "5 sides"], correct: 2, explanation: "A square has 4 sides!" },
  { id: 246, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What shape is a wheel?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A wheel is round like a circle!" },
  { id: 247, subject: 'art', category: 'creativity', difficulty: 'easy', question: "What do you use to color?", options: ["Scissors", "Crayons", "Glue", "Ruler"], correct: 1, explanation: "We use crayons to color!" },

  { id: 248, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What shape is a door?", options: ["Circle", "Triangle", "Rectangle", "Star"], correct: 2, explanation: "Most doors are rectangles!" },
  { id: 249, subject: 'art', category: 'creativity', difficulty: 'medium', question: "How many points does a star usually have?", options: ["3 points", "4 points", "5 points", "6 points"], correct: 2, explanation: "A star usually has 5 points!" },
  { id: 250, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What do you use to stick things together?", options: ["Pencil", "Scissors", "Glue", "Ruler"], correct: 2, explanation: "We use glue to stick things together!" },
  { id: 251, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What is a picture made with a camera?", options: ["Drawing", "Painting", "Photograph", "Sculpture"], correct: 2, explanation: "A picture made with a camera is a photograph!" },
  { id: 252, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What do you call art made from clay?", options: ["Painting", "Drawing", "Sculpture", "Photograph"], correct: 2, explanation: "Art made from clay is a sculpture!" },
  { id: 253, subject: 'art', category: 'creativity', difficulty: 'medium', question: "What shape has no corners?", options: ["Square", "Triangle", "Circle", "Rectangle"], correct: 2, explanation: "A circle has no corners!" },

  { id: 254, subject: 'art', category: 'creativity', difficulty: 'hard', question: "How many sides does a hexagon have?", options: ["4 sides", "5 sides", "6 sides", "7 sides"], correct: 2, explanation: "A hexagon has 6 sides!" },
  { id: 255, subject: 'art', category: 'creativity', difficulty: 'hard', question: "How many sides does an octagon have?", options: ["6 sides", "7 sides", "8 sides", "9 sides"], correct: 2, explanation: "An octagon has 8 sides, like a stop sign!" },
  { id: 256, subject: 'art', category: 'creativity', difficulty: 'hard', question: "What is a 3D circle called?", options: ["Cube", "Sphere", "Pyramid", "Cone"], correct: 1, explanation: "A 3D circle is called a sphere, like a ball!" },
  { id: 257, subject: 'art', category: 'creativity', difficulty: 'hard', question: "What is a 3D square called?", options: ["Cube", "Sphere", "Pyramid", "Cone"], correct: 0, explanation: "A 3D square is called a cube, like a box!" },
  { id: 258, subject: 'art', category: 'music', difficulty: 'medium', question: "What makes music?", options: ["Silence", "Sounds", "Colors", "Shapes"], correct: 1, explanation: "Music is made of sounds!" },
  { id: 259, subject: 'art', category: 'music', difficulty: 'medium', question: "What do you hit to make drum sounds?", options: ["Piano", "Drums", "Guitar", "Flute"], correct: 1, explanation: "You hit drums to make drum sounds!" },
  { id: 260, subject: 'art', category: 'music', difficulty: 'hard', question: "How many strings does a guitar usually have?", options: ["4 strings", "5 strings", "6 strings", "7 strings"], correct: 2, explanation: "A guitar usually has 6 strings!" },

  // ========== LOGIC - Patterns (20 questions) ==========
  { id: 261, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? 1, 2, 3, ___", options: ["1", "4", "5", "10"], correct: 1, explanation: "The pattern is counting: 1, 2, 3, 4!" },
  { id: 262, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? A, B, C, ___", options: ["A", "D", "Z", "B"], correct: 1, explanation: "The pattern is the alphabet: A, B, C, D!" },
  { id: 263, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? Red, Red, Red, ___", options: ["Blue", "Red", "Green", "Yellow"], correct: 1, explanation: "The pattern repeats: Red, Red, Red, Red!" },
  { id: 264, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? 10, 9, 8, ___", options: ["9", "7", "6", "10"], correct: 1, explanation: "The pattern counts down: 10, 9, 8, 7!" },
  { id: 265, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? Big, Small, Big, Small, ___", options: ["Big", "Medium", "Tiny", "Huge"], correct: 0, explanation: "The pattern alternates: Big, Small, Big!" },
  { id: 266, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? 5, 10, 15, ___", options: ["16", "20", "25", "30"], correct: 1, explanation: "The pattern adds 5: 5, 10, 15, 20!" },
  { id: 267, subject: 'logic', category: 'patterns', difficulty: 'easy', question: "What comes next? Circle, Square, Circle, Square, ___", options: ["Triangle", "Circle", "Star", "Rectangle"], correct: 1, explanation: "The pattern repeats: Circle, Square, Circle!" },

  { id: 268, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? 2, 4, 6, ___", options: ["7", "8", "9", "10"], correct: 1, explanation: "The pattern is even numbers: 2, 4, 6, 8!" },
  { id: 269, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? Red, Blue, Red, Blue, ___", options: ["Green", "Red", "Yellow", "Blue"], correct: 1, explanation: "The pattern repeats: Red, Blue, Red!" },
  { id: 270, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? 1, 3, 5, 7, ___", options: ["8", "9", "10", "11"], correct: 1, explanation: "The pattern is odd numbers: 1, 3, 5, 7, 9!" },
  { id: 271, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? Monday, Tuesday, Wednesday, ___", options: ["Monday", "Thursday", "Friday", "Sunday"], correct: 1, explanation: "The pattern is days of the week!" },
  { id: 272, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? 3, 6, 9, 12, ___", options: ["13", "14", "15", "16"], correct: 2, explanation: "The pattern adds 3: 3, 6, 9, 12, 15!" },
  { id: 273, subject: 'logic', category: 'patterns', difficulty: 'medium', question: "What comes next? ABA, BAB, ABA, ___", options: ["ABA", "BAB", "AAA", "BBB"], correct: 1, explanation: "The pattern alternates: ABA, BAB!" },

  { id: 274, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 1, 2, 4, 8, ___", options: ["10", "12", "16", "20"], correct: 2, explanation: "Each number doubles: 1, 2, 4, 8, 16!" },
  { id: 275, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 1, 1, 2, 3, 5, ___", options: ["6", "7", "8", "9"], correct: 2, explanation: "This is the Fibonacci sequence: add the last two numbers!" },
  { id: 276, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 100, 90, 80, 70, ___", options: ["65", "60", "50", "40"], correct: 1, explanation: "The pattern subtracts 10: 100, 90, 80, 70, 60!" },
  { id: 277, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? AB, BC, CD, ___", options: ["DD", "DE", "EF", "DC"], correct: 1, explanation: "Each pair moves one letter forward: AB, BC, CD, DE!" },
  { id: 278, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 2, 6, 18, 54, ___", options: ["108", "162", "216", "270"], correct: 1, explanation: "Each number is multiplied by 3: 2, 6, 18, 54, 162!" },
  { id: 279, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? 1, 4, 9, 16, ___", options: ["20", "25", "30", "36"], correct: 1, explanation: "These are square numbers: 1, 4, 9, 16, 25!" },
  { id: 280, subject: 'logic', category: 'patterns', difficulty: 'hard', question: "What comes next? Z, Y, X, W, ___", options: ["U", "V", "T", "S"], correct: 1, explanation: "The pattern goes backwards in alphabet: Z, Y, X, W, V!" },

  // ========== LOGIC - Puzzles (20 questions) ==========
  { id: 281, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "If you have 2 apples and get 1 more, how many do you have?", options: ["1 apple", "2 apples", "3 apples", "4 apples"], correct: 2, explanation: "2 + 1 = 3 apples!" },
  { id: 282, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "Which one is different? Cat, Dog, Car, Rabbit", options: ["Cat", "Dog", "Car", "Rabbit"], correct: 2, explanation: "Car is different - it's not an animal!" },
  { id: 283, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "Which one doesn't belong? Apple, Banana, Carrot, Orange", options: ["Apple", "Banana", "Carrot", "Orange"], correct: 2, explanation: "Carrot is a vegetable, the rest are fruits!" },
  { id: 284, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "If you have 3 toys and give away 1, how many are left?", options: ["1 toy", "2 toys", "3 toys", "4 toys"], correct: 1, explanation: "3 - 1 = 2 toys left!" },
  { id: 285, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "Which is bigger: elephant or mouse?", options: ["Mouse", "Elephant", "Same size", "Neither"], correct: 1, explanation: "An elephant is much bigger!" },
  { id: 286, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "Which one flies? Car, Airplane, Boat, Train", options: ["Car", "Airplane", "Boat", "Train"], correct: 1, explanation: "Airplanes fly in the sky!" },
  { id: 287, subject: 'logic', category: 'puzzles', difficulty: 'easy', question: "What has wheels? Book, Bicycle, Apple, Chair", options: ["Book", "Bicycle", "Apple", "Chair"], correct: 1, explanation: "A bicycle has wheels!" },

  { id: 288, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "If today is Monday, what is tomorrow?", options: ["Sunday", "Tuesday", "Wednesday", "Friday"], correct: 1, explanation: "Tuesday comes after Monday!" },
  { id: 289, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "Which is heavier: a brick or a feather?", options: ["Brick", "Feather", "Same", "Neither"], correct: 0, explanation: "A brick is much heavier!" },
  { id: 290, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "What goes up but never comes down?", options: ["Balloon", "Your age", "Ball", "Airplane"], correct: 1, explanation: "Your age always goes up and never comes down!" },
  { id: 291, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "What has hands but cannot clap?", options: ["Person", "Clock", "Monkey", "Robot"], correct: 1, explanation: "A clock has hands but cannot clap!" },
  { id: 292, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "If 2 plus 2 equals 4, what does 3 plus 3 equal?", options: ["5", "6", "7", "8"], correct: 1, explanation: "3 + 3 = 6!" },
  { id: 293, subject: 'logic', category: 'puzzles', difficulty: 'medium', question: "What has a neck but no head?", options: ["Person", "Bottle", "Giraffe", "Shirt"], correct: 1, explanation: "A bottle has a neck but no head!" },

  { id: 294, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "How many months have 28 days?", options: ["1 month", "12 months", "2 months", "6 months"], correct: 1, explanation: "All 12 months have at least 28 days!" },
  { id: 295, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "What gets wet when drying?", options: ["Sponge", "Towel", "Cloth", "Paper"], correct: 1, explanation: "A towel gets wet when drying things!" },
  { id: 296, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "What has four legs but cannot walk?", options: ["Dog", "Table", "Horse", "Cat"], correct: 1, explanation: "A table has four legs but cannot walk!" },
  { id: 297, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "The more you take, the more you leave behind. What are they?", options: ["Footsteps", "Toys", "Books", "Apples"], correct: 0, explanation: "The more steps you take, the more footsteps you leave!" },
  { id: 298, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "What can you catch but not throw?", options: ["Ball", "Cold", "Fish", "Stick"], correct: 1, explanation: "You can catch a cold but not throw it!" },
  { id: 299, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "What runs but never walks?", options: ["Person", "River", "Dog", "Car"], correct: 1, explanation: "A river runs but never walks!" },
  { id: 300, subject: 'logic', category: 'puzzles', difficulty: 'hard', question: "What has eyes but cannot see?", options: ["Potato", "Fish", "Bird", "Insect"], correct: 0, explanation: "A potato has eyes (buds) but cannot see!" },

  // ========== LOGIC - Reasoning (20 questions) ==========
  { id: 301, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "What do you use an umbrella for?", options: ["To eat", "When it rains", "To sleep", "To read"], correct: 1, explanation: "We use umbrellas to stay dry in the rain!" },
  { id: 302, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "When do you need a coat?", options: ["When hot", "When cold", "When sleeping", "When eating"], correct: 1, explanation: "We wear coats when it's cold!" },
  { id: 303, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "Why do we brush our teeth?", options: ["To play", "To keep them clean", "To eat more", "To sleep"], correct: 1, explanation: "We brush teeth to keep them clean!" },
  { id: 304, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "What do you do when you're tired?", options: ["Run", "Sleep", "Jump", "Dance"], correct: 1, explanation: "We sleep when we're tired!" },
  { id: 305, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "Why do we eat food?", options: ["To sleep", "To get energy", "To play", "To read"], correct: 1, explanation: "We eat food to get energy!" },
  { id: 306, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "What do you wear when swimming?", options: ["Coat", "Swimsuit", "Boots", "Scarf"], correct: 1, explanation: "We wear swimsuits when swimming!" },
  { id: 307, subject: 'logic', category: 'reasoning', difficulty: 'easy', question: "Why do we go to school?", options: ["To sleep", "To learn", "To eat", "To play only"], correct: 1, explanation: "We go to school to learn!" },

  { id: 308, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "What happens if you don't water a plant?", options: ["It grows bigger", "It changes color", "It dries out", "It flies"], correct: 2, explanation: "Plants dry out without water!" },
  { id: 309, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "Why do we need to exercise?", options: ["To sleep more", "To stay healthy", "To eat more", "To watch TV"], correct: 1, explanation: "We exercise to stay healthy and strong!" },
  { id: 310, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "What happens to ice in hot weather?", options: ["It freezes more", "It melts", "It grows", "Nothing"], correct: 1, explanation: "Ice melts in hot weather!" },
  { id: 311, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "Why do we wear sunscreen?", options: ["To get tan", "To protect skin", "To swim better", "To stay warm"], correct: 1, explanation: "Sunscreen protects our skin from the sun!" },
  { id: 312, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "What happens if you drop a glass?", options: ["It flies", "It breaks", "It bounces", "It grows"], correct: 1, explanation: "Glass can break if you drop it!" },
  { id: 313, subject: 'logic', category: 'reasoning', difficulty: 'medium', question: "Why do traffic lights have red?", options: ["It's pretty", "To stop cars", "To go faster", "For fun"], correct: 1, explanation: "Red lights tell cars to stop!" },

  { id: 314, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do birds fly south in winter?", options: ["To find warm weather", "To see friends", "To sleep", "To swim"], correct: 0, explanation: "Birds fly south to find warmer weather!" },
  { id: 315, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do we recycle?", options: ["It's fun", "To help Earth", "To make trash", "To waste time"], correct: 1, explanation: "We recycle to help protect the Earth!" },
  { id: 316, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do boats float on water?", options: ["They're magic", "They're light", "Air inside", "They're small"], correct: 2, explanation: "Boats float because of air inside them!" },
  { id: 317, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do we have seasons?", options: ["Random", "Earth's tilt", "Clouds", "Ocean"], correct: 1, explanation: "Seasons happen because of Earth's tilt!" },
  { id: 318, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do we yawn when tired?", options: ["For fun", "Get more oxygen", "Because bored", "To stretch"], correct: 1, explanation: "We yawn to get more oxygen when tired!" },
  { id: 319, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why do leaves change color in fall?", options: ["Magic", "Less sunlight", "More water", "Wind"], correct: 1, explanation: "Leaves change color when there's less sunlight!" },
  { id: 320, subject: 'logic', category: 'reasoning', difficulty: 'hard', question: "Why does the moon appear to change shape?", options: ["It shrinks", "It grows", "Light from Sun", "Clouds"], correct: 2, explanation: "The moon looks different because of sunlight on it!" },
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
