import { LightningElement } from "lwc";

export default class App extends LightningElement {
  firstName = '';
  lastName = '';
  birthday;
  favColor = '';
  formComplete = false;
  submitClicked = false;
  progress = 0;

  bindText($event)
  {
    var varName = event.target.dataset.var;
    this[varName] = event.target.value;
    if(this[varName].length == 1)
    {
      this.progress +=34;
    }
    if(varName == 'favColor' && this.favColor.length == 7)
    {
      this.progress +=34;
    }
    console.log('fav color: ' + this.favColor.length)
  }

  formSubmit()
  {
    if(this.progress >= 100)
    {
      this.formComplete = true;
      this.submitClicked = false;
    }
    else 
    {
      this.formComplete = false;
      this.submitClicked = true;
    }
  }

  reset()
  {
    this.firstName = '';
    this.lastName = '';
    this.birthday;
    this.favColor = '';
    this.formComplete = false;
    this.submitClicked = false;
    this.progress = 0;
  }

}
