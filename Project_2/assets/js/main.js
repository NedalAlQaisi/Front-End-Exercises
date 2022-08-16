$(document).ready(function(){
    if (window. location. href. indexOf("OnFrame") > -1){
        $('.MobileSHaredLayout').remove()
        $('.Toolbar').remove()
    }
    else if (window.location.href.indexOf("mobile") > -1)
    {
        $('#HomeBTn').addClass('ActiveToolbarBTN')
    }else{
        $('#HomeBTn').removeClass('ActiveToolbarBTN')
        $('#HomeBTn').attr('onclick','window.location.href="/"')
    }

    if($('#AfterPayment').is(':visible')){
        $('.ToolbarInner button').removeClass('ActiveToolbarBTN')
    }


    $('#OurRatesSlider').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.HomeBanner').slick({
        infinite: false,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    if (window.location.href.indexOf("MyBills") > -1) {
        $('#AfterPayment').show()
    }

    $('#SOForm').submit(function (){
        $('#preloaderNew').show()
    });

    $('.MyOrderzItem').click()
    $('.MyBillsItem').click()

    var doneOrderCount = $('.DoneOrder').length;
    if(doneOrderCount === 0){
        $('.DoneOrdersLength').addClass('OrderCountEmpty')
    }
    else{
        $('.DoneOrdersLength').addClass('YouHaveNewDoneOrders')
    }
    $('.DoneOrdersLength').text(doneOrderCount)

    if($('#MyBasketView .MyOrderzItem ').length === 0){
        $('.MyOrderzGH').hide()
        $('.MyBasketsReturnFalse').show()
    }

     window.setInterval(function(){
      $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
      $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg1').addClass('FloatingImg')
    }, 1000);

     window.setInterval(function(){
         $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
         $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg2').addClass('FloatingImg')
    }, 2000);

     window.setInterval(function(){
         $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
         $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg3').addClass('FloatingImg')
    }, 3000);

     window.setInterval(function(){
         $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
         $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg4').addClass('FloatingImg')
    }, 4000);

     window.setInterval(function(){
         $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
         $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg5').addClass('FloatingImg')
    }, 5000);

     window.setInterval(function(){
         $('.PCMainButton img').removeClass('FloatingImg')
      $('.BigBtnsGHItemImg').removeClass('FloatingImg')
         $('.PackagePhoto').removeClass('FloatingImg')
      $('.HomeMainImg6').addClass('FloatingImg')
    }, 6000);

});

$(window).on('load', function() {
    $('#preloaderNew').fadeOut(1000);
});


function ShowThisToolBarView(el){
    $('.ToolbarInner button').removeClass('ActiveToolbarBTN')
    $('.ToolbarInner h1').removeClass('ActiveToolbarBTN')
    el.addClass('ActiveToolbarBTN')
    $('.MainView').hide()
    $('.AddOrdersOpened').click()
    $(el.attr('rel')).show()

    $('.MainView').scrollTop(0);
}

function MyOrdersFilterAction(el){
    var ThisFilterName = el.attr('value');
    if($(el.attr('rel')).length === 0){
        $('.MyOrderzGH').hide()
        $('.MyOrdersReturnFalse p u').text(ThisFilterName)
        $('.MyOrdersReturnFalse').fadeIn()
    }
    else{
        $('.MyOrdersReturnFalse').hide()
        $('.MyOrderzGH').fadeIn()
    }
    $('#MyOrders .MyOrdersFilter button').removeClass('ActiveMOBFilterBtn')
    el.addClass('ActiveMOBFilterBtn')
    $('.MyOrderzItem').hide()
    $(el.attr('rel')).fadeIn()
}

function CopyLink(element){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".LinkCopiedSuccessfully").show();
    setTimeout(function() { $(".LinkCopiedSuccessfully").fadeOut(); }, 4000);
}

function GetThisItemStatus(el){
    if(el.find('.PaidOrNotInput').val() === '1'){
        el.addClass('Paid')
    }
    else if(el.find('.PaidOrNotInput').val() === '0'){
        el.addClass('NotPaid')
    }
    if(el.find('.DoneOrNotInput').attr('rel') === '1'){
        el.addClass('DoneOrder')
    }
    else if(el.find('.DoneOrNotInput').attr('rel') === '0'){
        el.addClass('NotDoneOrder')
    }

    // $('.RObtn span').text(el.find('.ReadyToDownloadItem').length)
}

function ShowPassword(el){
    if(el.parent().find('input').attr('type')==='text'){
        el.parent().find('input').attr('type','password')
    }else{
        el.parent().find('input').attr('type','text')
    }

}


function SelectThisOSMainOption(el){
    el.parent().parent().find('button').removeClass('MainOptionsActive')
    el.addClass('MainOptionsActive')
    el.find('input').attr('checked', true);
}

function SelectThisOSRefrence(el){
    el.parent().parent().find('button').removeClass('MainOptionsActive');
    el.addClass('MainOptionsActive');
    $('.RefranceInfoView img').attr('src',el.attr('rel'));
    $('.RefranceInfo').show();
}

function SelectThisMiniOption(el){
    el.parent().find('button').removeClass('TwoMiniBtnsActive')
    el.addClass('TwoMiniBtnsActive')
}

function FilterSOExtras(el){
    if($(el.attr('rel')).is(':visible')){
        el.removeClass('ActiveOSExtrasBtn')
        $('.SO-Extras-miniOptions').fadeOut()
    }else{
        $('.SO-Extras-Options button').removeClass('ActiveOSExtrasBtn')
        el.addClass('ActiveOSExtrasBtn')
        $('.SO-Extras-miniOptions').hide()
        $(el.attr('rel')).fadeIn()
    }

}

function OSChangeValue(el){
    var ThisParentInput = parseInt(el.parent().find('input').val());
    var ThisParentInputAdded = ThisParentInput + 1;
    var ThisParentInputMinus = ThisParentInput - 1;
    if(el.attr('rel') === 'Plus'){
        el.parent().find('button').removeClass('DisabledMinus')
        el.parent().find('input').attr('value',ThisParentInputAdded)
    }else{
        if(ThisParentInput === 0){
            el.addClass('DisabledMinus')
        }
        else{
            el.removeClass('DisabledMinus')
            el.parent().find('input').attr('value',ThisParentInputMinus)
        }

    }
}


function SelectThisMOPath(el){
    if(el.hasClass('ActiveMOPath')){
        el.removeClass('ActiveMOPath')
        $('.MostOrderedItemsGH ').slideUp()
    }
    else{
        // $('.MostOrderedItem ').hide()
        $('.MostOrderedItemsGH ').fadeIn()
        $(el.attr('rel')).fadeIn()
        $('.MOpathItem').removeClass('ActiveMOPath')
        el.addClass('ActiveMOPath')
        $('.MostOrderedItemsGH h1 u').text(el.text())
        $('.MostOrderedItemsGH h1 img').attr('src',el.find('img').attr('src'))
    }
}

function ThisFileFormat(el){
    var str = el.find('span u').text();
    var substr = str.substring(str.length-4, str.length);
    var substrThree = str.substring(str.length-3, str.length);
    if (substr.indexOf(".") >= 0){
        el.find('h12').text(substrThree)
    }
    else{
        el.find('h12').text(substr)
    }
}

function EditPaidOrder(el){
    $('.EditPaidOrderView').hide()
    $(el.attr('rel')).show()
}


function ShowDealCustomization(el){
    if(el.hasClass('ActiveDCBtn')){
        $('.DealCustemization').fadeOut();
        $('.DealButtons button').removeClass('ActiveDCBtn');
    }else{
        $('.DealCustemization').hide();
        el.parent().parent().find('.DealCustemization').show();
        $('.DealButtons button').removeClass('ActiveDCBtn');
        el.addClass('ActiveDCBtn')
    }
}

function ChooseThisDealFilter(el){
    var ThisDealItems = $(el.attr('rel')).parent().parent().parent().parent()
    $('#MyDeals .MyOrdersFilter button').removeClass('ActiveMOBFilterBtn')
    el.addClass('ActiveMOBFilterBtn')
    if(el.val() === 'AllDeals'){
        $('.DealsReturnFalse').hide()
        $('.DealsGH').show()
        $('.DealItem').show()
        $('.DealSearchSection input').val('')
        $('.DealSearchSection h10')[0].click()
    }else{
        if(ThisDealItems.length === 0){
            $('.DealsGH').hide()
            $('.DealsReturnFalse p u').text(el.attr('title'))
            $('.DealsReturnFalse').show()
        }else{
            $('.DealsReturnFalse').hide()
            $('.DealItem').hide()
            $('.DealsGH').show()
            ThisDealItems.show()
        }

    }
    $('.ActiveDCBtn').click()
}


function SearchDeals(el){
    $('.DealsGH .ActiveDCBtn').click()
    // $('.DealItem').show();
    var filter = $('.DealSearchSection input').val();
    $('.DealsGH').find(".DealItemHeader:not(:contains(" + filter + "))").parent().hide();
    $('.DealsGH').find(".DealItemHeader:contains(" + filter + ")").parent().show();

    if($(".DealItemHeader:contains(" + filter + ")").length === 0){
        $('.DealsReturnFalseInner p u').text('صفقات تحتوي على كلمة '+ filter +'')
        $('.DealsReturnFalse').show()
    }
    else{
        $('.DealsReturnFalse').hide()
    }
}

function ToggleAddOrder(el){
    if($('.OrderTypesView').is(':visible')){
        $('.OrderTypesView').hide()
        el.removeClass('AddOrdersOpened')
    }else{
        $('.OrderTypesView').show()
        el.addClass('AddOrdersOpened')
    }

}

function ShowProfileMainView(el){
    $('.ProfileMainView').hide();
    $(el.attr('rel')).show()
}

function ChangeRateTotalAmount(el){
    el.parent().find('u').text(el.val())
    var rateOne = parseInt($('.RateUs1').val());
    var rateTwo = parseInt($('.RateUs2').val());
    var rateThree = parseInt($('.RateUs3').val());
    var rateFour = parseInt($('.RateUs4').val());
    var GetTotal = parseInt(rateOne + rateTwo + rateThree + rateFour) /parseInt(4) ;
    $('#RateUsAmount').attr('value',GetTotal)
}

function ShowSOFiles(el){
    var filename = el.files.length ? el.files.name : "";
    el.parent().parent().find('h13').text(filename)
}


$('#DealsFilesUploader').change(function(e){
    $('.DealsFilesUploaderFilesPreviewInner .AttachedFilesDeals').remove()
    var filelist = document.getElementById("DealsFilesUploader").files || [];
    for (var i = 0; i < filelist.length; i++) {
        $('.DealsFilesUploaderFilesPreviewInner').append("<div class='AttachedFilesDeals animate__animated animate__bounceIn'>"+
            "<i class='far fa-file'></i>"+
            "<p>" + parseInt(i + 1 )+ ' - ' + filelist[i].name+"</p>"+
            "</div>"
        );
    }
    if($('.DealsFilesUploaderFilesPreviewInner .AttachedFilesDeals').length >= 3){
        $('.DealsFilesUploaderFilesPreviewBtns').show()
    }else{
        $('.DealsFilesUploaderFilesPreviewBtns').hide()
    }
    $('.DealsFilesUploaderFilesPreviewHeader h4 u').text($('.DealsFilesUploaderFilesPreviewInner .AttachedFilesDeals').length)
    $('#DealsFilesUploaderFilesPreview').slideDown()
})

function FilterMyBills(el){
    el.parent().find('button').removeClass('ActiveMOBFilterBtn')
    el.addClass('ActiveMOBFilterBtn')
    $('.MyBillsItem').hide()
    $(el.attr('rel')).show()
    if($(el.attr('rel')).length === 0){
        $('.MyBillsReturnFalseInner p u').text(el.attr('title'))
        $('.MyBillsGH').hide()
        $('.MyBillsReturnFalse').show()
    }else{
        $('.MyBillsReturnFalse').hide()
        $('.MyBillsGH').show()
    }
}

function ShowThisBillStatus(el){
    if(el.find('.BillPaidStatus').attr('value') === 'NotPaidBill'){
        el.addClass('ANotPaidBill')
    }else if(el.find('.BillPaidStatus').attr('value') === 'PaidBill'){
        el.addClass('APaidBill')
    }else if(el.find('.BillAcceptedStatus').attr('value') === 'NotAcceptedBill'){
        el.addClass('ANotAcceptedBill')
    }else if(el.find('.BillAcceptedStatus').attr('value') === 'AcceptedBill'){
        el.addClass('AAcceptedBill')
    }
}

function FullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
    else {
        cancelFullScreen.call(doc);
    }
}

function firstPageValidation(el){
    $('.SO-Form-Row').removeClass('ValidatedRow')

    if($('.AmountSelecter:visible input').val() === '0'){
        $('.AmountSelecter:visible').parent().parent().addClass('ValidatedRow')
    }else if($('#DeadLineDatePicker').hasClass('EmptyDatePicker')){
        $('#DeadLineDatePicker').parent().parent().addClass('ValidatedRow')
    }else{
        $('.SO-SecondSection').hide();
        $('.SO-TheirdSection').show();
        $('.SO-Section').scrollTop(0);
    }
}

function SecondPageValidation(){
    $('.SO-Form-Row').removeClass('ValidatedRow')

    if($('#MeterialName').val().length <= 3){
        $('#MeterialName').parent().parent().addClass('ValidatedRow')
    }else if($('#MeterialTitle').val().length <= 3){
        $('#MeterialTitle').parent().parent().addClass('ValidatedRow')
    }else{
        $('.SO-TheirdSection').hide();
        $('.SO-FourthSection').show();
        $('.SO-Section').scrollTop(0);
    }
}


function OpenChatWithEmp(el){
    $('.ChatWithEmp').find('iframe').attr('src',el.attr('rel'))
    $('.ChatWithEmp').fadeIn()
}
