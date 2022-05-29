$(function(){
    var wd = $('html').width();
    var hdrWrap =  $('.hdrWrap');
    var ftrWrap = $('.ftrWrap');
    hdrWrap.load('./head.html',function(){});
    ftrWrap.load('./foot.html',function(){});

    if(wd >= 780){
        $('head').append('<script src=\'js/index.js\'><\/script>');
    }else{  
        $('head').append('<script src=\'js/jquery.mobile.custom.min.js\'><\/script>');      
        $('head').append('<script src=\'js/mob_index.js\'><\/script>');      
    }
});