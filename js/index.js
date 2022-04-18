$(function(){
            var $mn = $('.mnWrap'),
                $imgs = $mn.find('.mnGroup'),
                $mnBtn = $mn.find('.pagenation li'),
                i = 0,
                $cnt01 = $('.cnt01'),
                $btnR= $cnt01.find('ul .btnR'),
                $btnL= $cnt01.find('ul .btnL'),
                $img= $cnt01.find('.artWrap'),
                $imgG= $img.find('.artGroup'),
                $btnMore=$('.cnt02 .btn button:last'),
                $cnt02Sect=$('.cnt02 section'),
                $cnt03artG = $('.cnt03 .artGroup'),
                $cnt03Btn = $('.cnt03 header button');
            
            $mnBtn.click(function(){
                i = $(this).index();
                $imgs.find('.mnImg').removeClass('on');
                $imgs.find('.mnImg').eq(i).addClass('on');
                $mnBtn.removeClass('clicked');
                $(this).addClass('clicked');
                $mn.find('.texts .num h4').text('0'+(i+1));
                clearInterval(auR);
            });

            function auto(){
                i++;
                i=i%3;
                $imgs.find('.mnImg').removeClass('on');
                $imgs.find('.mnImg').eq(i).addClass('on');
                $mnBtn.removeClass('clicked');
                $mnBtn.eq(i).addClass('clicked');
                $mn.find('.texts .num h4').text('0'+(i+1));
            }

            var auR = setInterval(auto,3000);



            $cnt03Btn.click(function(){
                $cnt03artG.animate({marginLeft:'-260px'},1000,function(){
                    $cnt03artG.css({marginLeft:0});
                    $cnt03artG.find('article:first').appendTo($cnt03artG);
                    
                });
            });

            $btnMore.on('click',function(){
                var h = parseInt($cnt02Sect.css('height'));
                console.log(h);
                if(h > 700){
                    $cnt02Sect.animate({height:680},1000);
                    $(this).text('더보기');
                }else{
                    $cnt02Sect.animate({height:1380},1000);
                    $(this).text('닫기');
                }

            });

            //전처리
            $imgG.css({marginLeft:'-33.33%'});
            $imgG.find('article:last').prependTo($imgG);
            $imgG.find('article:last').prependTo($imgG);
            
            $btnR.click(function(){
                $imgG.animate({marginLeft:'-66.66%'},function(){
                    $imgG.css({marginLeft:'-33.33%'});
                    $imgG.find('article:first').appendTo($imgG);
                });
            });
            
            $btnL.click(function(){
                $imgG.animate({marginLeft:'-0%'},function(){
                    $imgG.css({marginLeft:'-33.33%'});
                    $imgG.find('article:last').prependTo($imgG);
                });
            });  
            });