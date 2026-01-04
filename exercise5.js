// Задание 5. Запланированная встреча
// Напишите функцию, которая принимает в качестве первого аргумента время начала совещания в 24-часовом формате (в виде строки), а в качестве второго аргумента — продолжительность совещания в минутах.

// Функция должна возвращать true, если встреча полностью приходится на рабочий день. Если встреча выходит за рамки рабочего времени, возвращать false.
// Рабочее время определяется произвольно следующим образом:


const dayStart = "07:30"; // начало дня
const dayEnd = "17:45"; // конец дня


// function scheduleMeeting(startTime, durationMinutes) {
//     const [hours, minutes] = startTime.split(":").map(n => Number(n));
    
//     const [startHours, startMinutes] = dayStart.split(":").map(n => Number(n));
    
//     const [endHours, endMinutes] = dayEnd.split(":").map(n => Number(n));
    
//     const meetingStartInMinutes = hours * 60 + minutes;
//     const meetingEndInMinutes = meetingStartInMinutes + durationMinutes;
//     const dayStartInMinutes = startHours * 60 + startMinutes;
//     const dayEndInMinutes = endHours * 60 + endMinutes;
    
//     return meetingStartInMinutes >= dayStartInMinutes && 
//            meetingEndInMinutes <= dayEndInMinutes;
// }

function scheduleMeeting(startTime, durationMinutes) {
    const [hours, minutes] = startTime.split(":").map(n => Number(n));
    const [startHours, startMinutes] = dayStart.split(":").map(n => Number(n));
    const [endHours, endMinutes] = dayEnd.split(":").map(n => Number(n));
    
    const dayStartTime = new Date();
    dayStartTime.setHours(startHours);
    dayStartTime.setMinutes(startMinutes);
    dayStartTime.setSeconds(0);
    dayStartTime.setMilliseconds(0);
    
    const dayEndTime = new Date();
    dayEndTime.setHours(endHours);
    dayEndTime.setMinutes(endMinutes);
    dayEndTime.setSeconds(0);
    dayEndTime.setMilliseconds(0);
    
    const meetingStartTime = new Date();
    meetingStartTime.setHours(hours);
    meetingStartTime.setMinutes(minutes);
    meetingStartTime.setSeconds(0);
    meetingStartTime.setMilliseconds(0);
    
    const meetingEndTime = new Date();
    meetingEndTime.setHours(hours);
    meetingEndTime.setMinutes(minutes + durationMinutes);
    meetingEndTime.setSeconds(0);
    meetingEndTime.setMilliseconds(0);
    
    return meetingStartTime >= dayStartTime && meetingEndTime <= dayEndTime;
}

console.log(scheduleMeeting("07:30", 15));  // true
console.log(scheduleMeeting("07:15", 30));  // false
console.log(scheduleMeeting("7:30", 30));   // true
console.log(scheduleMeeting("11:30", 60));  // true
console.log(scheduleMeeting("17:00", 45));  // true
console.log(scheduleMeeting("17:30", 30));  // false
console.log(scheduleMeeting("18:00", 15));  // false


// Вход	            Выход
// "07:30" 15	    истинный
// "07:15" 30	    ЛОЖЬ
// "7:30"  30	    истинный
// "11:30" 60	    истинный
// "17:00" 45	    истинный
// "17:30" 30	    ЛОЖЬ
// "18:00" 15	    ЛОЖЬ