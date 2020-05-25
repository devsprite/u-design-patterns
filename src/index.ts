import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbers = new NumbersCollection([1, 10, 5, 0, -1]);
const sorterNumbers = new Sorter(numbers);
sorterNumbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('Hi there');
const sorterCharacters = new Sorter(characters);
sorterCharacters.sort();
console.log(characters.data);
