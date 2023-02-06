//grained effect
var options = {
	"animate": true,
	"patternWidth": 370,
	"patternHeight": 370,
	"grainOpacity": 0.095,
	"grainDensity": 1,
	"grainWidth": 1,
	"grainHeight": 1
  }
grained('#contgrain',options)
grained('#loader-wrapper',options)

// loading screen
$(window).on("load",function(){
	const wait = (delay = 0) =>
	new Promise(resolve => setTimeout(resolve, delay));
	wait(2200).then(() => {
		$('#loader-wrapper').fadeOut()
		;});
	document.documentElement.scrollTop = 0;
});


// arrow scroll function
document.addEventListener("scroll", function() {
    const buttonup = document.getElementById("anchoredBtn");
    if (window.pageYOffset > 60) {
      buttonup.classList.add("show");
    }
    if (window.pageYOffset < 60) {
      buttonup.classList.remove("show");
    }
});
let mybutton = document.getElementById("anchoredBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// pop up on boxes 
var boxHovered, boxNumber, selector, targetedBox, adjustX, adjustY;
	$(".popup").hide();//This hides all the pop-ups when page loads
	$(".box").hover(function(){//This executes when you hover ON the box
		 boxHovered = $(this).attr("id");//Gets the id of the box such as "box1", "box2"
		 targetedBox = "#" + boxHovered;//creates a value of "#box1", "#box2", etc for future use
		 boxNumber = boxHovered.substr(3,5);//extracts the # from the id, such as 1, 2, 3
		 selector = "#popup"+boxNumber;//creates a value of "#popup1", "#popup2", etc for future use
		 $(selector).show();//This reveals the popup inside the hovered box
		 moveBox();//This calls on the function below to execute
	},function(){//This executes when you hover OFF the box
		 $(selector).hide();//This hides the popup inside the hovered box
	});
	function moveBox(){
		$(targetedBox).bind('mousemove',function(event){//Executes when the mouse MOVES
			adjustX = -10;//gets the width of the targeted popup
			adjustY = 0;//gets the height of the targeted popup
			if(targetedBox == "#box1") {//example of moving popup relative to mouse
				adjustX = -10;//creates a more unique value
				adjustY = 0;
			}
			//event.pageY or evet.pageX = the mouse position relative to the top left of the targeted box
			var my = event.pageY-$(this).offset().top-adjustY;//my = mouse y position with some adjustment relateive to top of box
			var mx = event.pageX-$(this).offset().left-adjustX; //mx = mouse x position with some adjustment relateive to left of box
			$(selector).css({//set the selected popup box coordinates near the mouse as the mouse moves
				"left":mx,
				"top":my
			});
		});}

