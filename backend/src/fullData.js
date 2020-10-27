const cards=[{
  title: "Lettuce be thankful",
  description: "From classic wedge salad to lettuce wraps and more, lettuce is having a moment and this recipe from Remy is wonderfully aromatic with a lemongrass. Let everyone put the lettuce parcels together themselves.",
  image:"salad.png",
  slug: "lettuce-be",
  ingredient: `__Ingredients__
  - 2 tablespoons vinegar
  - 3 tablespoons extra-virgin olive oil
  - a bit of lemongrass
  - salt and ground pepper
  - lettuce, torn into bite-size pieces
  - 2 cups fresh parsley leaves
  
  __Directions__
  1. In a small bowl, whisk together vinegar, olive oil, and lemongrass season with salt and pepper. 
  2. In a large bowl, toss dressing with lettuce and parsley. Serve immediately.`,
  bigImage:"saladBig.png"
},
{
  title: "Are you kiwi-ing me?",
  description: "Start your morning off right with this next-level Kiwi green smoothie from Remy's Kitchen. A celebration of this healthy way to pack fruit and veg into your diet. This showstopping smoothie all-natural, vegan, and gluten-free!",
  image:"kiwi.jpeg",
  slug: "kiwing",
  ingredient: `__Ingredients__
  - 2 small kiwi
  - 2 handful spinach or anything green
  - 1 juice of a big orange or any fruits
  - 1 cup water ice cold
  - 1/2 ripe banana
  
  __Directions__
  1. Put all ingredients in a blender.
  2. Blend for 2 minutes or until smooth.
  3. Pour into a glass and enjoy!`,
  bigImage:"kiwisoup.jpg"
},
{
  title: "Just beet it",
  description: "Check out this Beet Salad takes only 10 minutes to throw together and is packed with sweet, tangy, and salty flavors. It’s a delicious vegetarian, gluten-free side dish!. This recipe is low in calories, a great midweek family meal.",
  image:"beetIt.png",
  slug: "beet-it",
  ingredient: `__Ingredients__
  - 1 tablespoon lemon juice
  - 1/2 teaspoon salt
  - 3 tablespoons extra-virgin olive oil
  - 2 cups beets cut into roughly 
  - 1 avocado halved, and sliced
  - fresh dill roughly chopped
  
  __Directions__
  1. In a small bowl or measuring cup, whisk the lemon juice and salt together. 
  2. Drizzle the extra-virgin olive oil, whisking in order to incorporate all the ingredients completely.
  3. Place the beets in a bowl. Add half the dressing to the bowl and mix together. 
  4. Before serving, add the avocado, and remaining dressing to the bowl and toss together.`,
  bigImage:"beetItBig.jpg"
},
{
  title: "It must have bean love",
  description: "This Bean recipe is both nourishing and tasty! Full of spicy Black Beans, seared Corn, Brown Rice, and other fresh veggies. Easy, wholesome, and delicious. That’s how Remy like it. Make it for an easy midweek dinner in just 20 minutes.",
  image:"bean.jpeg",
  slug: "bean-love",
  ingredient: `__Ingredients__
  - 3/4 quart of goat cheese
  - 3/4 pint of basil
  - 1 1/2 kilograms of blackberries
  - 4 1/2 litres of ricotta
  - 3/4 quart of yeast
  - 5 1/4 kilograms of mixed beans
  - 2 1/4 quarts of rice
  - 4 3/4 mls of oats
  - 3/4 gram of bay leaves
  
  __Directions__
  1. Bring to a simmer while stirring with a whisk.
  2. Mix the first two ingredients in a large bowl.
  3. Drop by tablespoonfuls onto goat cheese sheets.
  4. Cook basil in water bath for 40-50 minutes.
  5. Season with blackberries.`,
  bigImage:"beanBig.jpg"
}]

const about = {
  title: "Welcome to Remy's Kitchen!",
  description: "Let us inspire you through our recipes"
}

const banner = {
  title: "title",
  description: "description",
  image: "banner.jpeg"
}

const footer = {
  image: {
    twitter: "",
    youtube: "",
    instagram: ""
  }
}

const header = {
  title: "Remy's Kitchen",
  nav:[
    "Home",
    "Categories",
    "About"
  ]
}

const logo = "";

module.exports={cards,about,banner, footer, header, logo}