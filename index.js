var imgContainer = document.getElementById('img');
var slides = ["/images/slider1.jpeg", "/images/slider2.jpeg", "/images/slider3.jpeg", "/images/slider4.jpeg", "/images/slider5.jpeg", "/images/slider6.jpeg", "/images/slider7.jpeg", "/images/slider8.jpeg"]; // Include all images
var currentSlide = 0;

function slider() {
    imgContainer.style.opacity = 0; 
    setTimeout(function () {
        imgContainer.innerHTML = "<img src=" + slides[currentSlide] + ">";
        currentSlide = (currentSlide + 1) % slides.length; 
        imgContainer.style.opacity = 1; 
    }, 1000); 
}

slider(); 
setInterval(slider, 5000);

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


