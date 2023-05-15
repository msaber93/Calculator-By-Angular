import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resulte = '';

  getAction(item : any) {
    this.resulte += item; // 5+7 not 7 after remove 5
  }

  getEqual() {
    this.resulte = eval(this.resulte).toFixed(1);
  }

  reset() {
    this.resulte = '';
  }
}
