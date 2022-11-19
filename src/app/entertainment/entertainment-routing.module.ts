import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { EntertainmentPageComponent } from './components/entertainment-page/entertainment-page.component';

const routes: Routes = [
    {
        path: ':type/:id',
        canActivate: [AuthGuard],
        component: EntertainmentPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntertainmentRoutingModule { }
