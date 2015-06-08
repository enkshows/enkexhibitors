$(document).ready(function(){
	Shadowbox.init();

	// dynamically load images for each dropdown section
	$(".booth-images").each(function(){
		$(this).on('change', function(){
			var src = $(this).val();
			var imageSrc = "http://enkshows.com/img/enkexhibitors/";
			var imgTitle = $(this).find(":selected").data("dimension");

			var $this = $(this);
			var $image = $(".image-display");
			var $imageDisplay = $(this).parent().find(".image-display");
			var url = "<a class='sbox' rel='shadowbox' title='" + imgTitle + "' href='" + imageSrc + imgTitle + "FRONT.jpg'><img src='" + src + "'></a>";
			var title = "<p><a rel='shadowbox' href='" + imageSrc + imgTitle + "FRONT.jpg'>" + imgTitle + "</a><p>"

			if ($(this).val() == "" ) {
				$image.removeClass('active');
			} else {
				$image.removeClass('active').hide();
				$imageDisplay.addClass('active').show();
				$this.parent().find(".image-display a").not(":selected").remove();
				$this.parent().find(".image-display p").not(":selected").remove();
				$(url).appendTo($(this).parent().find(".image-display"));
				$(title).appendTo($(this).parent().find(".image-display"));
				Shadowbox.clearCache();
				Shadowbox.setup();
			}
		});
	});

	

	// Hide and display FAQ
	$('.q-a').hide();
	$('.faq-content h3 a ').on('click', function(e){
		e.preventDefault();
		if ($(this).parent().parent().hasClass('active')) {
			$(this).parent().parent().removeClass('active');
			$('.q-a').slideUp();
		} else {

			$('.faq-content h3 a').parent().parent().removeClass('active')
			$('.q-a').slideUp().parent().parent().removeClass('active');
			$(this).parent().parent().addClass('active').find('.q-a').slideDown();
		}
	});
});

