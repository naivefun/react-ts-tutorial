import { trimEnd } from 'lodash';

console.log(trimEnd('Hello Typescript////', '/'));

export interface Note {
  name: string;
  content: string;
}

const note: Note = {
  name: 'Hello',
  content: 'world'
};

console.log('note', note);
