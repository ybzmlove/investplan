// login.js
$(document).ready(function(){
    $(".frame p").hide();

    $(".input_line input").focus(function(){
        $(this).closest(".input_line").addClass("active");
    });

    $(".input_line #userid").blur(function(){
        var $id_value = $(this).val();
        
        if ($id_value.trim() == ""){
            $(this).closest(".frame").find(".enterId").show();      
            return false;      
        }else{
            $(this).closest(".frame").find("p").hide();
        }       
    });

    $(".input_line #userpw").blur(function(){
        var $id_value = $(this).val();
        
        if ($id_value.trim() == ""){
            $(this).closest(".frame").find(".enterPw").show();   
            return false;         
        }else{
            $(this).closest(".frame").find("p").hide();
        }       
    });


















});