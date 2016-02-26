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
                console.info("Randomopacity", randomopacity);
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
    jQuery("#timeline").hide();
    jQuery('.drawline').one('inview', function() {
        var thisobject = this;
        setTimeout(function() {
            jQuery("#timeline").fadeIn().css("width", "0px").animate({
                width: '1188px'
            }, 1000, function() {
                jQuery("div#timeline").addClass("loaded");
            })
        }, 1000);
    });
    jQuery('.slidein').one('inview', function() {
        var thisobject = this;
        setTimeout(function() {
            jQuery(thisobject).addClass("slideInLeft fadeIn animated");
        }, 500);
    });
    jQuery('.slideininputs').one('inview', function() {
        var delay = 100;
        jQuery(this).fadeIn().children(".textwrap").each(function() {
            var thisobject = this;
            delay += 50;
            setTimeout(function() {
                jQuery(thisobject).addClass("slideInLeft fadeIn animated");
            }, delay);
        });
    });
    jQuery('.fadein').one('inview', function() {
        var thisobject = this;
        setTimeout(function() {
            jQuery(thisobject).addClass("fadeIn animated");
        }, 500);
    });
    sectionwidth = jQuery("section").width();
    jQuery(window).scroll(function() {
        var scrolledDistance = jQuery(window).scrollTop();
        var contentHeight = jQuery("body").height();
        var adjustment = (scrolledDistance - 1500) / 1578 * 750 * -1;
        jQuery(".adjustableimage").each(function() {
            var thisadjustment = adjustment * jQuery(this).data("factor");
            jQuery(this).animate({
                "margin-top": thisadjustment + "px"
            }, 20);
        });
        jQuery(".progressbar").css("margin-left", scrolledDistance / contentHeight * sectionwidth * -1);
    });
    jQuery(window).resize(resizeWindow);
    resizeWindow();
    jQuery("a.btnred").on("click", function() {
        jQuery("#gform_1").submit();
    });
});
var sectionwidth = jQuery("section").width();

function resizeWindow() {
    sectionwidth = jQuery("section").width();
    jQuery(".sectionwidth").css("width", sectionwidth);
    jQuery(".progressbar").css("width", sectionwidth * 2);
    jQuery(".progresswrapper").css("width", sectionwidth);
    setTimeout(function() {
        myScroll = new IScroll('.scrollwrapper2', {
            scrollX: true,
            scrollY: false
        });
    }, 2500);
}