link JS Basic

exercise - 1; 

var today  = new Date();

var day = today.getDay();

var daylist = ["Sun", "Mon",'day", "Tue','Wed', 'Thu', 'Fri', 'Sat'];

console.log("Today is :" + daylist[day]);


var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? "PM": "AM" ;

if (hour === 0 && prepand === "PM"){

    if (minute === 0 && second === 0){
        hour = 12;
        prepand = "Noon";
    } else{

        hour = 12;
        prepand = "PM";

    }
}

if(hour === 0 && prepand === "AM"){
    if( minute === 0 && second === 0){
        hour = 12;
        prepand = "Midnight";

    } else{
        hour = 12;
        prepand = "AM"
    }
}

console.log("Current time:  " +  hour + ":" + minute + ":" + second + " " + prepand );




exercise - 39

function sortSum(x , y){

    const sum = x + y;

    if (sum >= 50 && sum <= 80){
        return 65;
    }
    return 80;
}

console.log(sortSum(69,39));
console.log(sortSum(24,38));




exercise - 40;

function check(x , y){
    if (x === 8 || y === 8){

        return true;
        
    } 
    
    if(x + y === 8 || x - y === 8){

        return true;

    } 
    return false;
}

console.log(check(8 , 16))

console.log(check(16 , 8))

console.log(check(24 , 16))

console.log(check(32 , 16))




link array

exercise - 5

const arr  = ["red","green","yellow", "blue","grey"];


console.log(arr.toString());

console.log(arr.join(" + "));



exercise - 32

function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [3,5,7,11];
console.log(contains(arr, 6));


exercise - 35

function random (items) {
    return items [Math.floor(Math.random() * items.length)]

}

var items = [265 , 555 , 8 , 76 , 9 ]

console.log(random(items))




link Math

exercise - 18

function product(array){
    var total = 1

    for(let i = 1 ; i < array.length; i ++) {
        total *= array[i]
    }

    return total
}

console.log(product([123 , 23 , 55 ]));




exercise - 15

function int(num){

    if(typeof num !== 'number')
        return false;


        return !isNaN(num) &&  parseInt(Number(num)) == num &&  !isNaN(parseInt(num, 10));


    
}

console.log(int(26.75));
console.log(int(26));
console.log(int(-26.75));




exercise - 40

function random_color(){
    var x = Math.floor(Math.random() * 256)

    var y = Math.floor(Math.random() * 256)

    var z = Math.floor(Math.random() * 256)

    var Color = "rgb( " + x + " " + y + " " + z + " )"

    console.log(Color);

    document.body.style.backgroundColor = Color
    
}

random_color()




link String

exercise - 8
umumi cumlenin boyuk herflerle yazilmasi
function toUppercase(){
    var string = "my name is Ravan"

    console.log(string.toUpperCase());
}
toUppercase()

cumlenin ilk herfinin boyuk herfle yazilmasi
function toUppercase(){
    var string = "my name is Ravan"

    console.log(string[0].toUpperCase() + string.slice(1 , 16));
}
toUppercase()


exercise - 21

function repeating (string , count) {

    if(string == null || count === null || count < 0 || count === Infinity){
        return ("please enter truthy statement")
    }
    count = count | 0;
    return new Array(count + 1).join(string)

}

console.log(repeating("Ravan  ",5));

console.log(repeating("Ravan  ", - 8));

console.log(repeating("Ravan"));

console.log(repeating("Ravan  ",Infinity));


exercise - 26

function remove(string, searchstring) {

    var index = string.indexOf(searchstring);

	return string.slice(0, index) + string.slice(index + searchstring.length);
}

console.log(remove("I can not be Superman", 'not'));


link functions

exercise - 10

function matrix(n) {
    var i ;
    var j ;

    for(i = 0; i < n; i++) {
        for(j = 0; j < n; j++) {
            
            if(i === j) {

                console.log("1")

            } else{

                console.log("0");

            }
        }
        console.log("-----------------");
        
    }

}

matrix(5)



exercise - 5

function uppercase(string) {
    var array1 = string.split(" ");

    var newarray1 = [];

    for( var x = 0 ; x < array1.length ; x ++ ) {
        newarray1.push( array1[x].charAt(0).toUpperCase() + array1[x].slice(1))

    }
    return newarray1.join(' ');
    }

console.log(uppercase("i will be most powerfull"));















