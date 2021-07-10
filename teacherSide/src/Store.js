import {observable, makeAutoObservable} from 'mobx';

class Store {
  SMSString = '';
  Heading = '';
  constructor() {
    makeAutoObservable(this);
  }

  setSMSString(res) {
    this.SMSString = res;
  }
  setHeading(head) {
    this.Heading = head;
  }
}

export default new Store();