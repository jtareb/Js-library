/*Basic functions*/


/*page reloader*/


function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);

};

/*will refesh the page based on the refresh rate in the html*/




container = $('.contentbox');

array_items.results.forEach( function (item)	{

maincontent = '<div class="item">';
maincontent += '<img src="' + item.Images[0].url_170x135 + '"/>'; 
maincontent += '<h4>' + item.title + '</h4>';
maincontent += '<div class= info>';
maincontent += '<p class="contentshop">' + item.Shop.shop_name + '</p>';
maincontent += '<p class="money">$' + item.price + item.currency_code + '</p>';
maincontent += '</div></div>';


	




container.append(maincontent);

from homework

will read an array and return the contents to browser using the append functions

/*simple addition*/
var x;
var y;


 function add(x, y){
   return x + y;
 }


/*adding a series of numbers*/

	function add() {
      var total = 0;
       for (var i = 0; i < arguments.length; i++){
       total += parseFloat( arguments[i] );
      }
     return total;
    }

add any number of arguments to the add function.
	
	functon add(1,2,3,4,5) {
		var total =0;
		for (var i = 0; i < arguemnts.length; i++){
		total += parsefloat( arguemnts[i] );
		}
	return total;
	}


/*function to reverse a string*/
function reverse(){
     
    var name= "gixmo"
 
    var Reverse= name.split("").reverse().join("");
};
console.log(reverse);

/*return an array from a function*/
function makeArray() {
        var myArray = new Array(4);
        myArray[0] = "A";
        myArray[1] = "B";
        myArray[2] = "C";
        myArray[3] = "D";
        return myArray;
   }
   console.log(myArray);
   function showArray(theArray){
        var quote = "";
        for (var i = 0; i < theArray.length; i++){
            quote += theArray[i] + " ";
        }
        return quote;    
   }
  console.log(quote);

/*will make an array of 4 objects*/

/*function to give alert message*/

function showAlert() {
  var state = "Georgia";
  var city = "Atlanta";
  alert('The city of ' + city + ' is located in ' + state + '.');
}

/*give the current date*/



  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()
  document.write("<b>" + day + "/" + month + "/" + year + "</b>")


/*give the current time*/


  
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()

  if (minutes < 10)
  minutes = "0" + minutes

  var suffix = "AM";
  if (hours >= 12) {
  suffix = "PM";
  hours = hours - 12;
  }
  if (hours == 0) {
  hours = 12;
  }

  document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>")

/*redirecting to a webpage*/



function redirectTo(sUrl) {
window.location = sUrl
}


/*<button onclick="redirectTo('http://www.html.am')">Get HTML!</button>*/

/*if statement*/

<script type="text/javascript">

function analyzeColor(myColor) {
  if (myColor == "Blue") {
      alert("Just like the sky!");
  }
}

/*<h3>Favorite Color</h3>
<input type="radio" name="fav_color1" value="Blue" onclick="analyzeColor1(this.value);" /> Blue <br />
<input type="radio" name="fav_color1" value="Red" onclick="analyzeColor1(this.value);" /> Red <br />
<input type="radio" name="fav_color1" value="Green" onclick="analyzeColor1(this.value);" /> Green <br />*/

/*if and else statments*/




function analyzeColor(myColor) {
  if (myColor == "Blue") {
    alert("Just like the sky!");
    }
  else if (myColor == "Red") {
    alert("Just like Hawks unis!");
  }
  else {
    alert("Suit yourself then...");
  }
}


/*<h3>Favorite Color</h3>
<input type="radio" name="fav_color3" value="Blue" onclick="analyzeColor3(this.value);" /> Blue <br />
<input type="radio" name="fav_color3" value="Red" onclick="analyzeColor3(this.value);" /> Red <br />
<input type="radio" name="fav_color3" value="Green" onclick="analyzeColor3(this.value);" /> Green <br />
<input type="radio" name="fav_color3" value="None" onclick="analyzeColor3(this.value);" /> None*/




