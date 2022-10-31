import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpPageComponent } from './components/sing-up-page/sing-up-page.component';

const routes: Routes = [
    {
        path: '',
        component: PresentationPageComponent,
        data: { animation: 'Presentation' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'Login' }
    }, 
    {
        path: 'singUp',
        component: SingUpPageComponent,
        data: { animation: 'SingUp' }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
