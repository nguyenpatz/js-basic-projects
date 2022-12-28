// update year
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// button menu
const navToggle = document.querySelector(".menu");
// links container
const linksContainer = document.querySelector(".links-container");
// links
const links = document.querySelector(".links");
// console.log(links);

navToggle.addEventListener("click", function() {
    // linksContainer.classList.toggle("show-linkscontainer");

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = `0px`;
    }
});

// button to top
const topLink = document.querySelector(".top-link");
// navbar
const navbar = document.getElementById("nav");
const fixNav = "fixed-nav";
window.addEventListener("scroll", function() {
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if(navHeight < scrollHeight) {
        navbar.classList.add(fixNav);
    } else {
        navbar.classList.remove(fixNav);
    }

    if(scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// scroll links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach( function(link) {
    link.addEventListener('click', function(e) {
        // console.log(e.currentTarget.getAttribute("href").slice(1));
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id); 

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains(fixNav);
        let position = element.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight; 
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
    
});