import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (date1, date2, unit) => quasarDate.isSameDate(toTimestamp(date1), toTimestamp(date2), unit);
