/*^

  ____   ____.__    _________       _____  __                                 
\   \ /   /|__|  /   _____/ _____/ ____\/  |___  _  _______ _______   ____  
 \   Y   / |  |  \_____  \ /  _ \   __\\   __\ \/ \/ /\__  \\_  __ \_/ __ \ 
  \     /  |  |  /        (  <_> )  |   |  |  \     /  / __ \|  | \/\  ___/ 
   \___/   |__| /_______  /\____/|__|   |__|   \/\_/  (____  /__|    \___  >
                        \/                                 \/            \/ 
    
    Copyright (©) 2023 VI Software y contribuidores.
    Licencia: GNU GENERAL PUBLIC LICENSE

*/
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();