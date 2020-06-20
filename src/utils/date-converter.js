import moment from "moment";

export default class DateConverter {
    static _defaultFormat = 'YYYY-MM-DD';

    static convertDateToDefaultFormat(date) {
        return moment(date).format(this._defaultFormat);
    };
};