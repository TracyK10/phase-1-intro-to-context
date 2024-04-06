// Your code here
function createEmployeeRecord(firstName, familyName, title, payPerHour){
    // creating a new record
    let record = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

function createEmployeeRecords(array){
    // Use the map function to apply the createEmployeeRecord function to each element in the array
    let record =[]
    array.map(record => record.push(createEmployeeRecord.apply(null, record)))
}

function createTimeInEvent(dateStamp){
    // Split the date string into a date and hour string
    let [date, hour] = dateStamp.split(' ');
     // Add a new time in event to the employee record with the given date and hour
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateStamp){
    // Split the date string into a date and hour string
    let [date, hour] = dateStamp.split(' ');
     // Add a new time in event to the employee record with the given date and hour
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    });
    return this;
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
    return 0
}

function wagesEarnedOnDate(record, date){
    // Calculate the hours worked on the given date
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
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
    array.forEach(record => {
        totalPayroll += allWagesFor.call(record);
    });
    return totalPayroll;
}

// finding employees by first names
function findEmployeeByFirstName(array, firstName){
    array.find(record => record.firstName === firstName);
}