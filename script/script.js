// console.alert("This site is still under development, sorry for any inconvenience");
// let a = window;
// a = confirm("This site is underdevelopment, sorry for any inconvenience")
// console.log(a);
// console.alert("This site is still under development, sorry for any inconvenience");


// Responsive Navbar
// document.getElementById('menu_toggle').addEventListener('click', () => {
//     let menu_style = getComputedStyle(document.getElementById("menus"));
//     // console.log(menu_style.left);
//     if (menu_style.left === "-939.391px") {
//         document.getElementById("menus").style.left = "0%";
//         document.getElementById('menu_toggle').classList.remove('fa-bars');
//         document.getElementById('menu_toggle').classList.add('fa-times');
//     } else {
//         document.getElementById("menus").style.left = "-110%";
//         document.getElementById('menu_toggle').classList.remove('fa-times');
//         document.getElementById('menu_toggle').classList.add('fa-bars');
//     }
// })

document.getElementById('menu_toggle').addEventListener('click', function() {
    let menu = document.getElementById('menus');
    if (document.getElementById('menu_toggle').classList == "fas fa-times") {
        menu.style.left = '-110%';
        document.getElementById('menu_toggle').classList.remove('fa-times');
        document.getElementById('menu_toggle').classList.add('fa-bars');
    } else {
        menu.style.left = '0%';
        document.getElementById('menu_toggle').classList.remove('fa-bars');
        document.getElementById('menu_toggle').classList.add('fa-times');
    }

})

let menu = document.getElementById('menus');
menu.addEventListener('blur', function() {
    menu.style.left = '-110%';
})

document.getElementById('menus').addEventListener('blur', function() {
    document.getElementById("menus").style.left = "-110%";
})

function openNav() {
    document.getElementById("menus").style.left = "0%";
    document.getElementById('menu_toggle').classList.remove('fa-times');
    document.getElementById('menu_toggle').classList.add('fa-bars');
}

function closeNav() {
    document.getElementById("menus").style.left = "-110%";
    document.getElementById('menu_toggle').classList.remove('fa-bars');
    document.getElementById('menu_toggle').classList.add('fa-times');
}


// To change the color of navigation tags when active
function activeTag() {
    document.getElementById("about-us").className = "active"
    document.getElementById("home").className = "non_active"
}


// To change the background of the nav after scroll
window.onscroll = function() { change_navbar_UI(), change_active_tab() };


function change_navbar_UI() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.navbar').classList.add('navbar_after_scroll');

    } else {
        document.querySelector('.navbar').classList.remove('navbar_after_scroll');

    }
}


// To change the css of the active tab:
function change_active_tab() {
    if (document.body.scrollTop > 500 && document.body.scrollTop < 800 || document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 800) {
        document.querySelector('#about-us').classList.add('active');

    } else if (document.body.scrollTop > 800 && document.body.scrollTop < 1000 || document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 1000) {
        document.querySelector('.photos').classList.remove('active');

    } else {
        document.getElementById('home').classList.add = ('active');
    }
}


// To hide and unhide the photo gallery
x = document.getElementById("pg1")
y = document.getElementById("pg2")
z = document.getElementById("pg3")
a = document.getElementById("pg4")
b = document.getElementById("pg5")

function openGallery1() {
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}


function openGallery2() {
    if (y.style.display === "none") {
        y.style.display = "block"
    } else {
        y.style.display = "none"
    }
}


function openGallery3() {
    if (z.style.display === "none") {
        z.style.display = "block"
    } else {
        z.style.display = "none"
    }
}


function openGallery4() {
    if (a.style.display === "none") {
        a.style.display = "block"
    } else {
        a.style.display = "none"
    }
}


function openGallery5() {
    if (b.style.display === "none") {
        b.style.display = "block"
    } else {
        b.style.display = "none"
    }
}