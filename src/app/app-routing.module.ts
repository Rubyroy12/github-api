import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'search', component: SearchComponent},
  {path: '',redirectTo:"/users", pathMatch:"full"},
  {path: '**', component: NotFoundComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
