export const timeFromSeconds = (timeInSec) => {
    let sec = (timeInSec % 60);
    let min = (timeInSec - sec) / 60;

    let parsedSec = sec < 10 ? '0' + sec : sec;
    let parsedMin = min < 10 ? '0' + min : min;

    return parsedMin + ':' + parsedSec;
}