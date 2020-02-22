import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (time, unit) => quasarDate.startOfDate(toTimestamp(time), unit);
