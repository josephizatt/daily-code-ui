var n = 1000;
var scheduler = setTimeout(
    function() {
        console.log('hello')
    }, n
)
scheduler;


var scheduler = function(f,n) {
    setTimeout(f,n);
}

var sayHello = function() {
    console.log("Hello 2");
}

scheduler(sayHello,5000);
