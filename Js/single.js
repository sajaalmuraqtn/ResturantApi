
const getSingleMenu = async () => {
    const url = window.location.href;

    // Create a URL object
    const urlObject = new URL(url);

    // Create a URLSearchParams object from the query string
    const params = new URLSearchParams(urlObject.search);

    // Get the value of the 'rId' parameter
    const rId = params.get('rId');
    const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${rId}`);
    console.log(data.recipe);


    document.getElementById("about").innerHTML = ` <div class="container">

             <div class="img-about">
                <img src=${data.recipe.image_url} alt=${data.recipe.title}>
            </div>
            <div class="info-about">
                <h2>${data.recipe.title}</h2>
                <h3>${data.recipe.publisher}</h3>
                
                <ul id="ingredients">
               
                  
                </ul>
            </div>
         </div>
    `
    console.log(data.recipe.ingredients[1]);
    
    data.recipe.ingredients.map((item) => {
     document.getElementById("ingredients").innerHTML+=   ` 
       <li>
          <i class="fa-solid fa-check"></i>
          <span>${item }</span>
      </li>`  })
}


getSingleMenu()