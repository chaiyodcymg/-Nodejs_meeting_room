
const cal_diff_dates =(start , end )=>{
    let startdate = new Date(start).valueOf()
    let enddate = new Date(end).valueOf()
    let dif = (enddate - startdate);
    let dif2 = Math.round((dif/1000)/60);
    return dif2
}
module.exports = cal_diff_dates