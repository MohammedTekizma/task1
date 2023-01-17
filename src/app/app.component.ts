import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFirst = true;
  mID = "hello@gmail.com";
  name = "hello";
  pwd = "helloworld";
  pwd2 = "helloworld";
  lct = "Bangalore";
  toggle(){
  this.showFirst = !this.showFirst;
  }
}