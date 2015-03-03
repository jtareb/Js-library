
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);

};

/*will refesh the page based on the refresh rate in the html*/





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



/*function to reverse a string*/
function reverse(){
     
    var name= "gixmo"
 
    var Reverse= name.split("").reverse().join("");
};
console.log(reverse);

/*return an array from a function*/
var myArray = [];

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

/*jquery hover to change color of text*/


$(document).ready(function(){
    $("p").hover(function(){
        $("p").css("background-color", "grey");
        
    });
});

/*basic innerHTML example*/




function Msg1(){
  document.getElementById('myText').innerHTML = 'Thanks!';
}
function Msg2(){
  document.getElementById('myText').innerHTML = 'Try message 1 again...';
}
/*html
<input type="button" onclick="Msg1()" value="Show Message 1" />
<input type="button"  onclick="Msg2()" value="Show Message 2" />
<p id="myText"></p>*/

/*simeple function to display text in input field*/



function displayMessage(firstName) {
    alert("Hello " + firstName + ", hope you like JavaScript functions!")
}

/*
<form>
First name:
<input type="input" name="yourName" />
<input
  type="button"
  onclick="displayMessage(form.yourName.value)"
  value="Display Message" />
</form>*/



/*jump menu*/


function jumpto(x){

if (document.form1.jumpmenu.value != "null") {
  document.location.href = x
  }
}

/*
<p>Jump Menu:</p>
<form name="form1">
<select name="jumpmenu" onChange="jumpto(document.form1.jumpmenu.options[document.form1.jumpmenu.options.selectedIndex].value)">
  <option>Jump to...</option>
  <option value=http://www.espn.com>Espn homepage</option>
  <option value=http://www.google.com>google</option>
  <option value=http://www.github>github</option>
  <option value=http://www.weather.gov>Weather info</option>
</selecg>
</form>   

/*image rollover from quackit.com*/

/*<p>Image Rollover:</p>*/


if (document.images) {
  smile = new Image
  nosmile = new Image

  smile.src = "http://www.quackit.com/pix/smile.gif"
  nosmile.src = "http://www.quackit.com/pix/nosmile.gif"
}


function swapImage(thisImage,newImage) {
  if (document.images) {
    document[thisImage].src = eval(newImage + ".src")
  }
}


/*<a href="http://www.quackit.com/javascript/image_rollovers.cfm"
onMouseOver="swapImage('jack','smile')"
onMouseOut="swapImage('jack','nosmile')">
<img src="http://www.quackit.com/pix/nosmile.gif"
  width="100"
  height="100"
  border="0"
  alt="Picture of Jack"
  name="jack">
</a>
<div class="more-info">
<p>More info: <a href="/javascript/image_rollovers.cfm">Image Rollovers</a></p>
</div>*/



//*document.getElementById type*//


