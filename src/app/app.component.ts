import { DataService } from './data.service';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <p [@myAnimations]='state' (click)="animateMe()">i will animate</p>
  // `,
  styleUrls: ['./app.component.css'],
  // styles: [`
  //     p{
  //       width:200px;
  //       background:lightgray;
  //       margin: 100px auto;
  //       text-align:center;
  //       padding:20px;
  //       font-size:1.5em;
  //     }
  // `],

})
export class AppComponent {
  title = 'app';
}
