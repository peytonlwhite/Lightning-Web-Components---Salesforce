import { LightningElement } from "lwc";

export default class App extends LightningElement {
  text = '';

  bindText($event)
  {
    this.text = event.target.value;
  }

}
