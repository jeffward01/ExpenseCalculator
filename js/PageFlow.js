$(document).ready(function(){
    
    //Controls the View of Salary OR Hourly
    
    var SalaryMode = $('.SalaryMode');
    var HourlyMode = $('.HourlyMode');
  
    $(SalaryMode).hide();
    $(HourlyMode).hide();
    
    $('.SalaryModeBtn').on('click', function(){
        $(SalaryMode).show();
        $(HourlyMode).hide();
        
    });
      $('.HourlyModeBtn').on('click', function(){
        $(SalaryMode).hide();
        $(HourlyMode).show();
        
    });
    
})