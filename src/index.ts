import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

const numbers = new NumbersCollection([1, 10, 5, 0, -1]);
const sorterNumbers = new Sorter(numbers);
sorterNumbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('Hi there');
const sorterCharacters = new Sorter(characters);
sorterCharacters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(232);
linkedList.add(21);
linkedList.add(-123);
linkedList.add(123);
const sorterLinkedList = new Sorter(linkedList);
sorterLinkedList.sort();
linkedList.print();
