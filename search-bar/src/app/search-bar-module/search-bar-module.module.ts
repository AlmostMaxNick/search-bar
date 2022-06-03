import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarModuleRoutingModule } from './search-bar-module-routing.module';
import { SearchBarModuleComponent } from './search-bar-module.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { OptionsComponent } from './components/options/options.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SearchBarModuleComponent,
    SearchBarComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    SearchBarModuleRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class SearchBarModuleModule { }
