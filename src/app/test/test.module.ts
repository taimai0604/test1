import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from '../test/test-component/test-component.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { TestPipePipe } from './test-pipe.pipe';
import { TestServiceService } from './test-service.service';
import { TestGuardGuard } from './test-guard.guard';
import { TestRoutingModule } from './test-routing/test-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test1Guard } from './test1.guard';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponentComponent, TestDirectiveDirective, TestPipePipe, Test1Component],
  providers: [TestServiceService, TestGuardGuard, Test1Guard]
})
export class TestModule { }
