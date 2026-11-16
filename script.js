// ==========================================
// SWAD SUTRA - RECIPE DATABASE
// ==========================================

const recipes = [

    // 1. Fluffy Pancakes
    {
        id: "pancakes",
        name: "Fluffy Pancakes",
        category: "Breakfast",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
        description: "Soft and delicious pancakes for breakfast.",
        ingredients: [
            "1 cup flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "3/4 cup milk",
            "1 egg",
            "2 tablespoons butter"
        ],
        steps: [
            "Mix flour, sugar and baking powder.",
            "Add milk, egg and melted butter.",
            "Mix everything until smooth.",
            "Cook small portions in a pan.",
            "Flip and cook the other side.",
            "Serve with fruits or syrup."
        ]
    },

    // 2. Creamy Tomato Pasta
    {
        id: "pasta",
        name: "Creamy Tomato Pasta",
        category: "Lunch",
        time: "25 minutes",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
        description: "Creamy and tasty tomato pasta.",
        ingredients: [
            "200g pasta",
            "1 cup tomato puree",
            "2 garlic cloves",
            "1/4 cup cream",
            "1 tablespoon olive oil",
            "Salt and pepper"
        ],
        steps: [
            "Boil pasta in water until tender, then drain.",
            "Heat oil in a pan.",
            "Add garlic and tomato puree.",
            "Cook for 8 minutes.",
            "Add cream and pasta.",
            "Mix well and serve."
        ]
    },

    // 3. Fresh Rainbow Salad
    {
        id: "salad",
        name: "Fresh Rainbow Salad",
        category: "Lunch",
        time: "15 minutes",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        description: "A fresh and colourful vegetable salad.",
        ingredients: [
            "2 cups lettuce",
            "1 cucumber",
            "1 tomato",
            "1 carrot",
            "2 tablespoons lemon juice",
            "1 tablespoon olive oil"
        ],
        steps: [
            "Wash all vegetables.",
            "Cut cucumber and tomato.",
            "Grate the carrot.",
            "Mix lemon juice and olive oil.",
            "Combine everything and serve."
        ]
    },

    // 4. Vegetable Pizza
    {
        id: "pizza",
        name: "Vegetable Pizza",
        category: "Dinner",
        time: "35 minutes",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        description: "Homemade pizza with cheese and vegetables.",
        ingredients: [
            "1 pizza base",
            "1/3 cup pizza sauce",
            "1/2 cup mozzarella cheese",
            "Capsicum",
            "Onion",
            "Olives"
        ],
        steps: [
            "Preheat oven to 220°C.",
            "Spread pizza sauce on the base.",
            "Add cheese and vegetables.",
            "Bake for 10-15 minutes.",
            "Cut into slices and serve."
        ]
    },

    // 5. Veg Fried Rice
    {
        id: "fried-rice",
        name: "Veg Fried Rice",
        category: "Dinner",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
        description: "Quick and delicious vegetable fried rice.",
        ingredients: [
            "2 cups cooked rice",
            "Mixed vegetables",
            "1 tablespoon oil",
            "1 tablespoon soy sauce",
            "Spring onion",
            "Pepper"
        ],
        steps: [
            "Heat oil in a pan.",
            "Add mixed vegetables and cook until tender.",
            "Add cooked rice.",
            "Add soy sauce and pepper.",
            "Mix well and serve hot."
        ]
    },

    // 6. Chocolate Brownies
    {
        id: "brownies",
        name: "Chocolate Brownies",
        category: "Dessert",
        time: "40 minutes",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        description: "Rich and delicious chocolate brownies.",
        ingredients: [
            "1/2 cup melted butter",
            "3/4 cup sugar",
            "2 eggs",
            "1/3 cup cocoa powder",
            "1/2 cup flour",
            "Vanilla extract"
        ],
        steps: [
            "Preheat oven to 175°C.",
            "Mix butter and sugar.",
            "Add eggs and vanilla.",
            "Add cocoa powder and flour.",
            "Mix everything together.",
            "Bake for 20-25 minutes."
        ]
    },

    // 7. Chicken Biryani
    {
        id: "chicken-biryani",
        name: "Chicken Biryani",
        category: "Indian",
        time: "60 minutes",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
        description: "Aromatic chicken biryani made with basmati rice and Indian spices.",
        ingredients: [
            "500g chicken",
            "2 cups basmati rice",
            "2 onions, sliced",
            "1 cup curd",
            "2 tomatoes, chopped",
            "2 tablespoons biryani masala",
            "1 tablespoon ginger-garlic paste",
            "Mint leaves",
            "Coriander leaves",
            "Salt and oil"
        ],
        steps: [
            "Wash and soak the basmati rice.",
            "Mix chicken with curd, ginger-garlic paste, biryani masala and salt.",
            "Cook the marinated chicken with tomatoes and spices until nearly done.",
            "Boil the rice until it is about three-quarters cooked, then drain.",
            "Layer the rice over the chicken.",
            "Add mint and coriander leaves.",
            "Cover and cook until the chicken and rice are fully cooked.",
            "Serve hot."
        ]
    },

    // 8. Chicken Tikka
    {
        id: "chicken-tikka",
        name: "Chicken Tikka",
        category: "Indian",
        time: "40 minutes",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
        description: "Chicken pieces marinated in curd and flavourful Indian spices.",
        ingredients: [
            "500g boneless chicken",
            "1 cup curd",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon red chilli powder",
            "1 teaspoon garam masala",
            "1 tablespoon lemon juice",
            "Salt",
            "Oil"
        ],
        steps: [
            "Cut the chicken into evenly sized pieces.",
            "Mix curd, ginger-garlic paste and spices.",
            "Add the chicken and coat it with the marinade.",
            "Cover and refrigerate for at least 30 minutes.",
            "Cook in a preheated oven or on a pan until fully cooked.",
            "Serve with mint chutney and lemon."
        ]
    },

    // 9. Butter Chicken Masala
    {
        id: "butter-chicken",
        name: "Butter Chicken Masala",
        category: "Indian",
        time: "45 minutes",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
        description: "A creamy chicken curry with a buttery tomato gravy.",
        ingredients: [
            "500g chicken",
            "3 tomatoes, pureed",
            "1 onion, chopped",
            "2 tablespoons butter",
            "1/2 cup fresh cream",
            "1 tablespoon ginger-garlic paste",
            "1 teaspoon garam masala",
            "1 teaspoon red chilli powder",
            "Salt"
        ],
        steps: [
            "Cook the chicken pieces until fully cooked and set aside.",
            "Heat butter in a pan.",
            "Add onion and ginger-garlic paste.",
            "Add tomato puree and spices.",
            "Cook until the gravy thickens.",
            "Add cream and cooked chicken.",
            "Simmer for a few minutes.",
            "Serve with naan or rice."
        ]
    },

    // 10. Paneer Butter Masala
    {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        category: "Indian",
        time: "35 minutes",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
        description: "Soft paneer cubes in a rich and creamy tomato gravy.",
        ingredients: [
            "250g paneer",
            "3 tomatoes",
            "1 onion",
            "2 tablespoons butter",
            "1/2 cup cream",
            "1 teaspoon garam masala",
            "1 teaspoon ginger-garlic paste",
            "Salt",
            "Kasuri methi"
        ],
        steps: [
            "Cut the paneer into cubes.",
            "Heat butter in a pan.",
            "Add onion and ginger-garlic paste.",
            "Add tomato puree and spices.",
            "Cook the gravy until thick.",
            "Add cream and paneer cubes.",
            "Add crushed kasuri methi.",
            "Serve with naan or roti."
        ]
    },

    // 11. Idli Sambar
    {
        id: "idli-sambar",
        name: "Idli Sambar",
        category: "Indian",
        time: "40 minutes",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
        description: "Soft steamed idlis served with flavourful South Indian sambar.",
        ingredients: [
            "2 cups idli batter",
            "1 cup toor dal",
            "1 onion, chopped",
            "1 tomato, chopped",
            "1/2 cup mixed vegetables",
            "2 tablespoons sambar powder",
            "1/2 teaspoon turmeric powder",
            "1 teaspoon mustard seeds",
            "A few curry leaves",
            "2 tablespoons tamarind pulp",
            "Salt to taste",
            "Oil"
        ],
        steps: [
            "Pour the idli batter into lightly greased idli moulds.",
            "Steam until the idlis are fluffy and fully cooked.",
            "Wash and cook the toor dal until soft, then mash it.",
            "Heat oil in a pan and add mustard seeds and curry leaves.",
            "Add onion, tomato and mixed vegetables; cook until tender.",
            "Add turmeric, sambar powder, tamarind pulp and salt.",
            "Add the cooked dal and enough water to make a sambar consistency.",
            "Simmer until the flavours combine and the vegetables are cooked.",
            "Serve the hot sambar with steamed idlis."
        ]
    },

    // 12. Dal Tadka
    {
        id: "dal-tadka",
        name: "Dal Tadka",
        category: "Indian",
        time: "30 minutes",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
        description: "Comforting yellow lentils finished with a flavourful tadka.",
        ingredients: [
            "1 cup yellow dal",
            "1 onion, chopped",
            "2 tomatoes, chopped",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "2 garlic cloves, chopped",
            "1 tablespoon ghee",
            "Salt",
            "Coriander leaves"
        ],
        steps: [
            "Wash the dal thoroughly.",
            "Cook the dal with turmeric and water until soft.",
            "Heat ghee in a separate pan.",
            "Add cumin, garlic and onions.",
            "Add tomatoes and cook until soft.",
            "Pour the tadka over the cooked dal.",
            "Mix and garnish with coriander."
        ]
    },

    // 13. Masala Dosa
    {
        id: "masala-dosa",
        name: "Masala Dosa",
        category: "Indian",
        time: "35 minutes",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
        description: "Crispy South Indian dosa filled with spiced potato masala.",
        ingredients: [
            "2 cups dosa batter",
            "3 boiled potatoes",
            "1 onion, chopped",
            "1 teaspoon mustard seeds",
            "Curry leaves",
            "Green chillies",
            "Turmeric",
            "Salt",
            "Oil"
        ],
        steps: [
            "Mash the boiled potatoes.",
            "Heat oil and add mustard seeds.",
            "Add onions, curry leaves and green chillies.",
            "Add potatoes, turmeric and salt.",
            "Mix the potato masala.",
            "Spread dosa batter in a thin circle on a hot pan.",
            "Cook until crisp.",
            "Add the potato masala and fold."
        ]
    },

    // 14. Vegetable Pulao
    {
        id: "veg-pulao",
        name: "Vegetable Pulao",
        category: "Indian",
        time: "30 minutes",
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=800",
        description: "Fragrant basmati rice cooked with fresh vegetables and aromatic Indian spices.",
        ingredients: [
            "2 cups basmati rice",
            "1 cup mixed vegetables",
            "1 onion, sliced",
            "1 teaspoon cumin",
            "1 bay leaf",
            "Whole spices",
            "1 teaspoon ginger-garlic paste",
            "Salt to taste",
            "Oil"
        ],
        steps: [
            "Wash and soak the rice.",
            "Heat oil in a pan.",
            "Add cumin and whole spices.",
            "Add onion and ginger-garlic paste.",
            "Add mixed vegetables.",
            "Add rice, water and salt.",
            "Cover and cook until the rice is fully cooked.",
            "Serve hot with raita."
        ]
    },

    // 15. Punjabi Samosa
    {
        id: "samosa",
        name: "Punjabi Samosa",
        category: "Indian",
        time: "45 minutes",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        description: "Crispy pastry filled with a spiced potato and pea mixture.",
        ingredients: [
            "2 cups all-purpose flour",
            "3 boiled potatoes",
            "1 teaspoon cumin",
            "1 teaspoon coriander powder",
            "Green peas",
            "Green chillies",
            "Salt",
            "Oil"
        ],
        steps: [
            "Prepare a firm dough using flour, oil, salt and water.",
            "Mash the boiled potatoes.",
            "Cook potatoes with peas and spices.",
            "Divide dough into small portions.",
            "Roll each portion and shape into a cone.",
            "Add the potato filling.",
            "Seal the edges.",
            "Fry until golden and crispy."
        ]
    },

    // 16. Veg Momos
    {
        id: "veg-momos",
        name: "Veg Momos",
        category: "Chinese",
        time: "35 minutes",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800",
        description: "Steamed dumplings filled with tasty vegetables and served with spicy chutney.",
        ingredients: [
            "1 cup all-purpose flour",
            "1 cup finely chopped cabbage",
            "1/2 cup grated carrot",
            "1/4 cup chopped spring onion",
            "1 teaspoon ginger, finely chopped",
            "1 teaspoon soy sauce",
            "Salt and pepper",
            "Water as needed"
        ],
        steps: [
            "Mix flour, a pinch of salt and water to make a firm dough.",
            "Mix cabbage, carrot, spring onion, ginger, soy sauce, salt and pepper for the filling.",
            "Roll the dough into small thin circles.",
            "Place a little filling in the centre of each circle.",
            "Fold and seal the edges to shape the momos.",
            "Steam for about 10-12 minutes until cooked.",
            "Serve hot with red chutney."
        ]
    },

    // 17. Hakka Noodles
    {
        id: "hakka-noodles",
        name: "Veg Hakka Noodles",
        category: "Chinese",
        time: "25 minutes",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
        description: "Stir-fried noodles tossed with crunchy vegetables and savoury sauces.",
        ingredients: [
            "200g noodles",
            "1/2 cup shredded cabbage",
            "1 carrot, thinly sliced",
            "1 capsicum, thinly sliced",
            "2 spring onions, chopped",
            "1 tablespoon soy sauce",
            "1 teaspoon vinegar",
            "1 teaspoon chilli sauce",
            "1 tablespoon oil",
            "Salt and pepper"
        ],
        steps: [
            "Boil the noodles according to the packet instructions and drain.",
            "Heat oil in a wok or large pan.",
            "Add the vegetables and stir-fry briefly so they remain crisp.",
            "Add soy sauce, vinegar, chilli sauce, salt and pepper.",
            "Add the cooked noodles and toss gently.",
            "Garnish with spring onions and serve hot."
        ]
    },

  // 18. Veg Manchurian
{
    id: "veg-manchurian",
    name: "Veg Manchurian",
    category: "Chinese",
    time: "40 minutes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchurian.jpg",
    description: "Crispy vegetable balls coated in a tangy Indo-Chinese sauce.",
    ingredients: [
        "1 cup grated cabbage",
        "1/2 cup grated carrot",
        "3 tablespoons all-purpose flour",
        "2 tablespoons cornflour",
        "2 garlic cloves, chopped",
        "1 tablespoon soy sauce",
        "1 tablespoon tomato ketchup",
        "1 teaspoon chilli sauce",
        "1/2 cup water",
        "Oil, salt and pepper"
    ],
    steps: [
        "Mix cabbage, carrot, flour, cornflour, salt and pepper.",
        "Shape the mixture into small balls.",
        "Cook the balls in a pan with a little oil until golden and cooked through.",
        "In another pan, heat a little oil and sauté the garlic.",
        "Add soy sauce, ketchup, chilli sauce and water.",
        "Add a little cornflour mixed with water if you want a thicker sauce.",
        "Toss the vegetable balls in the sauce and serve."
    ]
},
// 19. Chilli Paneer
{
    id: "chilli-paneer",
    name: "Chilli Paneer",
    category: "Chinese",
    time: "30 minutes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ChilliPaneer%20HomeMade%20Mumbai.jpg",
    description: "Paneer cubes tossed with capsicum, onion and a spicy Indo-Chinese sauce.",
    ingredients: [
        "250g paneer, cubed",
        "1 capsicum, diced",
        "1 onion, diced",
        "2 garlic cloves, chopped",
        "1 tablespoon soy sauce",
        "1 tablespoon tomato ketchup",
        "1 teaspoon chilli sauce",
        "1 tablespoon cornflour",
        "2 tablespoons water",
        "Oil and spring onion"
    ],
    steps: [
        "Cut the paneer into bite-sized cubes.",
        "Mix cornflour with water to make a smooth slurry.",
        "Heat a little oil and lightly sauté the paneer until golden; set aside.",
        "In the same pan, sauté garlic, onion and capsicum.",
        "Add soy sauce, ketchup and chilli sauce.",
        "Stir in the cornflour slurry and cook until the sauce thickens.",
        "Add paneer and toss gently.",
        "Garnish with spring onion and serve."
    ]
},

   // 20. Vegetable Spring Rolls
{
    id: "spring-rolls",
    name: "Vegetable Spring Rolls",
    category: "Chinese",
    time: "35 minutes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/VegetableSpringRolls.JPG",
    description: "Crispy rolls filled with seasoned cabbage, carrots and other vegetables.",
    ingredients: [
        "8 spring roll wrappers",
        "1 cup shredded cabbage",
        "1 carrot, grated",
        "1/2 capsicum, thinly sliced",
        "2 spring onions, chopped",
        "1 teaspoon soy sauce",
        "1 teaspoon cornflour mixed with water",
        "Salt and pepper",
        "Oil"
    ],
    steps: [
        "Heat a little oil in a pan.",
        "Add cabbage, carrot, capsicum and spring onion.",
        "Stir-fry briefly with soy sauce, salt and pepper, then let the filling cool.",
        "Place filling on each wrapper and fold in the sides.",
        "Roll tightly and seal the edge with cornflour paste.",
        "Bake or shallow-fry until crisp and golden.",
        "Serve with your favourite dipping sauce."
    ]
},

    // 21. Veg Burger
    {
        id: "veg-burger",
        name: "Veg Burger",
        category: "Snacks",
        time: "30 minutes",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800",
        description: "A homemade burger with a crispy vegetable patty, fresh salad and sauce.",
        ingredients: [
            "2 burger buns",
            "2 boiled potatoes",
            "1/4 cup boiled peas",
            "1/4 cup grated carrot",
            "1/2 teaspoon garam masala",
            "2 tablespoons breadcrumbs",
            "Lettuce leaves",
            "Tomato and onion slices",
            "2 tablespoons mayonnaise or burger sauce",
            "Oil, salt and pepper"
        ],
        steps: [
            "Mash the potatoes and mix with peas, carrot, garam masala, salt and pepper.",
            "Shape the mixture into patties and coat with breadcrumbs.",
            "Cook the patties in a lightly oiled pan until golden on both sides.",
            "Slice and lightly toast the burger buns.",
            "Spread sauce on the buns.",
            "Add lettuce, the patty, tomato and onion.",
            "Cover with the top bun and serve."
        ]
    },

    // 22. Cheesy Garlic Bread
    {
        id: "garlic-bread",
        name: "Cheesy Garlic Bread",
        category: "Snacks",
        time: "20 minutes",
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=800",
        description: "Toasted bread topped with garlic butter, herbs and melted cheese.",
        ingredients: [
            "1 baguette or 4 bread slices",
            "3 tablespoons softened butter",
            "3 garlic cloves, finely chopped",
            "1/2 cup grated mozzarella cheese",
            "1 tablespoon chopped coriander",
            "A pinch of chilli flakes",
            "A pinch of salt"
        ],
        steps: [
            "Mix butter, garlic, coriander, chilli flakes and salt.",
            "Spread the garlic butter over the bread.",
            "Sprinkle grated cheese on top.",
            "Toast in a preheated oven or covered pan until the bread is crisp and cheese melts.",
            "Slice and serve warm."
        ]
    },

  // 23. Gulab Jamun
{
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Dessert",
    time: "40 minutes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gulab%20Jamun-3052.jpg",
    description: "Soft, sweet milk-solid dumplings soaked in fragrant sugar syrup.",
    ingredients: [
        "1 cup milk powder",
        "1/4 cup all-purpose flour",
        "2 tablespoons ghee",
        "A few tablespoons milk",
        "1 cup sugar",
        "1 cup water",
        "2 cardamom pods",
        "A few drops of rose water (optional)",
        "Oil or ghee for cooking"
    ],
    steps: [
        "Heat sugar and water with cardamom until the sugar dissolves; keep the syrup warm.",
        "Mix milk powder, flour and ghee.",
        "Add milk a little at a time to make a soft dough; do not knead too much.",
        "Shape the dough into small smooth balls.",
        "With adult help, cook the balls gently in medium-hot oil or ghee until evenly golden.",
        "Place the warm balls in the warm syrup.",
        "Let them soak for at least 20 minutes before serving."
    ]
},
   // 24. Aloo Tikki
{
    id: "aloo-tikki",
    name: "Aloo Tikki",
    category: "Snacks",
    time: "25 minutes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ALOO%20TIKKI.JPG",
    description: "Crispy potato patties seasoned with simple Indian spices.",
    ingredients: [
        "3 boiled potatoes",
        "2 tablespoons breadcrumbs",
        "1/2 teaspoon cumin powder",
        "1/2 teaspoon coriander powder",
        "1/4 teaspoon chilli powder",
        "2 tablespoons chopped coriander",
        "Salt to taste",
        "Oil for shallow cooking"
    ],
    steps: [
        "Mash the boiled potatoes until smooth.",
        "Mix in breadcrumbs, spices, coriander and salt.",
        "Shape the mixture into flat round patties.",
        "Heat a little oil in a pan.",
        "Cook the patties on both sides until crisp and golden.",
        "Serve with mint chutney or tomato ketchup."
    ]
},
];


// ==========================================
// CREATE RECIPE CARDS
// ==========================================

function createCard(recipe) {

    return `
        <div class="recipe-card">

            <a href="recipe.html?id=${encodeURIComponent(recipe.id)}">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/800x500?text=Image+Not+Available';"
                >

                <div class="card-body">

                    <span class="meta">${recipe.category}</span>

                    <h3>${recipe.name}</h3>

                    <p>${recipe.description}</p>

                    <span class="meta">⏱ ${recipe.time}</span>

                </div>

            </a>

        </div>
    `;
}


// ==========================================
// HOME PAGE FEATURED RECIPES
// ==========================================

const featured = document.getElementById("featured-recipes");

if (featured) {

    featured.innerHTML = recipes
        .slice(0, 3)
        .map(createCard)
        .join("");

}


// ==========================================
// ALL RECIPES PAGE
// SEARCH AND CATEGORY FILTER
// ==========================================

const allRecipes = document.getElementById("all-recipes");

function displayRecipes() {

    if (!allRecipes) return;

    const searchInput = document.getElementById("recipe-search");

    const categoryFilter = document.getElementById("category-filter");

    const noResults = document.getElementById("no-results");

    const search = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const category = categoryFilter
        ? categoryFilter.value
        : "All";

    const filtered = recipes.filter(recipe => {

        const matchesSearch =
            recipe.name.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search) ||
            recipe.category.toLowerCase().includes(search);

        const matchesCategory =
            category === "All" ||
            recipe.category === category;

        return matchesSearch && matchesCategory;

    });

    allRecipes.innerHTML = filtered
        .map(createCard)
        .join("");

    if (noResults) {
        noResults.hidden = filtered.length !== 0;
    }

}


if (allRecipes) {

    displayRecipes();

    const searchInput = document.getElementById("recipe-search");

    const categoryFilter = document.getElementById("category-filter");

    if (searchInput) {
        searchInput.addEventListener("input", displayRecipes);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener("change", displayRecipes);
    }

}


// ==========================================
// INDIVIDUAL RECIPE DETAILS PAGE
// ==========================================

const recipeDetail = document.getElementById("recipe-detail");

if (recipeDetail) {

    const params = new URLSearchParams(window.location.search);

    const recipeId = params.get("id");

    const recipe = recipes.find(item => item.id === recipeId);

    if (recipe) {

        document.title = `${recipe.name} | Swad Sutra`;

        recipeDetail.innerHTML = `

            <div class="detail-content">

                <h1>${recipe.name}</h1>

                <p class="meta">
                    ${recipe.category} | ${recipe.time}
                </p>

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    class="detail-image"
                    onerror="this.onerror=null; this.src='https://placehold.co/800x500?text=Image+Not+Available';"
                >

                <p>${recipe.description}</p>

                <h2>Ingredients</h2>

                <ul>
                    ${recipe.ingredients.map(item =>
                        `<li>${item}</li>`
                    ).join("")}
                </ul>

                <h2>Cooking Instructions</h2>

                <ol>
                    ${recipe.steps.map(step =>
                        `<li>${step}</li>`
                    ).join("")}
                </ol>

                <br>

                <a href="recipes.html" class="btn">
                    Back to Recipes
                </a>

            </div>

        `;

    } else {

        recipeDetail.innerHTML = `

            <h1>Recipe Not Found!</h1>

            <a href="recipes.html" class="btn">
                Back to Recipes
            </a>

        `;

    }

}


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm.elements.name.value.trim();

        alert(
            "Thank you " + name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}