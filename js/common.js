$(function(){
    var wd = $('html').width();
    var hdrWrap =  $('.hdrWrap');
    var ftrWrap = $('.ftrWrap');
    hdrWrap.load('./inc/head.html',function(){});
    ftrWrap.load('./inc/foot.html',function(){});

    if(wd >= 780){
        $('head').append('<script src=\'js/index.js\'><\/script>');
    }else{  
        $('head').append('<script src=\'js/jquery.mobile-1.4.5.min.js\'><\/script>');      
        $('head').append('<script src=\'js/mob_index.js\'><\/script>');      
    }
});