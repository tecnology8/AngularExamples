import { Component, Input } from '@angular/core';

@Component({
  selector:'custom-hello',
  templateUrl:'./hello.component.html',
  styleUrls:['./hello.component.css']
})
export class HelloComponent{
 @Input() name:string;
// public name:string;
// public lastname:string;
// public fullname:string;

    constructor(){
      // this.name = 'Ruddy Enmanuel'
      // this.lastname = 'Cruceta Mateo'
      // this.fullname  = this.name + ' ' + this.lastname;
  }

}