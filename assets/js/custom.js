const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar_menu');
const header = document.querySelector('.navbarMain');

// navbar toggle icon add...
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
// window scroll page add navbar....

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY > 500){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

// tabs script jquery....
$(function () {
    $("#tabs").tabs();
});
// tab menu filtering jquery...
$('.MenuList li').on('click',function(){
    var tsfilter = $(this).data('tsfilter');
    $('.MenuList li').removeClass('data_show');
    $(this).addClass('data_show');

    if(tsfilter == 'all'){
        $('.schedule-table').removeClass('filtering');
        $('.ts_item').removeClass('show');
    }else{
        $('.schedule-table').addClass('filtering');
    }
    $('.ts_item').each(function(){
        $(this).removeClass('show');
        if ($(this).data('tsmeta') == tsfilter){
            $(this).addClass('show');
        }
    });
});

// animation wow js...
new WOW().init();