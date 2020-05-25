import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

// const numbers = new NumbersCollection([1, 10, 5, 0, -1]);
// const sortNumbers = new Sorter(numbers);

// sortNumbers.sort();
// console.log(numbers.data);

const characters = new CharactersCollection('Hi there');
const sorter = new Sorter(characters);
sorter.sort();
console.log(characters.data);
