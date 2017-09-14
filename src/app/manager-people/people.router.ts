import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { DemoAnimationComponent } from '../demo-animation/demo-animation.component';

import { TestGuardGuard } from '../test/test-guard.guard';

const routers: Routes = [
    {
        path: 'persons',
        component: PeopleListComponent,
    },
    // {
    //     path: '',
    //     redirectTo: '/persons',
    //     pathMatch: 'full'
    // },
    {
        path: '', redirectTo: '/test', pathMatch: 'full'
    },
    {
        path: 'person/:id',
        component: PersonDetailComponent
    },
    {
        path: 'animation',
        component: DemoAnimationComponent
    },
    {
        path: 'test',
        loadChildren: './test/test.module#TestModule'
    }
];

export const routing = RouterModule.forRoot(routers);
