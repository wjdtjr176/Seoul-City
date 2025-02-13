




const visualSlide1 = new Swiper('.news .swiper',{
    simulateTouch:false,
    autoplay:{
        delay:3000,
    },
    loop:true,
    pagination:{
        el:".fraction",
        type:"fraction"
    },
    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev"
    }
})

$('.news .btn-autoplay').click(function(){
    if ($(this).hasClass('active')) {
        visualSlide1.autoplay.start()
    } else {
        visualSlide1.autoplay.stop()
    }
    $(this).toggleClass('active');
})




const visualSlide2 = new Swiper('.citizen .swiper',{
    simulateTouch:false,
    autoplay:{
        delay:1000,
    },
    loop:true,
    pagination:{
        el:".fraction",
        type:"fraction"
    },
    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev"
    }
})


$('.citizen .btn-autoplay').click(function(){
    if ($(this).hasClass('active')) {
        visualSlide2.autoplay.start()
    } else {
        visualSlide2.autoplay.stop()
    }
    $(this).toggleClass('active');
})



$('.sc-visual .title').click(function(e){
    e.preventDefault();

    $('.sc-visual .content').removeClass('active');
    $(this).parent().addClass('active');
})





$('.sc-visual .btn-all').click(function(){
    $('body').addClass('hidden');
    $('.pop-visual').addClass('show');
})
$('.pop-visual .btn-close').click(function(){
    $('body').removeClass('hidden');
    $('.pop-visual').removeClass('show');
})






const bannerSlide1 = new Swiper('.sc-bannerslide .swiper',{
    slidesPerView:3,
    spaceBetween:43,
    simulateTouch:false,
    autoplay:{
        delay:1000,
    },
    loop:true,
    pagination:{
        el:".fraction",
        type:"fraction"
    },
    navigation:{
        nextEl:".btn-next",
        prevEl:".btn-prev"
    }
})
$('.sc-bannerslide .btn-autoplay').click(function(){
    if ($(this).hasClass('active')) {
        bannerSlide1.autoplay.start()
    } else {
        bannerSlide1.autoplay.stop()
    }
    $(this).toggleClass('active');
})





$('.sc-relate .btn-relate').click(function(){
    if ($(this).hasClass('on')) {
        $('.sc-relate .btn-relate').removeClass('on').siblings('.sub').stop().slideUp();
    } else {
        $('.sc-relate .btn-relate').removeClass('on').siblings('.sub').stop().slideUp();
        $(this).addClass('on').siblings('.sub').stop().slideDown();
    }
})













