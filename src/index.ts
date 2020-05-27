import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([1, 10, 5, 0, -1]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection('Hi there');
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(232);
linkedList.add(21);
linkedList.add(-123);
linkedList.add(123);
linkedList.sort();
linkedList.print();
