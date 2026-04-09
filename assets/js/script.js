// --- 1. Countdown Timer Logic ---
const weddingDate = new Date("May 25, 2026 09:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div><span>${days}</span>Days</div>
            <div><span>${hours}</span>Hours</div>
            <div><span>${minutes}</span>Mins</div>
            <div><span>${seconds}</span>Secs</div>
        `;

        if (distance < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "The big day is here! 🎉";
        }
    }
}, 1000);

// --- 2. RSVP WhatsApp Logic ---
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("guest-name").value;
    const phone = document.getElementById("guest-phone").value; // New line to get the phone number
    const relation = document.getElementById("guest-relation").value;
    const attending = document.getElementById("guest-attending").value;


    const whatsappNumber = "94714788795"; 

    let message = `*Wedding Attendance* 💍%0A%0A`;
    message += `*Name:* ${name}%0A`;
    message += `*Contact Number:* ${phone}%0A`; // Include the phone number in the message
    message += `*Relationship:* ${relation}%0A`;
    message += `*Attending:* ${attending}%0A`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, "_blank");
});

// --- Music Toggle Logic ---
const bgMusic = document.getElementById("bgMusic");
const musicIcon = document.getElementById("music-icon");
const musicBtn = document.querySelector(".music-control");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.innerHTML = "⏸️"; 
        musicBtn.classList.add("music-playing");
    } else {
        bgMusic.pause();
        musicIcon.innerHTML = "🎵"; 
        musicBtn.classList.remove("music-playing");
    }
}

//  Music button click event
document.body.addEventListener('click', function() {
    if (bgMusic.paused) {
        
    }
}, { once: true });


// --- Get Guest Name Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to'); 
    const displayElement = document.getElementById('guest-name-display');

    
    if (displayElement) {
        if (guestName) {
            displayElement.innerHTML = "Dear " + guestName + ",";
        } else {
            displayElement.innerHTML = "Dear Family & Friends,";
        }
    }
});