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
	$(".popup").hide();
	$(".box").hover(function(){
		 boxHovered = $(this).attr("id");
		 targetedBox = "#" + boxHovered;
		 boxNumber = boxHovered.substr(3,5);
		 selector = "#popup"+boxNumber;
		 $(selector).show();
		 moveBox();
	},function(){
		 $(selector).hide();
	});
	function moveBox(){
		$(targetedBox).bind('mousemove',function(event){
			adjustX = -10;
			adjustY = 0;
			if(targetedBox == "#box1") {
				adjustX = -10;
				adjustY = 0;
			}
			
			var my = event.pageY-$(this).offset().top-adjustY;
			var mx = event.pageX-$(this).offset().left-adjustX;
			$(selector).css({
				"left":mx,
				"top":my
			});
		});}

