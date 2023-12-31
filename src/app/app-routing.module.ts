import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RollComponent } from './roll/roll.component';

const routes: Routes = [{
  path: 'roll', component: RollComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
