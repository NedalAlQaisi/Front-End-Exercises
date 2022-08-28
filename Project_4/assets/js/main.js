$(document).ready(function () {


  


    // $("#MenuButtonSHOW").click(function () {
    //     $("#ProfaileWindow").fadeIn();
      
    // });


    // $("#BackWindow").click(function () {
    //     $("#ProfaileWindow").fadeOut();
      
    // });

   

})


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2500);
}

function ShowThisToolBarView(el){
    $('.MainView').hide()
    $('#OrderTypeOpensHere').hide()
    $('#OrderTypeOpensHere iframe').attr('src','')
    $('.AddOrdersOpened').click()
    $(el.attr('rel')).show()

    $('.MainView').scrollTop(0);
    $('.toolbar button').removeClass('ActiveToolbarBTN')
    $('.toolbar h1').removeClass('ActiveToolbarBTN')
    el.addClass('ActiveToolbarBTN')
}

function ToggleAddOrder(el){
    if($('.OrderTypesView').is(':visible')){
        $('.OrderTypesView').hide()
        el.removeClass('AddOrdersOpened')
        if($('#Home').is(':visible')){
            $('.toolbar button').removeClass('ActiveToolbarBTN')
            $('#HomeBTn').addClass('ActiveToolbarBTN')
        }else if($('#MyNot').is(':visible')){
            $('.toolbar button').removeClass('ActiveToolbarBTN')
            $('#MyNotBtn').addClass('ActiveToolbarBTN')
        }else{
            $('.toolbar button').removeClass('ActiveToolbarBTN')
        }
    }else{
        $('.OrderTypesView').show()
        el.addClass('AddOrdersOpened')
        $('.toolbar button').removeClass('ActiveToolbarBTN')
    }

}

function ShowThisToolBarView(el){
    $('.toolbar button').removeClass('ActiveToolbarBtn')
    el.addClass('ActiveToolbarBtn')
    $('.MainView').hide()
    $(el.attr('rel')).show()
}