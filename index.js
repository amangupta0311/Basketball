let homeS= document.getElementById("home")
let guest = document.getElementById("guest")
let homeSc = 0
let guestSc = 0

function score1() {
    homeSc += 1
    homeS.textContent = homeSc
}

function score2() {
    homeSc += 2
    homeS.textContent = homeSc
}

function score3() {
    homeSc += 3
    homeS.textContent = homeSc
}

function gscore1() {
    guestSc += 1
    guest.textContent = guestSc
}

function gscore2() {
    guestSc += 2
    guest.textContent = guestSc
}

function gscore3() {
    guestSc += 3
    guest.textContent = guestSc
}

function reset() {
    homeSc = 0;
    guestSc= 0;
    homeS.textContent = homeSc
    guest.textContent = guestSc
}