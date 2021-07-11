import {observable, makeAutoObservable} from 'mobx';

class Store {
  SMSString = '';
  classID = '';
  constructor() {
    makeAutoObservable(this);
  }

  setSMSString(res) {
    this.SMSString = res;
  }
  setClassID(head) {
    this.classID = head;
  }
}

export default new Store();