import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarModuleComponent } from './search-bar-module.component';

const routes: Routes = [{ path: '', component: SearchBarModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBarModuleRoutingModule { }
