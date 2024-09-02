
const getMenu = async () => { 
    const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
     let items = document.getElementById('items');
     console.log( data.recipes);
     
     data.recipes.map((item,index) => {
        items.innerHTML += `             
           <a href="Single.html?rId=${item.recipe_id}"><button onClick=" getSingleMenu(${item.recipe_id})"  class="item" id=${index}>
                    <div class="inner">

                        <img src=${item.image_url}>

                    </div>
                    <h3>${item.title} </h3>
                    <p>${item.publisher}
                    </p>
                 </button> </a>`;
    }) ;
}


getMenu();