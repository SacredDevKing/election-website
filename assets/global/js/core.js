//----------------------------------
// PRELOADER
//----------------------------------
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(250).css({'overflow':'visible'});
})
//]]>


jQuery(document).ready(function($) {	
	
	'use strict';
	
	//----------------------------------
	// ACTIVE MENU ON WINDOW LOCATION
	//----------------------------------
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $("ul.sidebar-accordion li a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
		{
			$(this).addClass(" active");
			$(this).parent().parent().css("display","block");
			$(this).parent().parent().parent().addClass(" active");
		}
    })
	
	//----------------------------------
	// HEIGHT CALCULATION
	//----------------------------------
	var docHeight = $(window).height();
	var footerHeight = $('.footer-container').height()+92;
	var sidebarHeight = $('.main-container').height();
	var messagedetail = $('.main-container').height();	
	
	//----------------------------------
	// Secondary sidebar
	//----------------------------------
	$(".sidebar-content").slimscroll({		
		size: '4px',
		color: 'rgba(0,0,0,.6)',
		distance: '0px',
		railVisible: true,
		railColor: 'rgba(255,255,255,.1)',
		railOpacity: 1,
		wheelStep: 20,
		borderRadius: '3px',
		railBorderRadius: '0px',
		allowPageScroll: false,
		opacity: 0
		}).mouseover(function() {
		$(this).next('.slimScrollBar').css('opacity', 0.4);
	});
	
	$(window).resize(function() {
        if($(window).width() < 769) {
            $(".sidebar-content").slimscroll({
				height:'100%',  
				width:'100%'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
		else if(($(window).width() > 1023) && ($(window).width() < 1025)){
			$(".sidebar-content").slimscroll({
				height:docHeight - 125,  
				width:'190px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else if(($(window).width() > 1919) && ($(window).width() <= 1920)){
			$(".sidebar-content").slimscroll({
				height:docHeight - 125,  
				width:'415px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else {
            $(".sidebar-content").slimscroll({
				height: docHeight - 125,  
				width:'270px'				
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
    }).resize();
	
	//----------------------------------
	// People details
	//----------------------------------
	$(".people-container").slimscroll({		
		size: '4px',
		color: 'rgba(0,0,0,.6)',
		distance: '0px',
		railVisible: false,
		railColor: 'rgba(255,255,255,.1)',
		railOpacity: .3,
		wheelStep: 20,
		borderRadius: '3px',
		railBorderRadius: '0px',
		allowPageScroll: false,
		opacity: 0
		}).mouseover(function() {
		$(this).next('.slimScrollBar').css('opacity', 0.4);
	});
	
	$(window).resize(function() {        
        if($(window).width() < 769) {
            $(".people-container").slimscroll({
				height: '100%',  
				width:'100%'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
		else if(($(window).width() > 1023) && ($(window).width() < 1025)){
			$(".people-container").slimscroll({
				height: docHeight - 125,  
				width:'430px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else if(($(window).width() > 1919) && ($(window).width() <= 1920)){
			$(".people-container").slimscroll({
				height: docHeight - 125,  
				width:'950px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}		
		else {
            $(".people-container").slimscroll({
				height: docHeight - 115,  
				width:'630px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
    }).resize();
	
	//----------------------------------
	// Message details
	//----------------------------------
	$(".message-container").slimscroll({
		size: '4px',
		color: 'rgba(0,0,0,.6)',
		distance: '0px',
		railVisible: false,
		railColor: 'rgba(255,255,255,.1)',
		railOpacity: .3,
		wheelStep: 20,
		borderRadius: '3px',
		railBorderRadius: '0px',
		allowPageScroll: false,
		opacity: 0
		}).mouseover(function() {
		$(this).next('.slimScrollBar').css('opacity', 0.4);
	});
	
	$(window).resize(function() {        
        if($(window).width() < 769) {
            $(".message-container").slimscroll({
				height:'100%',  
				width:'100%'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
		else if(($(window).width() > 1023) && ($(window).width() < 1025)){
			$(".message-container").slimscroll({
				height: docHeight - 125,  
				width:'430px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else if(($(window).width() > 1919) && ($(window).width() <= 1920)){
			$(".message-container").slimscroll({
				height: docHeight - 125,  
				width:'950px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else {
            $(".message-container").slimscroll({
				height: docHeight - 115,  
				width:'640px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
    }).resize();
	
	//----------------------------------
	// Email Container
	//----------------------------------
	$(".email-container").slimscroll({
		size: '4px',
		color: 'rgba(0,0,0,.6)',
		distance: '0px',
		railVisible: false,
		railColor: 'rgba(255,255,255,.1)',
		railOpacity: .3,
		wheelStep: 20,
		borderRadius: '3px',
		railBorderRadius: '0px',
		allowPageScroll: false,
		opacity: 0
		}).mouseover(function() {
		$(this).next('.slimScrollBar').css('opacity', 0.4);
	});
	
	$(window).resize(function() {        
        if($(window).width() < 769) {
            $(".email-container").slimscroll({
				height: '100%',  
				width:'100%'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
            $('.element').show();
        }
		else if(($(window).width() > 1919) && ($(window).width() <= 1920)){
			$(".email-container").slimscroll({
				height: docHeight - 62,  
				width:'560px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
            $('.element').hide();
		}
		else if(($(window).width() > 1023) && ($(window).width() < 1025)){	
			$(".email-container").slimscroll({
				height: docHeight - 62,  
				width:'255px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
            $('.element').hide();
		}
		else {
            $(".email-container").slimscroll({
				height: docHeight - 62,  
				width:'365px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
            $('.element').hide();
        }
    }).resize();
	
	//----------------------------------
	// Email Container
	//----------------------------------
	$(".email-details").slimscroll({
		size: '4px',
		color: 'rgba(0,0,0,.6)',
		distance: '0px',
		railVisible: false,
		railColor: 'rgba(255,255,255,.1)',
		railOpacity: .3,
		wheelStep: 20,
		borderRadius: '3px',
		railBorderRadius: '0px',
		allowPageScroll: false,
		opacity: 0
		}).mouseover(function() {
		$(this).next('.slimScrollBar').css('opacity', 0.4);
	});
	
	$(window).resize(function() {        
        if($(window).width() < 769) {
			$(".email-details").slimscroll({
				height:'100%',  
				width:'100%'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
        }
		else if(($(window).width() > 1919) && ($(window).width() <= 1920)){
			$(".email-details").slimscroll({
				height: docHeight - 62,  
				width:'1100px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else if(($(window).width() > 1023) && ($(window).width() < 1025)){	
			$(".email-details").slimscroll({
				height: docHeight - 62,  
				width:'515px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
		}
		else {
            $(".email-details").slimscroll({
				height: docHeight - 62,  
				width:'720px'
				}).mouseover(function() {
				$(this).next('.slimScrollBar').css('opacity', 0.4);
			});
				}
			}).resize();
			
	// Calculate main-container height
    function containerHeight() {
        var availableHeight = $(window).height() - $('.navbar-fixed-bottom').outerHeight();
        $('.main-container').attr('style', 'min-height:' + availableHeight + 'px');
    }    
    containerHeight();
    
	//----------------------------------
	// TOOLTIPS
	//----------------------------------
	$('[data-popup="tooltip"]').tooltip();
	
	// Custom color
	$('[data-popup=tooltip-custom]').tooltip({
		template: '<div class="tooltip"><div class="bg-teal"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>'
	});

	//----------------------------------
	// POPOVERS
	//----------------------------------
	$('[data-popup="popover"]').popover();
	
	// Custom color
	$('[data-popup=popover-custom]').popover({
		template: '<div class="popover border-pink"><div class="arrow"></div><h3 class="popover-title bg-pink-lighter"></h3><div class="popover-content"></div></div>'
	});

	// Custom solid color
	$('[data-popup=popover-solid]').popover({
		template: '<div class="popover bg-purple"><div class="arrow"></div><h3 class="popover-title bg-purple-lighter"></h3><div class="popover-content"></div></div>'
	});
	
	//----------------------------------
	// LIGHTBOXES
	//----------------------------------
	$('[data-popup="lightbox"]').fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	
	$(".fancybox").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',
    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
	
	$('.venobox').venobox(); 
	
	//----------------------------------
	// EMPTY PLACEHOLDER
	//----------------------------------
	$('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
			  .attr('placeholder','');
	}).blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	//----------------------------------
	// SCROLL TO TOP
	//----------------------------------
	if($.fn.scrollUp){
        $.scrollUp({
            scrollName: 'scrollTop',
            topDistance: '600',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="icon-arrow-up12"></i>',
            activeOverlay: false
        });
    }

	//----------------------------------
	// SCROLLSPY MENU
	//----------------------------------
	$('body').scrollspy({ target: '.affix-example' });	
	
	//----------------------------------
	// SIDEBAR HEIGHT SETTINGS
	//----------------------------------
    function AsideHeight() {
        var wh = $(window).outerHeight(),
            TopBarHeight = $('.main-nav').height(),
            calc_wh = wh - TopBarHeight;
        $(".sidebar").css({
            "height": calc_wh + "px"
        });
        $(".rightbar").css({
            "height": calc_wh + "px"
        });
        $('.left-aside-container').slimscroll({
            height: calc_wh,
            width: "250px",
            size: '7px',
            color: '#90A4AE',
            distance: '0px',
            railVisible: true,
            railColor: 'rgba(255,255,255,.1)',
            railOpacity: .5,
            wheelStep: 40,
            borderRadius: '3px',
            railBorderRadius: '0px',
            allowPageScroll: false,
			opacity: 0
			}).mouseover(function() {
			$(this).next('.slimScrollBar').css('opacity', 0.7);
        });
		
		$('.themes-container').slimscroll({
			height: calc_wh - 30,
			width: "225px",
			size: '3px',
			color: '#222',
			distance: '0px',
			railVisible: true,
			railColor: 'rgba(0,0,0,.5)',
			railOpacity: 0,
			wheelStep: 40,
			borderRadius: '3px',
			railBorderRadius: '0px',
			allowPageScroll: false,
			opacity: 1
			}).mouseover(function() {
			$(this).next('.slimScrollBar').css('opacity', 0.7);
		});
    }

	//----------------------------------
	// CHATBAR HEIGHT SETTINGS
	//----------------------------------
    function ChatHeight() {
        var RightBarTabHeight = $(".rightbar-tab").outerHeight(),
            ChatToolbarHeight = $(".chat-user-toolbar").outerHeight(),
            TopSectionHeight = RightBarTabHeight + ChatToolbarHeight,
            ConvToolbarHeight = $(".coversation-header").outerHeight(),
            ChatTextInput = $(".chat-text-input").outerHeight(),
            ConvSectionHeight = ConvToolbarHeight + ChatTextInput;
			
        var wh = $(window).outerHeight(),
            TopBarHeight = $('.main-nav').height(),
            calc_wh = wh - TopBarHeight,
            ChatContainerHeight = calc_wh - TopSectionHeight,
            tabCon_h = wh - (TopBarHeight + RightBarTabHeight),
            ConvContainerHeight = calc_wh - ConvSectionHeight;

        $(".chat-user-container").css({
            "height": ChatContainerHeight + "px"
        });

        $(".chat-user-container").slimscroll({
            height: ChatContainerHeight,           
            size: '7px',
            color: '#90A4AE',
            distance: '0px',
            railVisible: true,
            railColor: 'rgba(255,255,255,.1)',
            railOpacity: .5,
            wheelStep: 40,
            borderRadius: '3px',
            railBorderRadius: '0px',
            allowPageScroll: false,
			opacity: 0
			}).mouseover(function() {
			$(this).next('.slimScrollBar').css('opacity', 0.7);
        });
		
		$(".conversation-container").slimscroll({
            height: ConvContainerHeight,            
            size: '7px',
            color: '#90A4AE',
            distance: '0px',
            railVisible: true,
            railColor: 'rgba(255,255,255,.1)',
            railOpacity: .5,
            wheelStep: 40,
            borderRadius: '3px',
            railBorderRadius: '0px',
            allowPageScroll: false,
			opacity: 0
			}).mouseover(function() {
			$(this).next('.slimScrollBar').css('opacity', 0.7);
        });
    }
	
	AsideHeight();
    ChatHeight();

    $(window).smartresize(function() {
        AsideHeight();
        ChatHeight();
    });

	//----------------------------------
	// SIDEBAR TOGGLE
	//----------------------------------
    $(".left-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($("body").hasClass("left-aside-toggle")) {
            $("body").removeClass("left-aside-toggle");
        } else {
            $("body").addClass("left-aside-toggle");			
        }
    });

	//----------------------------------
	// RIGHTBAR TOGGLE
	//----------------------------------
    $(".right-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".rightbar").hasClass("right-aside-toggle")) {
            $(".rightbar").removeClass("right-aside-toggle");
        } else {
            $(".rightbar").addClass("right-aside-toggle");
        }
        $(window).trigger("resize");
    });

	//----------------------------------
	// TOP SEARCHBOX
	//----------------------------------
    $(".btn-top-search").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".top-search-bar").hasClass("search-bar-toggle")) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        } else {
            $(".top-search-bar").addClass("search-bar-toggle");
        }
    });

	//----------------------------------
	// CHATBAR POPUP
	//----------------------------------
    $(".chat-user-list > li > div, .chat-back").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".right-chat-bar").hasClass("right-chat-toggle")) {
            $(".right-chat-bar").removeClass("right-chat-toggle");
        } else {
            $(".right-chat-bar").addClass("right-chat-toggle");
        }
    });

	//----------------------------------
	// TOPBAR HIDE ON CLICK
	//----------------------------------
    $(document).on('click touchstart', function(e) {        
        if ($(e.target).closest(".right-aside-toggle").length === 0 && $(e.target).closest(".right-toggle-switch").length === 0) {
            $(".rightbar").removeClass("right-aside-toggle");
        }
		if ($("body").hasClass("overlay-leftbar")) {
            if ($(e.target).closest(".sidebar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
                $("body").removeClass("left-aside-toggle");
            }
        }
        if ($(e.target).closest(".main-nav-right").length === 0 && $(e.target).closest(".btn-mobile-bar").length === 0) {
            $(".main-nav-right").removeClass("bar-toggle");
        }
        if ($(e.target).closest(".top-search-bar").length === 0 && $(e.target).closest(".btn-top-search").length === 0) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        }
		if ($(e.target).closest(".sidebar").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
            $("body").removeClass("left-aside-toggle");
        }
    });

	//----------------------------------
	// SIDEBAR NAVIGATION
	//----------------------------------
	if ($.fn.navAccordion) {
        $('.sidebar-accordion').each(function() {
            $(this).navAccordion({
                eventType: 'click',
                hoverDelay: 100,
                autoClose: true,
                saveState: false,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'acc-current-parent'
            });
        });
    }

	//----------------------------------
	// HEADER ELEMENTS
	//----------------------------------
	$('.panel-heading, .header-content, .panel-body, .panel-footer').has('> .elements').append('<a class="elements-toggle"><i class="icon-more"></i></a>');
	$('.elements-toggle').on('click', function() {
        $(this).parent().children('.elements').toggleClass('visible');
    });
	
	//----------------------------------
	// PANEL RELOAD
	//----------------------------------
	$('.panel [data-action=reload]').on("click",function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent().parent();
        $(block).block({ 
            message: '<i class="icon-spinner2 spinner icon-2x"></i><h4>Loading</h4><h6>Please wait</h6>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.9,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });
        window.setTimeout(function () {
           $(block).unblock();
        }, 2000); 
    });
	
	//----------------------------------
	// PANEL CLOSE
	//----------------------------------
	$('.panel [data-action=close]').on("click",function (e) {
        e.preventDefault();
        var $panelClose = $(this).parent().parent().parent().parent().parent();
        containerHeight(); // recalculate page height
        $panelClose.fadeOut(500, function() {
            $(this).remove();
        });
    });
	
	//----------------------------------
	// PANEL COLLAPSE
	//----------------------------------
	$('.panel-collapsed').children('.panel-heading').nextAll().hide();
    $('.panel-collapsed').find('[data-action=collapse]').children('i').addClass('rotate-180');
    $('.panel [data-action=collapse]').on("click",function (e) {
        e.preventDefault();
        var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
        $(this).parents('.panel').toggleClass('panel-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // recalculate page height

        $panelCollapse.slideToggle(150);
    });
	
	//----------------------------------
	// PRE LINE NUMBERING
	//----------------------------------
	var pre = document.getElementsByTagName('pre'),
		pl = pre.length;
	for (var i = 0; i < pl; i++) {
		pre[i].innerHTML = '<span class="line-numbers-rows"></span>' + pre[i].innerHTML;
		var num = pre[i].innerHTML.split(/\n/).length;
		for (var j = 0; j < num; j++) {
			var line_num = pre[i].getElementsByTagName('span')[0];
			line_num.innerHTML += '<span>' + (j + 1) + '</span>';
		}
	}
	
	//----------------------------------
	// AFFIX MENU WIDTH FIX
	//----------------------------------
	var $affixElement = $('div[data-spy="affix"]');
    $affixElement.width($affixElement.parent().width());	
	
	//----------------------------------
	// NAVIGATION ACTIVE ON CLICK
	//----------------------------------
	var selector = '.navigation li';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});
	
	//----------------------------------
	// SMOOTHSCROLL ANIMATION
	//----------------------------------
	$('a[href*=#]:not([data-toggle="tab"],[data-toggle="collapse"])').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-60
		}, 500, 'swing', function () {			
		});
	});
	
	//----------------------------------
	// THEME SWITCHER
	//----------------------------------
	$(".theme-switcher-icon").hammer().on("click touchstart", function(e) {
		e.preventDefault();
		if ($(".theme-switcher").hasClass("theme-switcher-toggle")) {
			$(".theme-switcher").removeClass("theme-switcher-toggle");
		} else {
			$(".theme-switcher").addClass("theme-switcher-toggle");
		}
	});
		
	$(".theme").on("click", function(){
		var theme = $(this).attr('id').toLowerCase();
		$('#theme').attr('href','css'+'/themes/'+theme+'.css');
	});
	
	//----------------------------------
	// SWITCHERY JS
	//----------------------------------
	if (Array.prototype.forEach) {
		var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));

		elems.forEach(function(html) {
		  var switchery = new Switchery(html);
		});
	  } else {
		var elems = document.querySelectorAll('.switchery');

		for (var i = 0; i < elems.length; i++) {
		  var switchery = new Switchery(elems[i]);
		}
	}
	
	//----------------------------------
	// UNIFORM JS
	//----------------------------------
	$(".styled, .multiselect-container input").uniform({
		radioClass: 'choice'
	});
	$(".file-styled").uniform({
		wrapperClass: 'bg-blue',
		fileButtonHtml: '<i class="icon-plus3"></i>'
	});
	// Contextual colors
	// Primary
	$(".control-primary").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-primary text-primary'
	});

	// Danger
	$(".control-danger").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-danger text-danger'
	});

	// Success
	$(".control-success").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-success text-success'
	});

	// Warning
	$(".control-warning").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-warning text-warning'
	});

	// Info
	$(".control-info").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-info text-info'
	});

	// Custom color
	$(".control-custom").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-grey-lighter text-grey-lighter'
	});
	
});