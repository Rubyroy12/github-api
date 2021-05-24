import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'search', component: SearchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
