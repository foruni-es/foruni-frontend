// date es un objecto formado por los atributos days, hours, minutes, seconds, milliseconds. Este objecto nos lo da la base de datos al restar dos timestamps
const elapsedTime = (date) => {

    const { days = null, hours = null, minutes = null, seconds = null } = date;
    
    let yearsDifference = days !== null ? parseInt(days / 365, 10) : 0;
    let monthDifference = yearsDifference === 0 ? parseInt(days / 30, 10) : 0;

    if (yearsDifference > 0) return `${yearsDifference} ${yearsDifference === 1 ? " año" : " años"}`;
    else if (monthDifference > 0) return `${monthDifference} ${monthDifference === 1 ? " mes" : " meses"}`;
    else if (days !== null && days > 0) return `${days} ${days === 1 ? " día" : " días"}`;
    else if (hours !== null && hours > 0) return `${hours} ${hours === 1 ? " hora" : " horas"}`;
    else if (minutes !== null && minutes > 0) return `${minutes} ${minutes === 1 ? " minuto" : " minutos"}`;
    else if (seconds !== null && seconds > 0) return `${seconds} ${seconds === 1 ? " segundo" : " segundos"}`
    else return 'justo ahora';
}

export default elapsedTime;