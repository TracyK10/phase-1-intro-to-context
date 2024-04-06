// Your code here
function createEmployeeRecord(first_name, family_name, title, pay_per_hour){
    // creating a new record
    let record = {
        firstName: first_name,
        familyName: family_name,
        title: title,
        timeInEvents:[],
        timeOutEvents: []
    }
    return record
}

function createEmployeeRecords(array){
    // Use the map function to apply the createEmployeeRecord function to each element in the array
    array.map(record => createEmployeeRecord(record))
    return array
}

function createTimeInEvent(recordObj, date){
    // Split the date string into a date and hour string
    let [date, hour] = dateStamp.split(' ');
     // Add a new time in event to the employee record with the given date and hour
    recordObj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return recordObj;
}

function createTimeOutEvent(recordObj, date){
    // Split the date string into a date and hour string
    let [date, hour] = dateStamp.split(' ');
     // Add a new time in event to the employee record with the given date and hour
    recordObj.timeOutEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return recordObj;
}

function hoursWorkedOnDate(obj, date){
    // Find the time in event for the given date
    let timeInEvent = record.timeInEvents.find(event => event.date === date);
    // Find the time out event for the given date
    let timeOutEvent = record.timeOutEvents.find(event => event.date === date);
    // If both a time in and time out event exist for the given date
    if (timeInEvent && timeOutEvent) {
        // Calculate the hours worked by subtracting the time out hour from the time in hour and dividing by 100
        return (timeOutEvent.hour - timeInEvent.hour) / 100;
    }
}

function wagesEarnedOnDate(record, date){
    // Calculate the hours worked on the given date
    let hoursWorked = hoursWorkedOnDate(record, date);
    return hoursWorked * record.payPerHour;
}

function allWagesFor(obj){
    let totalWages = 0;
    // Iterate over the time in events for the employee record
    obj.timeInEvents.forEach(event => {
        totalWages += wagesEarnedOnDate(obj, event.date);
    });
    return totalWages;
}

function calculatePayroll(array){
    // accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.
    let totalPayroll = 0;
    records.forEach(record => {
        totalPayroll += allWagesFor(record);
    });
    return totalPayroll;
}