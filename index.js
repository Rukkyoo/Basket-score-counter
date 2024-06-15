let homeCountElement = document.getElementById("home-num");
let guestCountElement = document.getElementById("guest-num");
let homeCount = 0;
let guestCount = 0;

function addOnePoint() {
  homeCount += 1;
  homeCountElement.textContent = homeCount;
}

function addTwoPoint() {
  homeCount += 2;
  homeCountElement.textContent = homeCount;
}

function addThreePoint() {
  homeCount += 3;
  homeCountElement.textContent = homeCount;
}

function add1Point() {
  guestCount += 1;
  guestCountElement.textContent = guestCount;
}

function add2Point() {
  guestCount += 2;
  guestCountElement.textContent = guestCount;
}

function add3Point() {
  guestCount += 3;
  guestCountElement.textContent = guestCount;
}

function clearCount() {
  homeCount = 0; // Reset home count
  guestCount = 0; // Reset guest count
  homeCountElement.textContent = homeCount;
  guestCountElement.textContent = guestCount;
}
