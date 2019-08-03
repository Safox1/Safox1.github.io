var sizeFooter = function(){
    $(".webfooter").css("padding-bottom", "0px").css("padding-bottom", $(window).height() - $("body").height())
}
$(window).resize(sizeFooter);