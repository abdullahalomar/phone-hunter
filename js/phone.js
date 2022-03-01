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
      
   //search result data
    const displaySearchResult = datas => {
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = '';
        if (datas.length == 0) {
            // code.....
        }
    }