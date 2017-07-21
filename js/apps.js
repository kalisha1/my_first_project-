//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation
// Add overlay 
   
var$overlay = $ ('<div id="overlay"></div>');
var $image =("<img>");
var $caption = $("<p></p>");
//An image overlay
$overlay.append(image);
// Add overlay 
$("body").append($overlay);
\
    //2.2 A caption

//1. Capture the click event on link to an image
$("#imageGallery img").click(function(event){
    event.preventDefault();
var imageLocation =$(this).attr("href");
//Update overlay with the image link
$image.attr("src",imageLocation);
    //1.1 Show the overlay.
    $overlay.show();

    //1.3 Get child's alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
});

//3.When overlay is clicked
$overlay.click(function(){
    //3.1 Hide the overlay
$overlay.hide();  
});
