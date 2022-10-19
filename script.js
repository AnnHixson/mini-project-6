var buttonEl = $('#form');
var dropdownEl = $('#dropdown')
var searchResults = './search-results.html';
var doASearch = function(event) {
    event.preventDefault();
    location.replace(searchResults);
}


buttonEl.on('submit', doASearch);