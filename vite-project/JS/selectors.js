const DOMSelectors = {
  spacing: document.querySelector(".spacing"),
  card: document.querySelector(".card"),
};
const recipes = [
  {
    name: "Spaghetti Carbonara",
    image: "/img1.jpg",
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "parmesan",
      "black pepper",
      "garlic",
    ],
    genre: "Italian",
    steps: [
      "Cook spaghetti in salted boiling water until al dente.",
      "While pasta cooks, fry pancetta in a pan until crispy.",
      "In a separate bowl, whisk eggs with grated parmesan and black pepper.",
      "Drain pasta, reserving some cooking water.",
      "Add pasta to the pancetta, then mix in the egg mixture quickly to create a creamy sauce.",
      "Serve with additional parmesan and black pepper.",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    image: "/img2.jpg",
    ingredients: [
      "chicken",
      "yogurt",
      "tomato sauce",
      "onions",
      "garlic",
      "spices",
    ],
    genre: "Indian",
    steps: [
      "Marinate chicken in yogurt, garlic, ginger, and spices for at least 1 hour.",
      "Cook marinated chicken in a hot pan until browned and cooked through.",
      "In a separate pan, sauté onions, garlic, and ginger until soft.",
      "Add tomato sauce and spices, and simmer to make the curry sauce.",
      "Add the chicken to the sauce and cook for 10-15 minutes.",
      "Serve with rice or naan bread.",
    ],
  },
  {
    name: "Caesar Salad",
    image: "/img3.jpg",
    ingredients: ["romaine lettuce", "parmesan", "croutons", "Caesar dressing"],
    genre: "American",
    steps: [
      "Chop the romaine lettuce and place in a large bowl.",
      "Add croutons and grated parmesan cheese.",
      "Toss with Caesar dressing until evenly coated.",
      "Serve immediately as a side or main dish.",
    ],
  },
  {
    name: "Sushi Rolls",
    image: "/img4.jpg",
    ingredients: [
      "sushi rice",
      "nori",
      "salmon",
      "avocado",
      "cucumber",
      "soy sauce",
    ],
    genre: "Japanese",
    steps: [
      "Cook sushi rice and allow it to cool.",
      "Place a sheet of nori on a bamboo mat.",
      "Spread a thin layer of rice on the nori, leaving a border at the top.",
      "Place thin slices of salmon, avocado, and cucumber in the center.",
      "Roll the sushi tightly with the bamboo mat.",
      "Cut into slices and serve with soy sauce.",
    ],
  },
  {
    name: "Tacos",
    image: "/img5.jpg",
    ingredients: [
      "taco shells",
      "ground beef",
      "lettuce",
      "cheese",
      "tomato",
      "sour cream",
    ],
    genre: "Mexican",
    steps: [
      "Cook ground beef with taco seasoning until browned.",
      "Warm taco shells in the oven or microwave.",
      "Chop lettuce and tomatoes.",
      "Assemble tacos by adding beef, lettuce, tomato, cheese, and sour cream.",
      "Serve immediately.",
    ],
  },
  {
    name: "Beef Wellington",
    image: "/img6.jpg",
    ingredients: [
      "beef tenderloin",
      "puff pastry",
      "mushrooms",
      "prosciutto",
      "egg",
    ],
    genre: "British",
    steps: [
      "Sear the beef tenderloin in a hot pan, then cool it.",
      "Chop mushrooms and cook them until the moisture evaporates.",
      "Wrap the beef in prosciutto, followed by the mushroom mixture.",
      "Roll the beef in puff pastry and seal the edges.",
      "Brush with egg wash and bake until golden brown and cooked to your liking.",
      "Rest before slicing and serving.",
    ],
  },
  {
    name: "Lasagna",
    image: "/img7.jpg",
    ingredients: [
      "lasagna noodles",
      "ground beef",
      "ricotta",
      "mozzarella",
      "tomato sauce",
    ],
    genre: "Italian",
    steps: [
      "Cook lasagna noodles according to package directions.",
      "Brown ground beef and mix with tomato sauce.",
      "Layer lasagna in a baking dish: start with sauce, then noodles, ricotta, mozzarella, and repeat.",
      "Top with mozzarella and bake until bubbly and golden.",
      "Allow to cool slightly before serving.",
    ],
  },
  {
    name: "Ramen",
    image: "/img8.jpg",
    ingredients: ["ramen noodles", "pork", "egg", "broth", "scallions", "nori"],
    genre: "Japanese",
    steps: [
      "Cook ramen noodles according to package directions.",
      "Prepare the broth by simmering pork bones or using pre-made broth.",
      "Fry pork slices until crispy or brown.",
      "Boil eggs to a soft-boiled consistency.",
      "Assemble the ramen by placing noodles in a bowl, pouring broth over, and adding pork, eggs, scallions, and nori.",
    ],
  },
  {
    name: "Vegetable Stir Fry",
    image: "/img9.jpg",
    ingredients: [
      "broccoli",
      "carrot",
      "bell pepper",
      "soy sauce",
      "garlic",
      "ginger",
    ],
    genre: "Chinese",
    steps: [
      "Chop vegetables into bite-sized pieces.",
      "Stir-fry garlic and ginger in hot oil until fragrant.",
      "Add vegetables and stir-fry until tender-crisp.",
      "Add soy sauce and stir to combine.",
      "Serve with rice or noodles.",
    ],
  },
  {
    name: "Chicken Alfredo",
    image: "/img10.jpg",
    ingredients: [
      "fettuccine",
      "chicken breast",
      "heavy cream",
      "parmesan",
      "garlic",
      "butter",
    ],
    genre: "Italian",
    steps: [
      "Cook fettuccine pasta in salted boiling water.",
      "Sauté chicken breast in a pan until browned and cooked through.",
      "In the same pan, melt butter, add garlic, and sauté until fragrant.",
      "Pour in heavy cream and cook until thickened.",
      "Add parmesan cheese and stir until smooth.",
      "Toss pasta in the sauce and serve.",
    ],
  },
  {
    name: "Falafel",
    image: "/img11.jpg",
    ingredients: [
      "chickpeas",
      "garlic",
      "parsley",
      "onions",
      "cumin",
      "coriander",
    ],
    genre: "Middle Eastern",
    steps: [
      "Soak chickpeas overnight and drain.",
      "Blend chickpeas with garlic, onions, parsley, cumin, and coriander.",
      "Shape the mixture into balls or patties.",
      "Fry in hot oil until golden brown and crispy.",
      "Serve with pita and tahini sauce.",
    ],
  },
  {
    name: "Eggplant Parmesan",
    image: "/img12.jpg",
    ingredients: [
      "eggplant",
      "tomato sauce",
      "mozzarella",
      "parmesan",
      "bread crumbs",
    ],
    genre: "Italian",
    steps: [
      "Slice eggplant and dip in beaten eggs, then breadcrumbs.",
      "Fry slices until golden brown.",
      "Layer eggplant with tomato sauce, mozzarella, and parmesan in a baking dish.",
      "Bake until the cheese is melted and bubbly.",
      "Serve with pasta or on its own.",
    ],
  },
  {
    name: "Banh Mi",
    image: "/img13.jpg",
    ingredients: [
      "baguette",
      "pork",
      "pickled vegetables",
      "cilantro",
      "jalapenos",
      "mayonnaise",
    ],
    genre: "Vietnamese",
    steps: [
      "Grill or pan-fry pork slices.",
      "Toast the baguette lightly.",
      "Spread mayonnaise on the inside of the baguette.",
      "Add the pork, pickled vegetables, cilantro, and sliced jalapenos.",
      "Serve immediately.",
    ],
  },
  {
    name: "Peking Duck",
    image: "/img14.jpg",
    ingredients: ["duck", "hoisin sauce", "pancakes", "scallions", "cucumber"],
    genre: "Chinese",
    steps: [
      "Roast the duck until the skin is crispy and the meat is tender.",
      "Slice the duck into thin pieces.",
      "Serve with hoisin sauce, pancakes, sliced cucumber, and scallions.",
      "Assemble the pancakes with duck, hoisin sauce, and vegetables, then roll up and enjoy.",
    ],
  },
  {
    name: "Pad Thai",
    image: "/img15.jpg",
    ingredients: ["rice noodles", "shrimp", "tofu", "peanuts", "lime", "egg"],
    genre: "Thai",
    steps: [
      "Soak rice noodles in warm water until softened.",
      "Stir-fry shrimp and tofu until cooked through.",
      "Push to one side of the pan and scramble an egg in the same pan.",
      "Add the noodles, peanuts, lime juice, and pad thai sauce.",
      "Toss to combine and serve with extra peanuts and lime wedges.",
    ],
  },
  {
    name: "Moussaka",
    image: "/img16.jpg",
    ingredients: [
      "eggplant",
      "ground lamb",
      "tomato",
      "bechamel sauce",
      "cheese",
    ],
    genre: "Greek",
    steps: [
      "Fry eggplant slices until golden and set aside.",
      "Brown ground lamb and add tomato sauce and seasoning.",
      "Layer eggplant, lamb mixture, and bechamel sauce in a baking dish.",
      "Top with cheese and bake until golden and bubbling.",
      "Let it cool slightly before serving.",
    ],
  },
  {
    name: "Shakshuka",
    image: "/img17.jpg",
    ingredients: ["eggs", "tomatoes", "onions", "peppers", "garlic", "spices"],
    genre: "Middle Eastern",
    steps: [
      "Sauté onions, peppers, and garlic in olive oil until soft.",
      "Add tomatoes and spices, simmering to create a thick sauce.",
      "Make wells in the sauce and crack eggs into them.",
      "Cover and cook until the eggs are set.",
      "Serve with pita bread.",
    ],
  },
  {
    name: "Paella",
    image: "/img18.jpg",
    ingredients: [
      "rice",
      "seafood",
      "chicken",
      "saffron",
      "peas",
      "bell peppers",
    ],
    genre: "Spanish",
    steps: [
      "Sauté chicken and seafood in olive oil until cooked.",
      "Add rice, saffron, and chicken broth, stirring to combine.",
      "Simmer until the rice is tender and the liquid is absorbed.",
      "Garnish with peas and bell peppers, then serve.",
    ],
  },
  {
    name: "Chicken Parmesan",
    image: "/img19.jpg",
    ingredients: [
      "chicken breast",
      "tomato sauce",
      "mozzarella",
      "parmesan",
      "spaghetti",
    ],
    genre: "Italian",
    steps: [
      "Bread and fry the chicken breasts until golden.",
      "Top with tomato sauce, mozzarella, and parmesan.",
      "Bake until the cheese melts.",
      "Serve with spaghetti.",
    ],
  },
  {
    name: "Pasta Primavera",
    image: "/img20.jpg",
    ingredients: [
      "pasta",
      "tomatoes",
      "zucchini",
      "bell peppers",
      "parmesan",
      "garlic",
    ],
    genre: "Italian",
    steps: [
      "Cook pasta in boiling water until al dente.",
      "Sauté garlic and vegetables in olive oil until tender.",
      "Toss pasta with the vegetables and parmesan.",
      "Serve immediately.",
    ],
  },
];

export { DOMSelectors };
export { recipes };
