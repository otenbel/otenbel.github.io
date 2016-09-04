$(document).ready(function(){
	//автоизменение размера
	function heightDetect(){
		$(".top-header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	})

	var owl = $("#owl-example");

	owl.owlCarousel({
	  items : 2,
      slideSpeed : 700,
      paginationSpeed : 400,
      singleItem: false,
      theme	: "owl-theme"
	});
	$(".next-button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev-button").click(function() {
		owl.trigger("owl.prev");
	});
});