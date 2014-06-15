
(function (wideYammer, $, undefined) {
	wideYammer.padding = 100;

	wideYammer.resize = function () {
		/*
		if ($(".three-column-layout").length > 0) {
			if ($(window).width() >= 1080)
			{
				$('.three-column-layout').css('width', $(window).width() - parseInt(wideYammer.padding,10));
				$('#column-two').css('width', $(window).width() - (parseInt(wideYammer.padding,10) + 480) );
			}	
			else {
				$('.three-column-layout').css('width', 980 );
				$('#column-two').css('width', 500 );			
			}
		}		
		else if ($(".column-two-right").length > 0) {
			if ($(window).width() >= 1080) {				
				$('.two-column-layout').css('width', $(window).width() - parseInt(wideYammer.padding,10));
				$('#column-two').css('width', $(window).width()- (parseInt(wideYammer.padding,10)+ 200) );	
				$('.column-two-left').css('width', $(window).width() - (parseInt(wideYammer.padding,10)+ 500) );		
			}	
			else {			
				$('.two-column-layout').css('width', 980 );
				$('#column-two').css('width', 782 );		
				$('.column-two-left').css('width', 500 );			
			}		
		}
		*/

		$('.two-column-layout').css('width', $(window).width() - 100);
		$('.two-column-layout #column-two').css('width', $(window).width() - 400);
		$('#main-column').css('width', $(window).width() - 680);
		$('.column-two-left').css('width', $(window).width() - 680);


	};

}(window.wideYammer = window.wideYammer || {}, jQuery));

/*
chrome.extension.sendRequest({method: "getLocalStorage", key: "paddingSize"}, function(response) {	
	if (response.data && !isNaN(response.data)) {
		wideYammer.padding = response.data;	
	}		
	wideYammer.resize();	
});
*/

wideYammer.padding = 100;
wideYammer.resize();

$(window).resize(function () {	
	if ($(window).width() >= 1024) {
		wideYammer.resize();	
	}	
});

$(document).bind('DOMNodeInserted', function (event) {
      $(".ymodule-instance tbody h6").css('width','100%');
	  $(".ymodule-instance tbody p ").css('width','100%');
	  $(".ymodule-instance tbody p ").css('display','block');
	  $(".ymodule-instance tbody h7 ").css('width','100%');
	  $(".ymodule-instance tbody h7 ").css('display','block');
});

