// Leadership

const showLeadershipButton = document.getElementById('showLeadershipButton');
const leadership = document.querySelector('.leadership');
let leadersVisible = false;

showLeadershipButton.addEventListener('click', () => {
    if (leadersVisible) {
        leadership.style.display = 'none';
        leadersVisible = false;
    } else {
        leadership.style.display = 'flex';
        leadersVisible = true;
    }
});

// Events

const showEventsButton = document.getElementById('showEventsButton');
const events = document.querySelector('.events');
let eventsVisible = false;

showEventsButton.addEventListener('click', () => {
    if (eventsVisible) {
        events.style.display = 'none';
        eventsVisible = false;
    } else {
        events.style.display = 'flex';
        eventsVisible = true;
    }
});

//Risk

const showRiskButton = document.getElementById('showRiskButton');
const risk = document.querySelector('.risk');
let riskVisible = false;

showRiskButton.addEventListener('click', () => {
    if (riskVisible) {
        risk.style.display = 'none';
        riskVisible = false;
    } else {
        risk.style.display = 'flex';
        riskVisible = true;
    }
});

// logistics

const showLogisticsButton = document.getElementById('showLogisticsButton');
const logistics = document.querySelector('.logistics');
let logisticsVisible = false;

showLogisticsButton.addEventListener('click', () => {
    if (logisticsVisible) {
        logistics.style.display = 'none';
        logisticsVisible = false;
    } else {
        logistics.style.display = 'flex';
        logisticsVisible = true;
    }
});

// Outreach

const showOutreachButton = document.getElementById('showOutreachButton');
const outreach = document.querySelector('.outreach');
let outreachVisible = false;

showOutreachButton.addEventListener('click', () => {
    if (outreachVisible) {
        outreach.style.display = 'none';
        outreachVisible = false;
    } else {
        outreach.style.display = 'flex';
        outreachVisible = true;
    }
});

// Finance

const showFinanceButton = document.getElementById('showFinanceButton');
const finance = document.querySelector('.finance');
let financeVisible = false;

showFinanceButton.addEventListener('click', () => {
    if (financeVisible) {
        finance.style.display = 'none';
        financeVisible = false;
    } else {
        finance.style.display = 'flex';
        financeVisible = true;
    }
});

// Social Media and Graphics

const showSocialMediaAndGraphicsButton = document.getElementById('showSocialMediaAndGraphicsButton');
const SocialMediaAndGraphics = document.querySelector('.SocialMediaAndGraphics');
let SocialMediaAndGraphicsVisible = false;

showSocialMediaAndGraphicsButton.addEventListener('click', () => {
    if (SocialMediaAndGraphicsVisible) {
        SocialMediaAndGraphics.style.display = 'none';
        SocialMediaAndGraphicsVisible = false;
    } else {
        SocialMediaAndGraphics.style.display = 'flex';
        SocialMediaAndGraphicsVisible = true;
    }
});

// Advisor

const showAdvisorButton = document.getElementById('showAdvisorButton');
const Advisor = document.querySelector('.Advisor');
let AdvisorVisible = false;

showAdvisorButton.addEventListener('click', () => {
    if (AdvisorVisible) {
        Advisor.style.display = 'none';
        AdvisorVisible = false;
    } else {
        Advisor.style.display = 'flex';
        AdvisorVisible = true;
    }
});

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
