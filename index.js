const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const JOKES = [
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  'There are only 10 kinds of people in the world: those who understand binary and those who don\'t.',
  'A SQL query walks into a bar, walks up to two tables and asks, "Can I join you?"',
  'Why do Java developers wear glasses? Because they don\'t C#.',
  'How many programmers does it take to change a light bulb? None, that\'s a hardware problem.',
  'I would tell you a UDP joke, but you might not get it.',
  'Debugging: being the detective in a crime movie where you are also the murderer.',
  'It works on my machine. Then we\'ll ship your machine.',
  'There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.',
  'Why did the developer go broke? Because they used up all their cache.',
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/joke', (req, res) => {
  const joke = JOKES[Math.floor(Math.random() * JOKES.length)];
  res.json({ joke });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
