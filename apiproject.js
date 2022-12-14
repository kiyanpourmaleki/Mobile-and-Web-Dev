function searchRecipes() {
	let letter = document.getElementById("searchForRecipes").value;
	
	if (!letter) {
		return;
    }

 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
 .then(res => res.json())
 .then(data => {
    const meals = data.meals;
    
    let recipeContainer = document.getElementById('recipe-container');
    let recipeHTML = "";

for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    if(meal.strSource){
        recipeHTML += `
    <div style="padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 315px;">
        <center>
        <a href="${meal.strSource}" target="_blank"><h2>${meal.strMeal}<h2></a>
            <img src=${meal.strMealThumb} width="300" height="300">
            <h3>${meal.strCategory} - ${meal.strArea}<h3>
            <p>_______________________________________</p>
        </center>
    </div>
`;
    }
    else{recipeHTML += `
    <div style="padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 315px;">
        <center>
            <h2>${meal.strMeal}<h2>
            <img src=${meal.strMealThumb} width="300" height="300">
            <h3>${meal.strCategory} - ${meal.strArea}<h3>
            <p>_______________________________________</p>
        </center>
    </div>
`;}
}
    recipeContainer.innerHTML = recipeHTML

    });
}

function searchDrinks() {
	let letter = document.getElementById("searchForDrinks").value;
	
	if (!letter) {
		return;
    }

 fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res => res.json())
    .then(data => {
        const drinks = data.drinks;

        let drinksContainer = document.getElementById('drinks-container');
        let drinksHTML = "";

    for (let i = 0; i < drinks.length; i++) {
        const drink = drinks[i];
        drinksHTML += `
            <div>
                <center>
                    <h3>${drink.strDrink}<h3>
                    <img src=${drink.strDrinkThumb} width="200" height="200">
                    <h4>${drink.strAlcoholic} - ${drink.strCategory}<h4>
                    <p>________________________________</p>
                </center>
            </div>
        `;
    }
    drinksContainer.innerHTML = drinksHTML;

 });
}
