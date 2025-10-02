// ------ Selecting Score elements ------
let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

// ------ Creating score variable ------
let scoreHome = 0;
let scoreGuest = 0;

// ------ Selecting Home plus btn elements ------
let oneHomeEl = document.getElementById("one-home");
let twoHomeEl = document.getElementById("two-home");
let threeHomeEl = document.getElementById("three-home");

// ------ Selecting Guest plus btn elements ------
let oneGuestEl = document.getElementById("one-guest");
let twoGuestEl = document.getElementById("two-guest");
let threeGuestEl = document.getElementById("three-guest");

// ------ Selecting Reset element ------
let resetEl = document.getElementById("reset")


// ------ Event listner for HOME score btn ------
oneHomeEl.addEventListener("click", function(e){
    scoreHome++
    scoreHomeEl.textContent = scoreHome;
    leadingChecking()
})

twoHomeEl.addEventListener("click", function(e){
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome;
    leadingChecking()
})

threeHomeEl.addEventListener("click", function(e){
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome;
    leadingChecking()
})

// ------ Event listner for GUEST score btn ------
oneGuestEl.addEventListener("click", function(e){
    scoreGuest++
    scoreGuestEl.textContent = scoreGuest;
    leadingChecking()
})

twoGuestEl.addEventListener("click", function(e){
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest;
    leadingChecking()
})

threeGuestEl.addEventListener("click", function(e){
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest;
    leadingChecking()
})

// ------ Event listner for reset btn ------
resetEl.addEventListener("click", function(e){
    scoreGuest = scoreHome = 0;
    scoreGuestEl.textContent = scoreGuest;
    scoreHomeEl.textContent = scoreHome;
    scoreHomeEl.classList.remove("lead")
        scoreGuestEl.classList.remove("lead")
})


function leadingChecking(){
    if(scoreHome > scoreGuest) {
        scoreGuestEl.classList.remove("lead")
        scoreHomeEl.classList.add("lead")
    } else if(scoreHome < scoreGuest) {
        scoreHomeEl.classList.remove("lead")
        scoreGuestEl.classList.add("lead")
    } else {
        scoreHomeEl.classList.remove("lead")
        scoreGuestEl.classList.remove("lead")
    }
}
