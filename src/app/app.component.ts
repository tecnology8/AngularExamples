import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //name = 'Angular';
  public myName:string = "Ruddy Cruceta";
  public titleStyle:{};
  public counter = 0;
  onSayHello(message){
   console.log(message);
   this.counter++;
   this.updateTitleStyles();
  }

updateTitleStyles(){
  this.titleStyle={
   'margin-top':'40px',
   'color': this.counter < 3 ? 'green' : 'goldenrod'
  }
}
  updateNameClasses(name:string){
    return{
      'error': name.length <= 3,
      'warning': name.length >3 && name.length <=6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }
}