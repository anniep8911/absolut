$(function(){
	var $cnt01 = $('.cnt01'),
		$imgG = $cnt01.find('.artGroup'),
		wid = $('html').width(),
		$cnt02 = $('.cnt02'),
		$imgG02 = $cnt02.find('section'),
		$cnt03 = $('.cnt03'),
		$imgG03 = $cnt03.find('section .artGroup'),
        $bars = $('.fa-bars'),
        $side = $('.bars'),
        $sideClose = $side.find('li:last');
    
        $bars.click(function(){
            $side.animate({width:'50%',opacity:1},1000);
        });
        $sideClose.click(function(){
            $side.animate({width:'0%',opacity:0},1000);
        });
		
		if(wid >= 420){
			//전처리
			$imgG.find('article:last').prependTo($imgG);
			$imgG.css({marginLeft:'-50%'});
			$('button').removeClass('ui-btn ui-input-btn ui-corner-all ui-shadow');
			$('a').removeClass('ui-link');
			$imgG02.find('article:last').prependTo($imgG02);
			$imgG02.css({marginLeft:'-50%'});
			$imgG03.find('article:last').prependTo($imgG03);
			$imgG03.css({marginLeft:'-100%'});		
			$imgG.on('swipeleft swiperight',function(eve){
				switch(eve.type){
					case "swipeleft": left();
					break;
					case "swiperight":right();
					break;
					default : console.log('알수없음');
				}
			});
			
			$imgG02.on('swipeleft swiperight',function(eve){
				switch(eve.type){
					case "swipeleft": left02();
					break;
					case "swiperight":right02();
					break;
					default : console.log('알수없음');
				}
			});
			
			$imgG03.on('swipeleft swiperight',function(eve){
				switch(eve.type){
					case "swipeleft": left03();
					break;
					case "swiperight":right03();
					break;
					default : console.log('알수없음');
				}
			});
			
			function left(){
				$imgG.animate({marginLeft:'-100%'},1000,'linear',function(){
					$imgG.css({marginLeft:'-50%'});
					$imgG.find('article:first').appendTo($imgG);
				})
			}
			
			function right(){
				$imgG.animate({marginLeft:'0%'},1000,'linear',function(){
					$imgG.css({marginLeft:'-50%'});
					$imgG.find('article:last').prependTo($imgG);
				})
			}
			
			
			function left02(){
				$imgG02.animate({marginLeft:'-100%'},1000,'linear',function(){
					$imgG02.css({marginLeft:'-50%'});
					$imgG02.find('article:first').appendTo($imgG02);
				})
			}
			
			function right02(){
				$imgG02.animate({marginLeft:'0%'},1000,'linear',function(){
					$imgG02.css({marginLeft:'-50%'});
					$imgG02.find('article:last').prependTo($imgG02);
				})
			}
			
			function left03(){
				$imgG03.animate({marginLeft:'-200%'},1000,'linear',function(){
					$imgG03.css({marginLeft:'-100%'});
					$imgG03.find('article:first').appendTo($imgG03);
				})
			}
			
			function right03(){
				$imgG03.animate({marginLeft:'0%'},1000,'linear',function(){
					$imgG03.css({marginLeft:'-100%'});
					$imgG03.find('article:last').prependTo($imgG03);
				})
			}
		}else{
		
			$imgG03 = $cnt03.find('section .sectWrap'),
			$artG03 = $cnt03.find('.artGroup');
			//전처리
			$imgG.find('article:last').prependTo($imgG);
			$imgG.css({marginLeft:'-45%'});
			$('button').removeClass('ui-btn ui-input-btn ui-corner-all ui-shadow');
			$imgG02.find('article:last').prependTo($imgG02);
			$imgG02.css({marginLeft:'-103%'});
			$imgG03.find('article:last').prependTo($artG03);
			$imgG03.css({marginLeft:'-80%'});		
			
			$imgG.on('swipeleft swiperight',function(eve){
			switch(eve.type){
				case "swipeleft": left();
				break;
				case "swiperight":right();
				break;
				default : console.log('알수없음');
			}
			});
			
			$imgG02.on('swipeleft swiperight',function(eve){
				switch(eve.type){
					case "swipeleft": left02();
					break;
					case "swiperight":right02();
					break;
					default : console.log('알수없음');
				}
			});
			
			$imgG03.on('swipeleft swiperight',function(eve){
				switch(eve.type){
					case "swipeleft": left03();
					break;
					case "swiperight":right03();
					break;
					default : console.log('알수없음');
				}
			});
			
			
			function left(){
				$imgG.animate({marginLeft:'-94%'},500,'linear',function(){
					$imgG.css({marginLeft:'-45%'});
					$imgG.find('article:first').appendTo($imgG);
				})
			}
			
			function right(){
				$imgG.animate({marginLeft:'0%'},500,'linear',function(){
					$imgG.css({marginLeft:'-45%'});
					$imgG.find('article:last').prependTo($imgG);
				})
			}
			
			function left02(){
				$imgG02.animate({marginLeft:'-206%'},500,'linear',function(){
					$imgG02.css({marginLeft:'-103%'});
					$imgG02.find('article:first').appendTo($imgG02);
				})
			}
			
			function right02(){
				$imgG02.animate({marginLeft:'0%'},500,'linear',function(){
					$imgG02.css({marginLeft:'-103%'});
					$imgG02.find('article:last').prependTo($imgG02);
				})
			}
			
			function left03(){
				$imgG03.animate({marginLeft:'-160%'},500,'linear',function(){
					$imgG03.css({marginLeft:'-80%'});
					$imgG03.find('article:first').appendTo($artG03);
				})
			}
			
			function right03(){
				$imgG03.animate({marginLeft:'0%'},500,'linear',function(){
					$imgG03.css({marginLeft:'-80%'});
					$imgG03.find('article:last').prependTo($artG03);
				})
			}
		}
		
});