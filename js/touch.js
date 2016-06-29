// JavaScript Document



	    var description = '如您需要提前“预览”请直接点击上方“预览按钮”。';
		
	    var sendT = {
	        getHeader: function () {
	            var g_title = description;
	            var re = /<[^<>]*?font[^<>]*?>/gi;
	            g_title = g_title.replace(re, "");
	            return g_title;
	        },
	        getFirstImgSrc: function () {
	            var allPageTags = document.getElementsByTagName("div");
	            for (var i = 0; i < allPageTags.length; i++) {
	                if (allPageTags[i].className == 'downtext') {
	                    if (allPageTags[i].getElementsByTagName("img")[0] && allPageTags[i].getElementsByTagName("img")[0].width > 200) {
	                        return allPageTags[i].getElementsByTagName("img")[0].src;
	                    }
	                    else {
	                        return null;
	                    }

	                }
	            }
	        }}


var theme_list_open = false;
$(document).ready(function () {
	function fixHeight() {
		var headerHeight = $("#switcher").height();
		$("#iframe").attr("height", $(window).height()-84 + "px");
	}
	$(window).resize(function () {
		fixHeight();
	}).resize();
	//响应式预览
	$('.icon-monitor').addClass('active');
	$(".icon-mobile-3").click(function () {
		$("#by").css("overflow-y", "auto");
		$('#iframe-wrap').removeClass().addClass('mobile-width-3');
		$('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$(".icon-mobile-2").click(function () {
		$("#by").css("overflow-y", "auto");
		$('#iframe-wrap').removeClass().addClass('mobile-width-2');
		$('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$(".icon-mobile-1").click(function () {
		$("#by").css("overflow-y", "auto");
		$('#iframe-wrap').removeClass().addClass('mobile-width');
		$('.icon-tablet,.icon-mobile,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$(".icon-tablet").click(function () {
		$("#by").css("overflow-y", "auto");
		$('#iframe-wrap').removeClass().addClass('tablet-width');
		$('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$(".icon-monitor").click(function () {
		$("#by").css("overflow-y", "hidden");
		$('#iframe-wrap').removeClass().addClass('full-width');
		$('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});

function Responsive($a) {
	if ($a == true) $("#Device").css("opacity", "100");
	if ($a == false) $("#Device").css("opacity", "0");
	$('#iframe-wrap').removeClass().addClass('full-width');
	$('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
	$(this).addClass('active');
	return false;
};