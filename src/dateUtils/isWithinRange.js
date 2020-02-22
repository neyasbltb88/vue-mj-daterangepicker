import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (dateTarget, dateFrom, dateTo) =>
    quasarDate.isBetweenDates(toTimestamp(dateTarget), toTimestamp(dateFrom), toTimestamp(dateTo));
