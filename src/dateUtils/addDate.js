import quasarDate from '../quasarDate';
import toTimestamp from './toTimestamp';

export default (time, unit, add) => quasarDate.addToDate(toTimestamp(time), { [unit]: add });
