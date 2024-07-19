import { makeAutoObservable } from "mobx";
import { store } from "../main";

class OffsetStore {
  offset: number = 0;
  amount: number;
  currentPage: number = 1;
  constructor(amount: number) {
    makeAutoObservable(this);
    this.amount = amount;
  }
  deleteItem() {
    this.offset++;
    console.log(this.offset);
    return this.offset;
  }
  addPage() {
    this.offset += 20;
    this.currentPage++;
    return this.offset;
  }
  removePage() {
    this.offset -= 20;
    this.currentPage--;
    return this.offset;
  }
  changeLimit(amount: number) {
    this.amount = amount;
  }
  switchPage(page: number) {
    this.currentPage = page;
    this.offset = this.amount * page;
    store.trackerStore.switchPage()
  }
  get value() {
    return this.offset;
  }
}

export const offsetStore = new OffsetStore(20);
