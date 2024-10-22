export const dollarUS = (number, maximumSignificantDigits = 10) => {
    if (isNaN(number)) return "$0";
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumSignificantDigits,
        minimumFractionDigits: 2,
    }).format(number);
};
  export const gbpCUR = (number, maximumSignificantDigits = 10) => {
    if (isNaN(number)) return "£0";
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
        maximumSignificantDigits,
        minimumFractionDigits: 2,
    }).format(number);
};
  
export const formatDate = (date) => {
if (date === null) return "";
const DateObj = new Date(date);
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
return `${DateObj.getDate()} ${
    months[DateObj.getMonth()]
} ${DateObj.getFullYear()}`;
};

export const formatDateTime = (dateTime) => {
if (dateTime === null) return "";
const DateTimeObj = new Date(dateTime);
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
return `${DateTimeObj.getDate()} ${
    months[DateTimeObj.getMonth()]
} ${DateTimeObj.getFullYear()} ${DateTimeObj.getHours()}:${DateTimeObj.getMinutes()}:${DateTimeObj.getSeconds()}`;
};

export const formatAMPM = (date)=>{
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}