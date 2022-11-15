import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent, 
        canActivate: [AuthGuard],
        data: {animation: 'Home'}
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
