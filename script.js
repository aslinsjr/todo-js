let monday = JSON.parse(localStorage.getItem("monday"))
let tuesday = JSON.parse(localStorage.getItem("tuesday"))
let wednesday = JSON.parse(localStorage.getItem("wednesday"))
let thursday = JSON.parse(localStorage.getItem("thursday"))
let friday = JSON.parse(localStorage.getItem("friday"))
let saturday = JSON.parse(localStorage.getItem("saturday"))
let sunday = JSON.parse(localStorage.getItem("sunday"))

const addDayResult = document.querySelector("#add-day-result")
const dayResultInput = document.querySelector(".day-result-input")
const submitBtn = document.querySelector("#submit-btn")

const date = new Date()
const day = date.getDay()

class Routine {
    constructor(meditation, workout, linkedin, study, extraCash) {
      this.meditation = meditation;
      this.workout = workout;
      this.linkedin = linkedin;
      this.study = study;
      this.extraCash = extraCash;
    }
}

function getInputValue() {
    const meditation = document.querySelector("#meditation")
    const workout = document.querySelector("#workout")
    const linkedin = document.querySelector("#linkedin")
    const study = document.querySelector("#study")
    const extraCash = document.querySelector("#extra-cash")

    if(day == 1) {
        localStorage.setItem("monday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 2) {
        localStorage.setItem("tuesday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 3) {
        localStorage.setItem("wednesday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 4) {
        localStorage.setItem("thursday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 5) {
        localStorage.setItem("friday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 6) {
        localStorage.setItem("saturday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
    if(day == 0) {
        localStorage.setItem("sunday", JSON.stringify(new Routine(meditation.checked, workout.checked, linkedin.checked, study.checked, extraCash.value)))
    }
}

function showResult() {
    if(monday) {
        const mondayTable = document.querySelectorAll(".monday")
        mondayTable.forEach(element => {
            if(element.classList.contains("meditation") && monday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && monday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && monday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && monday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && monday.extraCash){
                element.innerHTML = monday.extraCash
            }
        });
    }

    if(tuesday) {
        const tuesdayTable = document.querySelectorAll(".tuesday")
        tuesdayTable.forEach(element => {
            if(element.classList.contains("meditation") && tuesday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && tuesday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && tuesday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && tuesday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && tuesday.extraCash){
                element.innerHTML = tuesday.extraCash
            }
        });
    }

    if(wednesday) {
        const wednesdayTable = document.querySelectorAll(".wednesday")
        wednesdayTable.forEach(element => {
            if(element.classList.contains("meditation") && wednesday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && wednesday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && wednesday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && wednesday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && wednesday.extraCash){
                element.innerHTML = wednesday.extraCash
            }
        });
    }
    
    if(thursday) {
        const thursdayTable = document.querySelectorAll(".thursday")
        thursdayTable.forEach(element => {
            if(element.classList.contains("meditation") && thursday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && thursday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && thursday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && thursday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && thursday.extraCash){
                element.innerHTML = thursday.extraCash
            }
        });
    }
    
    if(friday) {
        const fridayTable = document.querySelectorAll(".friday")
        fridayTable.forEach(element => {
            if(element.classList.contains("meditation") && friday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && friday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && friday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && friday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && friday.extraCash){
                element.innerHTML = friday.extraCash
            }
        });
    }
    
    if(saturday) {
        const saturdayTable = document.querySelectorAll(".saturday")
        saturdayTable.forEach(element => {
            if(element.classList.contains("meditation") && saturday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && saturday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && saturday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && saturday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && saturday.extraCash){
                element.innerHTML = saturday.extraCash
            }
        });
    }
    
    if(sunday) {
        const sundayTable = document.querySelectorAll(".sunday")
        sundayTable.forEach(element => {
            if(element.classList.contains("meditation") && sunday.meditation){
                element.classList.add("show")
            }
            if(element.classList.contains("workout") && sunday.workout){
                element.classList.add("show")
            }
            if(element.classList.contains("study") && sunday.study){
                element.classList.add("show")
            }
            if(element.classList.contains("linkedin") && sunday.linkedin){
                element.classList.add("show")
            }
            if(element.classList.contains("extra-cash") && sunday.extraCash){
                element.innerHTML = sunday.extraCash
            }
        });
    }
}

addDayResult.addEventListener("click", (e) => {
    e.preventDefault()

    dayResultInput.classList.add("show")
})

submitBtn.addEventListener("click", () => {
    getInputValue()

    dayResultInput.classList.remove("show")
})

showResult()



