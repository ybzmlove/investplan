$(document).ready(function(){
    //#1. 
    var sec1_arr = [
        {img: "if_vector_65_02_473778.png", title: "What is a “InvestPlan”?", text: "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."}, 
        {img : "if_vector_65_07_473788.png", title: "BREAKING DOWN “InvestPlan”", text: "hese groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."}, 
        {img: "if_vector_65_14_473802.png", title: "Incredible Strategy & Analisys", text: "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."}
    ];
    console.log(sec1_arr.length); //3
    //#2.
    var sec1_contBox = `
    <div class="cont_box">
        <div class="img_part"><img src="" alt=""></div>
        <div class="txt_part">
            <h4></h4>
            <p></p>
        </div>
    </div>
    `;
    //#3.
    for (i = 0; i < sec1_arr.length; i++){
        $("#section1 .wrap").append(sec1_contBox);
    }
    //#4.
    $("#section1 .cont_box").each(function(index){
        $(this).find("img").attr("src", `./img/${sec1_arr[index].img}`);
        $(this).find("h4").text(sec1_arr[index].title);
        $(this).find("p").text(sec1_arr[index].text);
    });



    //#1.
    var sec3_arr = [
        ["invest-01.jpg", "Newyork in USA", "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security.", "arrow_right.svg"],
        ["invest-02.jpg", "Tokyo in Japan", "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for...", "arrow_right.svg"],
        ["invest-03.jpg", "Sydney in Australia", "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ...", "arrow_right.svg"],
        ["invest-04.jpg", "Istanbul in Turkey", "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be.", "arrow_right.svg"]
    ];
    //#2.
    var sec3_cont = `
    <div class="box">
        <div class="img_part"></div>
        <div class="txt_part">
            <h4></h4>
            <p></p>
        </div>
        <div class="btn_part"><img src="./img/arrow_right.svg" alt="화살표 이미지"></div>
    </div>
    `;
    //#3.
    for (i = 0; i < sec3_arr.length; i++){
        $("#branches .wrap .cont").append(sec3_cont);
    }
    //#4.
    $("#branches .wrap .cont .box").each(function(index){
        $(this).find(".img_part").css("background-image", `url(./img/${sec3_arr[index][0]})`);
        $(this).find("h4").text(sec3_arr[index][1]);
        $(this).find("p").text(sec3_arr[index][2]);
    });


    //#1.
    var sec4_arr = [
        ["m_01.jpg"], 
        ["m_02.jpg"], 
        ["m_03.jpg"], 
        ["m_04.jpg"], 
        ["m_05.jpg"], 
        ["m_06.jpg"], 
        [],
        ["m_07.jpg"], 
        ["m_08.jpg"], 
        ["m_09.jpg"], 
        ["m_10.jpg"], 
        []
      
    ];
    //#2.
    var sec4_cont = `
    <div class="img"></div>
    `;
    //#3.
    for (i = 0; i < sec4_arr.length; i++){
        $("#managers .wrap .cont").append(sec4_cont);
    }
    //#4.
    $("#managers .wrap .cont .img").each(function(index){
        $(this).css("background-image", `url(./img/managers/${sec4_arr[index]})`);
    });



}); 