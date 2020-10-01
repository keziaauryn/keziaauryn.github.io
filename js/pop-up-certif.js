// var imgpopup = document.getElementById('myimgpopup');

// var img = $('.image');
// var imgpopupImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.image').click(function(){
//     imgpopup.style.display = "block";
//     var newSrc = this.src;
//     imgpopupImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   imgpopup.style.display = "none";
// }

// Get the modal
var modal = document.getElementById("myModal");

var img = $('.image');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");

$('.image').click(function(){
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr('src', newSrc);
  captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}