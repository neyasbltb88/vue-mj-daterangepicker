import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (time, unit) => quasarDate.endOfDate(toTimestamp(time), unit);
