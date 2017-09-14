import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls: ['./demo-animation.component.css'],
  animations: [
    trigger('myAnimations', [
      state('small', style([{
        transform: 'scale(1)'
      }])),
      state('large', style([{
        transform: 'scale(1.2)'
      }])),
      transition('small <=> large', [animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ]))]),
    ]),
    trigger('popOverState', [
      state('show', style([{
        opacity: 1
      }])),
      state('hide', style([{
        opacity: 0
      }])),
      transition('show => hide', [animate('300ms ease-out')]),
      transition('hide => show', [animate('600ms ease-in')]),
    ])
  ]
})
export class DemoAnimationComponent implements OnInit {
  state = 'small';

  show = false;

  constructor() { }

  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
