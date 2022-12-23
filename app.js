let homeScore = 0;
let guestScore = 0;
let homePoints = document.getElementById('home-points');
let guestPoints = document.getElementById('guest-points');

function plusOneHome() {
    homeScore += 1
    homePoints.textContent = homeScore;
}

function plusTwoHome() {
    homeScore += 2
    homePoints.textContent = homeScore;
}

function plusThreeHome() {
    homeScore += 3
    homePoints.textContent = homeScore;
}

function plusOneGuest() {
    guestScore += 1
    guestPoints.textContent = guestScore;
}

function plusTwoGuest() {
    guestScore += 2
    guestPoints.textContent = guestScore;
}

function plusThreeGuest() {
    guestScore += 3
    guestPoints.textContent = guestScore;
}