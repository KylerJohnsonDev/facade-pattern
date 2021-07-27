import { Book } from "../models/book";

export function generateMockBooks(): Book[] {
  return [
    new Book('The Phoenix Project', 'Gene Kim, Kevin Behr, and George Spafford', 'Professional Development', 25),
    new Book('The Lost Symbol', 'Dan Brown', 'Mystery', 35)
  ]
}
