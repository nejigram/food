$(function(){
    $("#title").addClass("opa_1");
    adjustVideo();
    function adjustVideo() {
        var rate = $('#js-fixedVisual').outerWidth(true) / $('#js-fixedVisual').outerHeight(true);
        if (rate < 1.777) {
            $('#js-mainVisual_video').css({
                'width': 'auto',
                'height': '100%'
            });
        } else {
            $('#js-mainVisual_video').css({
                'width': '100%',
                'height': 'auto'
            });
        }
    }
    $(window).resize(function(){
            adjustVideo();
    });
    $(".img_text_hover").hover(
        function(){
            $(this).find("img").removeClass("opa_1_usu");
            $(this).find("img").addClass("opa_0_usu");
            $(this).find("div").removeClass("opa_0");
            $(this).find("div").addClass("opa_1");

        },
        function(){
            $(this).find("img").removeClass("opa_0_usu");
            $(this).find("img").addClass("opa_1_usu");
            $(this).find("div").removeClass("opa_1");
            $(this).find("div").addClass("opa_0");

        }
    );
    var nowtop = $(window).scrollTop();
    var title2 = $("#title2").offset().top;
    var title3 = $("#title3").offset().top;
    var title4 = $("#title4").offset().top;
    var title5 = $("#title5").offset().top;
    var wh = $(window).height();
    scroll_view();
    $(window).on("scroll",function(){
        nowtop = $(window).scrollTop();
        scroll_view();
    });
    function scroll_view(){

        if(nowtop + wh > title2 && $("#title2").css("opacity") == 0){
            $("#title2").addClass("opa_1");
        }
        if(nowtop + wh > title3 && $("#title3").css("opacity") == 0){
            $("#title3").addClass("opa_1");
        }
        if(nowtop + wh > title4 && $("#title4").css("opacity") == 0){
            $("#title4").addClass("opa_1");
        }
        if(nowtop + wh > title5 && $("#title5").css("opacity") == 0){
            $("#title5").addClass("opa_1");
        }

    }
});
