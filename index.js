const express = require("express");
const { homedir } = require("os");
const app = express();


const foods = {
  info: {
    name: "Kitchapp.ru",
    open: true,
    description: "Recipe site.",
    image: "pan.jpg"
  },
  recipes: [
    {
      likes: 243,
      eats: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      imageURL: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      username: "ChefAntonio",
      ingredients: "Spaghetti - 200g, Pancetta - 100g, Eggs - 2, Parmesan Cheese - 50g, Black Pepper - to taste"
    },
    {
      likes: 187,
      eats: "Chicken Tikka Masala",
      description: "A flavorful Indian dish with marinated chicken cooked in a creamy tomato sauce.",
      imageURL: "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
      username: "SpiceMaster",
      ingredients: "Chicken Breast - 500g, Yogurt - 100g, Tomato Puree - 200g, Cream - 100ml, Garam Masala - 1 tbsp"
    },
    {
      likes: 315,
      eats: "Avocado Toast",
      description: "A simple yet delicious toast topped with creamy avocado and seasonings.",
      imageURL: "https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg",
      username: "HealthyBites",
      ingredients: "Avocado - 1, Bread Slices - 2, Lemon Juice - 1 tbsp, Chili Flakes - to taste, Salt - to taste"
    },
    {
      likes: 410,
      eats: "Blueberry Pancakes",
      description: "Fluffy pancakes filled with fresh blueberries and topped with syrup.",
      imageURL: "https://www.culinaryhill.com/wp-content/uploads/2023/09/Blueberry-Pancakes-Culinary-Hill-1200x800-1-500x500.jpg",
      username: "BreakfastKing",
      ingredients: "Flour - 1 cup, Milk - 1 cup, Blueberries - 100g, Sugar - 2 tbsp, Baking Powder - 1 tsp"
    },
    {
      likes: 290,
      recipe: "Grilled Salmon",
      description: "Perfectly grilled salmon with a garlic butter glaze.",
      imageURL: "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg",
      username: "SeafoodLover",
      ingredients: "Salmon Fillet - 200g, Olive Oil - 2 tbsp, Garlic - 2 cloves, Lemon Juice - 1 tbsp, Salt - to taste",
      quickDescription: "A healthy and delicious seafood dish."
  },
  {
      likes: 330,
      recipe: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with gooey chocolate chips.",
      imageURL: "https://scientificallysweet.com/wp-content/uploads/2020/11/IMG_5309-brown-butter-chocolate-chip-cookies-feature.jpg",
      username: "BakingQueen",
      ingredients: "Flour - 2 cups, Butter - 100g, Sugar - 1 cup, Chocolate Chips - 200g, Baking Soda - 1 tsp",
      quickDescription: "Soft and chewy cookies filled with chocolate goodness."
  },
  {
      likes: 215,
      recipe: "Caesar Salad",
      description: "A fresh salad with romaine lettuce, croutons, parmesan, and Caesar dressing.",
      imageURL: "https://greenstar.coop/wp-content/uploads/2023/07/NCG_Dennis_Becker_Classic_Caesar_Salad_715_x_477.jpg",
      username: "SaladMaster",
      ingredients: "Romaine Lettuce - 1 head, Croutons - 50g, Parmesan Cheese - 30g, Caesar Dressing - 2 tbsp",
      quickDescription: "A light and refreshing salad with a creamy dressing."
  },
  {
      likes: 375,
      recipe: "Beef Tacos",
      description: "Mexican-style beef tacos served in soft tortillas with fresh toppings.",
      imageURL: "https://kaynutrition.com/wp-content/uploads/2023/08/shredded-beef-tacos.jpg",
      username: "TacoLover",
      ingredients: "Ground Beef - 300g, Tortillas - 4, Onion - 1, Cilantro - to taste, Cheese - to taste",
      quickDescription: "A flavorful and satisfying street-style taco."
  },
  {
      likes: 198,
      recipe: "Mango Smoothie",
      description: "A tropical mango smoothie with a creamy texture.",
      imageURL: "https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg",
      username: "SmoothieQueen",
      ingredients: "Mango - 1, Yogurt - 1 cup, Honey - 1 tbsp, Ice Cubes - 5, Milk - ½ cup",
      quickDescription: "A refreshing and naturally sweet drink."
  },
  {
      likes: 260,
      recipe: "Margherita Pizza",
      description: "A classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      imageURL: "https://kristineskitchenblog.com/wp-content/uploads/2024/07/margherita-pizza-22-2-500x500.jpg",
      username: "PizzaLover",
      ingredients: "Pizza Dough - 1, Tomato Sauce - 100g, Mozzarella Cheese - 150g, Fresh Basil - a few leaves, Olive Oil - 1 tbsp",
      quickDescription: "A simple and delicious pizza with fresh ingredients."
  }
  ]
};



// view engine to ejs


// Set up your folders and move your files into the right place


// Set up static middleware


app.use(express.static(__dirname + "/public"))


app.get("/", (req , res) => {
  res.sendFile(__dirname + "/public")
  });
  
// Set the view engine to EJS


app.set("view engine", "ejs")


// Set up the router for / to send back home.ejs with the info attribute


app.get("/", (req, res) => {
  res.render("home.ejs", foods.info)
});


// Set up the router for /menu to send back menu.ejs with the entire object (so that you can access the array)


app.get("/recipes", (req, res) => {
  res.render("recipes.ejs", foods);
});


app.listen(3000, ()=>{
  console.log("Server started")
});


