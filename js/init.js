jQuery(document).ready(function() {
    var lowopacity = 0.125;
    var highopacity = 0.7;
    var numberofitems = 25;
    var a = 0;
    for (; a < numberofitems; a += 1) {
        setTimeout(function b() {
            var time = Math.random() * 1e3 + 5e3,
                c;
            if ((Math.random() * 10) < 6) {
                c = jQuery("<div />", {
                    "class": "smoke",
                    maxopacity: 1,
                    css: {
                        opacity: 1,
                        left: Math.random() * 30 - 80
                    }
                });
            } else {
                var dimensions = 3 + Math.random() * 3;
                var randomopacity = Math.random();
                //console.info("Randomopacity", randomopacity);
                c = jQuery("<div />", {
                    "class": "particle",
                    maxopacity: Math.random(),
                    css: {
                        opacity: randomopacity,
                        width: dimensions + "px",
                        height: dimensions + "px",
                        'background-size': dimensions + "px",
                        left: Math.random() * 75 + 30
                    }
                });
            }

            jQuery(c).fadeIn(500).appendTo("#viewport");
            jQuery.when(
                jQuery(c).animate({
                    opacity: c.attr("maxopacity")
                }, {
                    duration: time / 4,
                    easing: "linear",
                    queue: false,
                    complete: function() {
                        jQuery(c).animate({
                            opacity: lowopacity,
                            left: Math.random() * 75 + 30
                        }, {
                            duration: time / 3,
                            easing: "linear",
                            queue: false
                        })
                    }
                }),
                jQuery(c).animate({
                    bottom: jQuery("#viewport").height()
                }, {
                    duration: time,
                    easing: "linear",
                    queue: false
                })
            ).then(
                function() {
                    jQuery(c).remove();
                    b()
                }
            )
        }, Math.random() * 5e3);
    }
    
    if(isMobile)
    {
        drawline();
        slidein();
        slideininputs();
        fadein(true);    
    }
    else
    {
        jQuery("#timeline").hide();
        jQuery('.drawline').one('inview', drawline);
        jQuery('.slidein').one('inview', slidein);
        jQuery('.slideininputs').one('inview', slideininputs);
        jQuery('.fadein').one('inview', fadein);
    }
    
    /*
    jQuery("#binder").on('swiperight', function(){
        if(jQuery(".shelved").length>0)
            jQuery("#shelve").click(); 
    });
    jQuery("#binder").on('swipeleft', function(){
        if(jQuery(".unshelved").length>0)
            jQuery("#shelve").click();         
    });
    */
    
    sectionwidth = jQuery("section").width();
    jQuery(window).scroll(function() {
        if(jQuery(window).width()>800)
        {
            var scrolledDistance = jQuery(window).scrollTop();
            var contentHeight = jQuery("body").height();
            var adjustment = (scrolledDistance - 1500) / 1578 * 750 * -1;
            //console.log("adjusting image");
            jQuery(".picture1").each(function() {
                var factor = .1;
                var thisadjustment = adjustment * factor;
                jQuery(this).animate({
                    "margin-top": thisadjustment + "px"
                }, 20);
            });
            jQuery(".picture2").each(function() {
                var factor = 1.3;
                var thisadjustment = adjustment * factor;
                jQuery(this).animate({
                    "margin-top": thisadjustment + "px"
                }, 20);
            });
            jQuery(".picture3").each(function() {
                var factor = 2.0;
                var thisadjustment = adjustment * factor;
                jQuery(this).animate({
                    "margin-top": thisadjustment + "px"
                }, 20);
            });
        }
        else
            jQuery(".picture1, .picture2, .picture3").css("margin-top", "0px");
        //jQuery(".progressbar").css("margin-left", scrolledDistance / contentHeight * sectionwidth * -1);
    });
    jQuery(window).resize(resizeWindow);
    resizeWindow();
    jQuery("a.btnred").on("click", function() {
        jQuery("#gform_1").submit();
        jQuery(this).css("display", "none");
    });
});

var sectionwidth = jQuery("section").width();
var myScroll;

function resizeWindow() {
    sectionwidth = jQuery("section").width();
    jQuery(".sectionwidth").css("width", sectionwidth);
    //jQuery(".progressbar").css("width", sectionwidth * 2);
    //jQuery(".progresswrapper").css("width", sectionwidth);
    setTimeout(function(){ setupSideScroll(); }, 2000);
}

function setupSideScroll()
{
    setTimeout(function() {
        if(!myScroll)
        {
            myScroll = new IScroll('.scrollwrapper2', {
                scrollX: true,
                scrollY: false
            });
        }
        else
        {
            myScroll.refresh();
        }
    }, 500);
}

function drawline() {
    setTimeout(function() {
        jQuery("#timeline").fadeIn().css("width", "0px").animate({
            width: '1188px'
        }, 1000, function() {
            jQuery("div#timeline").addClass("loaded");
            setTimeout(function(){ setupSideScroll(); }, 1000);
        })
    }, 1000);
}

function slidein(all) {
    var target = jQuery(this);
    if(all == true)
        target = jQuery('.slidein');
    
    setTimeout(function() {
        jQuery(target).addClass("slideInLeft fadeIn animated");
    }, 500);
}

function slideininputs() {
    var delay = 100;
    jQuery('.slideininputs').fadeIn().find(".ginput_container").each(function() {
        var thisobject = this;
        delay += 50;
        setTimeout(function() {
            jQuery(thisobject).addClass("slideInLeft fadeIn animated");
        }, delay);
    });
}

function fadein(all) {
    var target = jQuery(this);
    if(all==true)
        target = jQuery('.fadein');
    //console.info('fadein',all);
    setTimeout(function() {
        jQuery(target).addClass("fadeIn animated");
    }, 500);
}

var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent)) isMobile = true;