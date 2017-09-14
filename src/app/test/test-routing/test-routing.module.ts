import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from '../test-component/test-component.component';
import { Test1Component } from '../test1/test1.component';
import { TestGuardGuard } from '../test-guard.guard';
import { Test1Guard } from '../test1.guard';

const routes: Routes = [
  {
    path: '',
    component: TestComponentComponent,
    canActivate: [TestGuardGuard],
    canActivateChild: [Test1Guard],
    children: [
      {
        path: 'test1',
        component: Test1Component
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestRoutingModule { }
