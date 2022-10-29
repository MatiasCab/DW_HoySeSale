import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentPageComponent } from './components/entertainment-page/entertainment-page.component';

const routes: Routes = [
    {
        path: ':id',
        component: EntertainmentPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntertainmentRoutingModule { }
