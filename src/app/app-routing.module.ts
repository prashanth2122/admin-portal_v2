import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { CandidatesViewComponent } from './components/onboarding/candidates-view/candidates-view.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'onborading-candidates',component:CandidatesViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
