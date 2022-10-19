var fetchButton = $('#fetch-button');
var userContainer = document.getElementById('#container');
function getApi(){
    var requestUrl = "https://www.loc.gov/?fo=json"
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    for (var i = 0; i < data.length; i++)
    var searchCriteria = document.createElement('h3');
    searchCriteria.textContent = data[i];
    userContainer.append(searchCriteria);

    })
}
fetchButton.on('click', getApi);