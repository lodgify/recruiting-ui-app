import {ONE_DAY} from './constants';

export const calcTotalNights = (from, to) => {
    return(Math.round(Math.abs((from.getTime() - to.getTime())/(ONE_DAY)))-1);
}

export const formatShortDate = (date) => {
    return date.toLocaleDateString('en-US', {month: "short", day: "numeric", year: "numeric"});
}