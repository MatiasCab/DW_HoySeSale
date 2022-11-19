import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SearchPageComponent } from './components/search-page/search-page.component';
const routes: Routes = [
    {
        path: '',
        component: SearchPageComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }
