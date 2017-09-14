import { Component, OnInit } from '@angular/core';
import { TestEnum } from '../test-enum.enum';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  color: string;
  testValue: string;
  price = 10.23232;
  constructor() { }

  ngOnInit() {
  }

  getEnum() {
    this.testValue = TestEnum.TM;
  }
}
