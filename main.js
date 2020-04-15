$(document).ready(function() {
var results = $("#results");

$("#getAll").on('click', function () {
    $.get('http://jsonplaceholder.typicode.com/posts', {userId: 1}, function(t){
        console.log(t);
        results.innerHTML = t;
});
})


})
