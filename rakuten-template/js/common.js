$(function() {
	var activeClass = 'active',
	$target = $('.header_foot');

	function hamburgBtn() {
		$('.hamburger').on('click', function(event) {
			$button = $(this);
			event.preventDefault();


			$button.find('a').toggleClass(activeClass);
			$target.slideToggle(250);
		});
	}
	hamburgBtn();

	function spSearch(){
		$('.header_head_search').on('click',function(){
			$('.header_head_search_body').slideToggle(250);
		});
	};
	spSearch();
});
