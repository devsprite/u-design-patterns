import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbers = new NumbersCollection([1, 10, 5, 0, -1]);
const sortNumbers = new Sorter(numbers);

sortNumbers.sort();

console.log(numbers.data);
