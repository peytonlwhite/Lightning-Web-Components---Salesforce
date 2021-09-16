import { LightningElement,api} from "lwc";

export default class App extends LightningElement {
   infoText;
   hiddenPill = false;

    showPill = true;

    handleRemoveOnly(event) {
        event.preventDefault();
        this.showPill = !this.showPill;
    }

  handleClick(event) {
          // this won't run when you click the remove button
          alert('The pill was clicked!');
      }
  
}
