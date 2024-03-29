// search result error handleing
document.getElementById('button-search').addEventListener('click', () =>{
    reseterrormessage();
    const search = document.getElementById('search-field').value;
    if (search === '') { 
        errormessage('Nothing Enter Valid Text !');
        return false;
    };
    searchPhones(search.toLowerCase());
})

const errormessage = (massage) => {
   const alert =  document.getElementById('alart');
   alert.style.display='block';
   alert.innerText = massage;
}
const reseterrormessage = () => {
   const alert =  document.getElementById('alart');
   alert.style.display='none';
   alert.innerText = '';
}

// load phones 
const loadPhone = () => {
    const phoneSearchField = document.getElementById('search-field');
    const searchText = phoneSearchField.value;
    // clear data
    phoneSearchField.value = '';

    // load data
    if (searchText == '') {
                     
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
            errormessage('Nothing Enter Valid Text !');
            return false;
        }
        else{
            phones.forEach( data => {
                // console.log(data);
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                  <div class="card h-100"">
                  <img src="${data.image}" class="card-img-top" alt=" ">
                  <div class="card-body">
                  <h4 class="card-title">${data.brand}</h4>
                  <h6 class="card-text">${data.phone_name}</h6>
                  <button onClick="loadPhoneDetails('${data.slug}')" type="button" class="btn btn-outline-primary">Details</button>
                  </div>
                  </div>
                `;
                searchResult.appendChild(div);
            })
            reseterrormessage();
        }
    }
   
    // phone details
    const loadPhoneDetails = id => {
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(json => displayDetail(json.data))
    }
    const displayDetail = data => {console.log(data);
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';
        
           const div = document.createElement('div');
           let release = '';
           if(data.releaseDate == ''){
               released =  '<h6 class="text-danger">No release date found</h6>';
           }
           else{
                released =  data.releaseDate;
           }
        // div.classList.add('card');
        div.innerHTML = `
        <div class="col-md-4">
        <img src="${data.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">${data.name}</h4>
          <p class="card-text"><h6 class="text-success">${released}</h6></p>
          <h5 class="card-title">${data.brand}</h5>
          <div class="col table-responsive">
          <table class="table table-striped my-5">
              <tr class="table-primary">
                  <th colspan="2">
                      <h2 class="text-dark">Main features :</h2>
                  </th>
              </tr>
              <tr class="table-secondary">
                  <th>Storage</th>
                  <td class="table-secondary">${data.mainFeatures.storage}</td>
              </tr>
              
              <tr class="table-success">
                  <th>Display Size</th>
                  <td class="table-success">
                      ${data.mainFeatures.displaySize}
                  </td>
              </tr>
              <tr class="table-danger">
                  <th>
                      Chip Set
                  </th>
                  <td class="table-danger">
                      ${data.mainFeatures.chipSet}
                  </td>
              </tr>
              <tr class="table-warning">
                  <th>
                      Memory
                  </th>
                  <td class="table-warning">
                      ${data.mainFeatures.memory}                    
                  </td>
              </tr>
              <tr class="table-info">
                  <th>
                      Sensors
                  </th>
                  <td class="table-info">
                      ${Object.values(data.mainFeatures.sensors).join(', ')}
                  </td>
              </tr>
          </table>
        </div>
        </div>
         `;
         phoneDetails.appendChild(div);
    }

 