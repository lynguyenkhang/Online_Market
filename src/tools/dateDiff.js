const DateDiff = {

    inSeconds: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt((t2-t1)/(1000));
    },

    inMinutes: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt((t2-t1)/(60*1000));
    },

    inHours: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();
        return parseInt((t2-t1)/(60*60*1000));
    },


    inDays: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        const t2 = d2.getTime();
        const t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        const d1Y = d1.getFullYear();
        const d2Y = d2.getFullYear();
        const d1M = d1.getMonth();
        const d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}



const DateDiffFunction = (d1, d2) => {
    const { inYears, inMonths, inWeeks, inDays, inHours, inMinutes, inSeconds } = DateDiff
    if(inYears(d1, d2) > 0) return `${inYears(d1,d2)} năm`
    if(inMonths(d1, d2) > 0) return `${inMonths(d1,d2)} tháng`
    if(inWeeks(d1, d2) > 0) return `${inWeeks(d1,d2)} tuần`
    if(inDays(d1, d2) > 0) return `${inDays(d1,d2)} ngày`
    if(inHours(d1, d2) > 0) return `${inHours(d1,d2)} giờ`
    if(inMinutes(d1, d2) > 0) return `${inMinutes(d1,d2)} phút`
    if(inSeconds(d1, d2) > 0) return `${inSeconds(d1,d2)} giây`
    return `0 giây`
}

export default DateDiffFunction
