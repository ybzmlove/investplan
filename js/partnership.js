// partner.js
$(document).ready(function(){
    //#1. 
    var partners_arr = [
        "m_01.jpg",
        "m_02.jpg",
        "m_03.jpg",
        "m_04.jpg",
        "m_05.jpg",
        "m_06.jpg",
        "m_07.jpg",
        "m_08.jpg",
        "m_09.jpg",
        "m_10.jpg"
    ];
    //#2.
    var partners_cont = `<div></div>`;
    //#3.
    for (i = 0; i < partners_arr.length; i++){
        $(".cont3 .img_part").append(partners_cont);
    }
    //#4.
    $(".cont3 .img_part div").each(function(index){
        $(this).css("background-image", `url(./img/managers/${partners_arr[index]})`);
    });




});