const loadPhone = () => {
    const phoneSearchField = document.getElementById('search-field');
    const searchText = phoneSearchField.value;
    console.log(searchText);
    // clear data
    phoneSearchField.value = '';

    // load data
    if (searchText == '') {
        //code....
    } else {
        
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
        .then(response => response.json())
        .then(json => displaySearchResult(json.data))
    }
}
      
//    Show result on display 
    const displaySearchResult = phones => {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        if (phones.length == 0) {
            // code.....
        }
        phones.forEach( data => {
            console.log(data);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
              <div class="card h-100"">
              <img src="${data.image}" class="card-img-top" alt=" ">
              <div class="card-body">
              <h4 class="card-title">${data.brand}</h4>
              <h6 class="card-text">${data.slug}</h6>
              </div>
              </div>
            `;
            searchResult.appendChild(div);
        })
    }

    // details data
    const loadDetails = id => {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(json => displayMealDetail(json.data[0]))
    
    }
    
    const displayMealDetail = data => {
        console.log(data);
    //     const mealDetails = document.getElementById('meal-details');
    //     mealDetails.textContent = '';
    //     const div = document.createElement('div');
    //     div.classList.add('card');
    //     div.innerHTML = `
    //     <img src="${data.image}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //     <h5 class="card-title">${data.brand}</h5>
    //     <p class="card-text">${data.strInstructions.slice(0, 150)}</p>
    //     <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //     `;
    //     mealDetails.appendChild(div);
    }

 