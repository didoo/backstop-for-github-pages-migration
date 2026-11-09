
/*//////////////////////////// DOMREADY ////////////////////////////
_______________________________________________________________________________________________________ */

$(function (){

	/* ==== CHECK FOR SVG SUPPORT ==== */
	if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
		document.getElement('body').addClass('no_svg');
	}

	/* ==== HEADER > MENU ==== */
	$('#menu-header-menu li.menu-item a').each(function(i,el) {
		$(el).append('<span/>');
	});

	/* ==== RESPONSIVE VIDEOS ==== */
    $('article > section .wysiwyg').fitVids({ customSelector: "iframe[src*='slideshare.net'], iframe[src*='speakerdeck.com']"});

	/* ==== BLOG > INDEX ==== */
	if($('#pageBlog').length) {

		var $archive_list = $('#blog_archive').find(' > ul'),
			$more_link = $('#blog_archive_more a'),
			posts_per_page = $archive_list.find('li').length + 1,
			posts_offset = posts_per_page;

		// handle the "load more" click event
		$more_link.on('click',function() {

			$more_link.addClass('loading');

			// make the ajax call
			$.ajax({
				//url: >> ajax script -- same page
				type: 'POST',
				data: {
					'mode': 'ajax',
					'offset': posts_offset
				},
				cache: false,
				success: function(response) {
					
					// add the new posts to the archive list
					$archive_list.append(response);
					
					// check if the response contained less posts than requested (we reached the end of archive!)
					if(($archive_list.find('li').length  + 1 ) < (posts_offset + posts_per_page)) {
						// hide the "load more" button
						$more_link.hide();
					} else {
						// increment the current offset
						posts_offset += posts_per_page;
					}
	
				},
				error: function() {
				},
				complete: function() {
					$more_link.removeClass('loading');
				}
			});

			// disable click
			return false;
			
		});

	}

	/* ==== ABOUT ==== */
	/*
	if(document.getElement('#pageAbout')) {

		var more_link = document.getElement('#about_author_more a');
		var extra_tldr = document.getElement('#about_extra_tldr');
		var extra_text = document.getElement('#about_extra_text');

		// handle the "load more" click event
		more_link.on('click',function(e) {

			// disable click
			e.stop();
			
			// hide toggler
			more_link.setStyle('display','none');
			//document.getElement('#about_author_more').dispose();

			// show extra content
			//more_fx.show(),
			about_extra_tldr.addClass('visible');
			about_extra_text.addClass('visible');
			
		});

	}
	*/

});