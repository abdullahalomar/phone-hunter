const loadPhone = () => {
    const phoneSearchField = document.getElementById('search-field');
    const phoneSearchText = phoneSearchField.value;
    console.log(phoneSearchText);
    // clear data
    phoneSearchField.value = '';

    // load data
    if (phoneSearchText == '') {
        //code....
    } else {
        
        const url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearchText}`;
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
              <div class="card">
              <img src="${data.image}" class="card-img-top" alt=" ">
              <div class="card-body">
              <h5 class="card-title">${data.brand}</h5>
              <p class="card-text">${data.slug}</p>
              </div>
              </div>
            `;
            searchResult.appendChild(div);
        })
    }

 