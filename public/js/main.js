// slider
$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
})
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
// Modal
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

// <script>
//    $(document).ready(function () {
//        $('.slider').slider({full_width: true});
//    });
// </script>