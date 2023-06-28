// https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    return pageIndex < 0 || pageIndex >= this.pageCount()
      ? -1
      : pageIndex === this.pageCount() - 1
      ? this.itemCount() % this.itemsPerPage || this.itemsPerPage
      : this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    return itemIndex < 0 || itemIndex >= this.itemCount()
      ? -1
      : Math.floor(itemIndex / this.itemsPerPage);
  }
}

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
const helper = new PaginationHelper(collection, 5);

console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(3));
console.log(helper.pageIndex(12));
