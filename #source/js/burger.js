let burger = document.getElementsByClassName("burger")[0];
let menu = document.getElementsByClassName("menu")[0];
let body = document.getElementsByTagName("body")[0];
let xButton = document.getElementsByClassName("x-button")[0];
let menu_xButton = document.getElementsByClassName("menu-x-button")[0];
let toggleEvent = false;
let lang = document.getElementsByClassName("lang")[0];
let current_lang = lang.getElementsByClassName("current-lang")[0];
let lang_list = document.getElementsByClassName("lang-list")[0];
let lang_en = document.getElementById("en");
let lang_ru = document.getElementById("ru");
let lang_ukr = document.getElementById("ukr");
let menu_burger = document.getElementsByClassName("menu-burger")[0];
let main_menu = document.getElementsByClassName("maine-menu")[0];
let list = menu_burger.getElementsByClassName("list")[0];
let aditional_menu = document.getElementsByClassName("aditional-menu")[0];





burger.addEventListener("click", showMenu);
lang.addEventListener("click", toggleLang);
current_lang.innerHTML = ("en");
window.addEventListener("resize", move_menu_items);
move_menu_items();


function showMenu() {
    menu.classList.toggle("active");
    xButton.classList.toggle("active");
    menu_xButton.classList.toggle("active");
    body.classList.toggle("active");
    toggleListener();
}

function hideMenu() {
    if (!menu.contains(event.target) && !burger.contains(event.target) || menu_xButton.contains(event.target)) {
        menu_xButton.classList.toggle("active");
        menu.classList.toggle("active");
        xButton.classList.toggle("active");
        body.classList.toggle("active");
        toggleListener();
    }
}

function toggleListener() {
    if (!toggleEvent) {
        menu_xButton.addEventListener("click", hideMenu);
        document.addEventListener("click", hideMenu);
        toggleEvent = true;
    } else {
        menu_xButton.removeEventListener("click", hideMenu);
        document.removeEventListener("click", hideMenu);
        toggleEvent = false;
    }
}

function toggleLang() {
    lang.classList.toggle("active");
    lang_list.classList.toggle("active");

    lang_en.addEventListener("click", setLanguage);
    lang_ru.addEventListener("click", setLanguage);
    lang_ukr.addEventListener("click", setLanguage);

}

function setLanguage() {
    current_lang.innerHTML = (this.id);
}

function move_menu_items() {
    if (window.innerWidth <= 424) {
        if (main_menu.getElementsByClassName("item-1")[0] != null) {
            let item_1 = main_menu.getElementsByClassName("item-1")[0];
            let item_2 = main_menu.getElementsByClassName("item-2")[0];
            let item_3 = main_menu.getElementsByClassName("item-3")[0];
            list.appendChild(item_1);
            list.appendChild(item_2);
            list.appendChild(item_3);
        }
        if (aditional_menu.getElementsByClassName("info")[0] != null) {
            let info = aditional_menu.getElementsByClassName("info")[0];
            let lang = aditional_menu.getElementsByClassName("lang")[0];
            info.getElementsByTagName("li")[0].innerHTML = "info";
            list.appendChild(info);
            list.appendChild(lang);
        }
    }
    if (window.innerWidth > 424) {
        if (list.getElementsByClassName("info")[0] != null) {
            let info = list.getElementsByClassName("info")[0];
            let lang = list.getElementsByClassName("lang")[0];
            info.getElementsByTagName("li")[0].innerHTML = "i";
            aditional_menu.appendChild(info);
            aditional_menu.appendChild(lang);
        }
    }
    if (window.innerWidth <= 767) {
        if (main_menu.getElementsByClassName("item-1")[0] != null) {
            let item_1 = main_menu.getElementsByClassName("item-1")[0];
            let item_2 = main_menu.getElementsByClassName("item-2")[0];
            let item_3 = main_menu.getElementsByClassName("item-3")[0];
            list.appendChild(item_1);
            list.appendChild(item_2);
            list.appendChild(item_3);
        }
    }
    if (window.innerWidth > 767) {
        if (list.getElementsByClassName("item-1")[0] != null) {
            let item_1 = list.getElementsByClassName("item-1")[0];
            let item_2 = list.getElementsByClassName("item-2")[0];
            let item_3 = list.getElementsByClassName("item-3")[0];
            main_menu.appendChild(item_1);
            main_menu.appendChild(item_2);
            main_menu.appendChild(item_3);
        }
    }
}