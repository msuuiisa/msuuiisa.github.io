const instagramIcon = document.getElementById("insta-icon");

instagramIcon.addEventListener("click", function() {
    window.open("https://www.instagram.com/msu_uiisa/", "_blank");
});

instagramIcon.addEventListener("mouseover", function() {
    instagramIcon.style.color = "red"; 
});

instagramIcon.addEventListener("mouseout", function() {
    instagramIcon.style.color = "";
});

const linkedinIcon = document.getElementById("linkedin-icon");

linkedinIcon.addEventListener("click", function() {
    window.open("https://www.linkedin.com/company/undergraduate-international-indian/about/", "_blank");
});

linkedinIcon.addEventListener("mouseover", function() {
    linkedinIcon.style.color = "#008cb4"; 
});

linkedinIcon.addEventListener("mouseout", function() {
    linkedinIcon.style.color = "";
});

const newsletterIcon = document.getElementById("newsletter");

newsletterIcon.addEventListener("click", function() {
    window.open("https://forms.gle/yi1wrdo4ZKtkt8d8A", "_blank");
});

newsletterIcon.addEventListener("mouseover", function() {
    newsletterIcon.style.color = "#CBC3E3"; 
});

newsletterIcon.addEventListener("mouseout", function() {
    newsletterIcon.style.color = "";
});

const questionIcon = document.getElementById("question");

questionIcon.addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMzShG0gTRg6GyrHvgCIGbPobcGIPsyvkiR76OIPx-PuY9nQ/viewform", "_blank");
});

questionIcon.addEventListener("mouseover", function() {
    questionIcon.style.color = "#CBC3E3"; 
});

questionIcon.addEventListener("mouseout", function() {
    questionIcon.style.color = "";
});

const handbookIcon = document.getElementById("handbook");

handbookIcon.addEventListener("click", function() {
    window.open("https://spartanexperiences.msu.edu/about/handbook/index.html", "_blank");
});

handbookIcon.addEventListener("mouseover", function() {
    handbookIcon.style.color = "#CBC3E3"; 
});

handbookIcon.addEventListener("mouseout", function() {
    handbookIcon.style.color = "";
});