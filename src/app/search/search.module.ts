import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchEntertainmentComponent } from './components/search-entertainment/search-entertainment.component';
import { DisplaySearchInfoComponent } from './components/display-search-info/display-search-info.component';
import { SearchPageComponent } from './components/search-page/search-page.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    SearchRoutingModule,
  ],
  declarations: [
    SearchPageComponent,
    SearchEntertainmentComponent,
    DisplaySearchInfoComponent
  ]
})
export class SearchModule { }
