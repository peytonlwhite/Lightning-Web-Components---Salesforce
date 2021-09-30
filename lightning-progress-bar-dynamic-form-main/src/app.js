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
    var canAdd = null;
    var varName = event.target.dataset.var;
    var varPastVarValue = this[varName];
    this[varName] = event.target.value;
    console.log('varpastval: ' + varPastVarValue);
    console.log('varName: ' + this[varName]);
    //console.log('varName: ' + this[varName].length);

    if(varName != 'birthday')
    {
      if(this[varName].length >= 1) {
        if(varPastVarValue == '')
        {
          canAdd = true;
        }
      }
      else if(this[varName].length == 0 && varPastVarValue != ''){
        canAdd = false;
      }
    }
    else if(varName == 'birthday')
    {
      console.log('here');
      if(varPastVarValue == null && this[varName] != null)
      {
        canAdd = true;
      }
      else if(varPastVarValue != null && this[varName] == null) 
      {
        canAdd = false;
      }
    }
    

    console.log('Can add: ' + canAdd);
    if(canAdd == false)
    {
      this.progress -=25;
    }
    else if(canAdd == true){
          this.progress +=25;
    }

    //doubleCheck
    


  }
/*
switch(varName)
       {
          case 'firstName':
          this.progress += 25;
          break;
          case 'lastName':
          this.progress += 25;
          break;
          case 'birthday':
          this.progress += 25; 
          break;
          case 'favColor':
          this.progress += 25;
          break;
        }

*/

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


 
}
