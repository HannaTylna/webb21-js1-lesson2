/*
const start = 8.5;
const finish = 20.5;
const hourSalary = 200;
const weekDay = "Sunday";

let dayHour = finish - start;

const extraPayment = dayHour > 8 ? (dayHour - 8) * hourSalary * 1.5 : 0;
let hourRate = dayHour * hourSalary + extraPayment;


if(dayHour > 12) {
    console.log("Man får inte jobba mer än 12 timmar!")
} else if(weekDay === "Sarturday" || weekDay === "Sunday"){
    hourRateWeekend = hourRate * 2;
    console.log(`Du jobbar ${dayHour}`);
    console.log(hourRateWeekend);
} else {
    console.log(`Du jobbar ${dayHour}`);
    console.log(hourRate);
}
*/

const day = "Monday"
const startTime = 8.5
const endTime = 17
const hourlySalary = 100

const maximumHours = 12
const extraHoursCountsFrom = 8

const totalHours = endTime - startTime

let extraHours = 0
let isWeekend = false

if(totalHours > extraHoursCountsFrom) {
    extraHours = totalHours - extraHoursCountsFrom
}

if(day === "Saturday" || day === "Sunday") {
    isWeekend = true
}

if(totalHours < maximumHours) {
    let normalSalary
    let extraSalary
    let weekendSalary
    if(isWeekend) {
        normalSalary = totalHours * hourlySalary
        extraSalary = 0
        weekendSalary = normalSalary
    } else {
        normalSalary = totalHours * hourlySalary
        extraSalary = extraHours * (hourlySalary * 0.5)
        weekendSalary = 0
    }

    const totalSalary = normalSalary + extraSalary + weekendSalary
    console.log(`Your total salary is: ${totalSalary}`)
    console.log(`Normal Salary: ${normalSalary}`)
    console.log(`Extra hours Salary: ${extraSalary}`)
    console.log(`Weekend Salary: ${weekendSalary}`)
} else {
    console.log(`Please contant your Union. You should not work more than ${maximumHours} hours`)
}