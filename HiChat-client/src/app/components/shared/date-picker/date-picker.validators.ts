import { FormControl } from '@angular/forms';

function changeFormat(date: any) {
    // date comes in strcture like { year: 2017, month: 8, day: 8 }
    const copyOfOriginalDt = { ...date };
    if (date) {
        copyOfOriginalDt.month = date.month < 10 ? '0' + date.month : date.month;
        copyOfOriginalDt.day = date.day < 10 ? '0' + date.day : date.day;
        copyOfOriginalDt.year = date.year
        const formatedDate = `${copyOfOriginalDt.month}/${copyOfOriginalDt.day}/${copyOfOriginalDt.year}`;
        return formatedDate;
    }
}

function checkDateRange(selectedDate, maxDate) {
    if (maxDate instanceof Date) {
        // convert maxDate to the following structure
        maxDate = {
            year: maxDate.getFullYear(), 
            month: maxDate.getMonth() + 1, 
            day: maxDate.getDate()
        }
    }
    // Initialize MaxDt and SelectedDt
    // According to the specification, the maximum date is new Date(8640000000000000) (Sat, 13 Sep 275760 00:00:00 GMT)
    let MaxDt: Date = new Date(8640000000000000), SelectedDt: Date = new Date();
    if (selectedDate && maxDate && maxDate.year && maxDate.month && maxDate.day) {
        MaxDt = new Date(maxDate.year, maxDate.month - 1, maxDate.day);
        SelectedDt = new Date(selectedDate.year, selectedDate.month - 1, selectedDate.day);
    }
    console.log(MaxDt);
    console.log(SelectedDt);
    return SelectedDt <= MaxDt;
}

const pattern = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
export function DatepickerValidator(require?: any, maxDate?: any) {
    return function validateDatepicker(c: FormControl) {
        // console.log('validator');
        // console.log(require);
        // console.log(maxDate);
        // console.log(c.value);
        // console.log(changeFormat(c.value));
        // console.log(pattern.test(changeFormat(c.value)));
        // console.log('-------');
        let err = {
          datepickerErrMsg: {
            given: c.value,
            required: c.value == null ? 'Datepicker is required': null,
            format: !pattern.test(changeFormat(c.value)) ? 'Format is incorrect' : null,
            futureDate: !checkDateRange(c.value, maxDate) ? 'Cannot enter a future date' : null
          } 
        };
        // required && valid format && valid date range
        const result = c.value !== null && pattern.test(changeFormat(c.value)) && checkDateRange(c.value, maxDate) ? null : err; 
        // console.log('result', result);
        return require ? result : null;
    }
}