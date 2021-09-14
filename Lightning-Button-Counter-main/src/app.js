import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  count = 0;


  counterUp()
  {
    console.log('bind text here');

    this.count++;

  }

  counter($event)
  {
    if(event.target.dataset.name == 'down')
    {
      this.count--;
    }
    else 
    {
      this.count++;
    }
  }

    counterDown()
  {
    console.log('bind text here');

    this.count--;

  }

}
