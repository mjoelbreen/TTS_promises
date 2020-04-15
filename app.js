var login = document.getElementById("login");

var submit = document.getElementById("submit");



submit.onclick = function () {
    var username = login.value;
    
    return new Promise(function(resolve,reject) {
        $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){

            
                if (users.length) 
                    resolve(console.log(users[0]));
                
             else 
                reject(console.warn("User not found."));

            
         
    
})
}
    )}
    


