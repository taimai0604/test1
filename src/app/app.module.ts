import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // import animatin

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { PropertyEventBindingComponent } from './property-event-binding/property-event-binding.component';
import { ClassStyleCssComponent } from './class-style-css/class-style-css.component';

// import { DataService } from './data.service';
import { DemoServicesComponent } from './demo-services/demo-services.component';
import { DemoAnimationComponent } from './demo-animation/demo-animation.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

// service
import { DataService } from './services/data.service';
import { UserComponent } from './components/user/user.component';
import { PeopleListComponent } from './manager-people/people-list/people-list.component'; // import service
import { PeopleService } from './manager-people/people.service';
import { PersonDetailComponent } from './manager-people/person-detail/person-detail.component';

// routing
import { routing } from './manager-people/people.router';

// guard
import { TestGuardGuard } from './test/test-guard.guard';
const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'new-component', component: MyNewComponentComponent },
  { path: 'event-binding', component: PropertyEventBindingComponent },
  { path: 'style-css', component: ClassStyleCssComponent },
  { path: 'demo-service', component: DemoServicesComponent },
  { path: 'demo-animation', component: DemoAnimationComponent },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    PropertyEventBindingComponent,
    ClassStyleCssComponent,
    DemoServicesComponent,
    DemoAnimationComponent,
    PageNotFoundComponentComponent,
    UserComponent,
    PeopleListComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
