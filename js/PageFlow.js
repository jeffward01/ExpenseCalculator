$(document).ready(function () {

    //Controls the View of Salary OR Hourly
    var SalaryMode = $('.SalaryMode');
    var HourlyMode = $('.HourlyMode');

    $(SalaryMode).hide();
    $(HourlyMode).hide();
    $('.ShowBtnArea').hide();

    $('.SalaryModeBtn').on('click', function () {
        $(SalaryMode).show();
        $(HourlyMode).hide();
    });

    $('.HourlyModeBtn').on('click', function () {
        $(SalaryMode).hide();
        $(HourlyMode).show();
    });


    //Toggles Button Hide
    $('.hideBtn').on('click', function () {
        $('.TypeSelectArea').fadeOut('fast');
                $('.TypeSelectArea').hide();
        $('.ShowBtnArea').fadeIn('slow');
                $('.ShowBtnArea').show();

    })

    $('.showBtn').on('click', function () {
        $('.ShowBtnArea').fadeOut('slow');
        $('.ShowBtnArea').hide();
        $('.TypeSelectArea').fadeIn('slow');


    })



});