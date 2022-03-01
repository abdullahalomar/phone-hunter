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
        .then(json => console.log(json.data))
    }
}
      
   // Show result on display 
    const displaySearchResult = datas => {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        if (datas.length == 0) {
            // code.....
        }
        datas.forEach( data => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innnerHtml = `
              <div class="card">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              </div>
            `;
            searchResult.appendChild(div);
        });
    }