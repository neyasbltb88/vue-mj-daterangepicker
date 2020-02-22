import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (time, ...rest) => quasarDate.formatDate(toTimestamp(time), ...rest);
