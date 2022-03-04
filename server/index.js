const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);

});

app.listen(4000, () => console.log("Server running on 4000"));




app.get("/api/fortune", (req, res) => {
  const fortunes = ["All your hard work will soon pay off.",
           "A golden egg of opportunity falls into your lap this month.",
           "A light heart carries you through all the hard times.",
           "A hunch is creativity trying to tell you something.",
           "A lifetime of happiness lies ahead of you."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});


app.get("/api/food", (req, res) => {
  const foods = ["Firecracker Shrimp.",
           "California Rolls.",
           "Salmon/Fish.",
           "Lobster.",
           "clams."
  ];

  // choose random food
  let randomIndex = Math.floor(Math.random() * foods.length);
  let randomFood = foods[randomIndex];

  res.status(200).send(randomFood);
  
});

app.get("/api/name", (req, res) => {
  const names = ["Spencer.",
           "Dusty.",
           "Dalton.",
           "Brandon.",
           "Brett."
  ];

  // choose random names
  let randomIndex = Math.floor(Math.random() * names.length);
  let randomName = names[randomIndex];

  res.status(200).send(randomName);
  
});
app.get("/api/movie", (req, res) => {
  const movies = ["Shot Caller.",
           "Spider-Man",
           "Black-Widow",
           "Creed",
           "The Conjuring"
  ];

  // choose random movies
  let randomIndex = Math.floor(Math.random() * movies.length);
  let randomMovie = movies[randomIndex];

  res.status(200).send(randomMovie);
  
});