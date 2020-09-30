import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText = '';
  randomText = lorem.sentence();
  

  onInput(value: string){
    this.enteredText = value;
  }

  compare(letter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return "grey";
    }
    
    return letter === enteredLetter? 'green': 'red';
  }
}
