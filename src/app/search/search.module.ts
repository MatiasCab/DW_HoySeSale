import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchEntertainmentComponent } from './search-entertainment/search-entertainment.component';
import { DisplaySearchInfoComponent } from './display-search-info/display-search-info.component';


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
