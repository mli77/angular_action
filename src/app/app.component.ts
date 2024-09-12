import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { green, red } from './color.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color$: Observable<string>;
  
  constructor(private colorStore: Store<{ color: string }>) {
    this.color$ = colorStore.select('color');
  }

  red() {
    this.colorStore.dispatch(red());
  }

  green() {
    this.colorStore.dispatch(green());
  }

}
