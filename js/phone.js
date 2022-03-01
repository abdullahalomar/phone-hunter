const loadPhone = () => {
    const phoneSearchField = document.getElementById('search-field');
    const searchText = phoneSearchField.value;
    // console.log(searchText);
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
            // console.log(data);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
              <div onclick="loadPhoneDetails(${data.iddata})" class="card h-100"">
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
    const loadPhoneDetails = id => {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(json => displayDetail(json.data))
    
    }
    
    const displayDetail = data => {
        console.log(data);
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';
        const div = document.createElement('div');
        // div.classList.add('card');
        div.innerHTML = `
        <div class="col-md-4">
        <img src="${data.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${data.brand}</h5>
          <p class="card-text">${data}</p>
          <p class="card-text"><small class="text-muted">${data}</small></p>
        </div>
        </div>
         `;
         phoneDetails.appendChild(div);
    }

 