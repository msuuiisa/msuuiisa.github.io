const instagramIcon = document.getElementById("insta-icon");

instagramIcon.addEventListener("click", function() {
    window.open("https://www.instagram.com/msu_uiisa/", "_blank");
});

instagramIcon.addEventListener("mouseover", function() {
    instagramIcon.style.color = "white"; 
});

instagramIcon.addEventListener("mouseout", function() {
    instagramIcon.style.color = "red";
});

const linkedinIcon = document.getElementById("linkedin-icon");

linkedinIcon.addEventListener("click", function() {
    window.open("https://www.linkedin.com/company/undergraduate-international-indian/about/", "_blank");
});

linkedinIcon.addEventListener("mouseover", function() {
    linkedinIcon.style.color = "white"; 
});

linkedinIcon.addEventListener("mouseout", function() {
    linkedinIcon.style.color = "#008cb4";
});
