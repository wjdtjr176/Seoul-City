


$('.btn-lang').click(function(){
    url =$('#langList').val();
    
    window.open(url);
})



$(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 0) {
        $('.fix-btn').addClass('on')
    }else{
        $('.fix-btn').removeClass('on')
    }
})

$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})

