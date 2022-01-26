import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorterN = new Sorter(numbersCollection);
sorterN.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
const sorterC = new Sorter(charactersCollection);
sorterC.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorterL = new Sorter(linkedList);
sorterL.sort();
linkedList.print();
