import { v4 as uuidv4 } from 'uuid';

export class Book {
  id: string;
  title: string;
  author: string;
  value: number;

  constructor(title: string, author: string, value: number) {
    this.id = this.generateId();
    this.title = title;
    this.author = author;
    this.value = value;
  }

  generateId() {
    return uuidv4();
  }
}
