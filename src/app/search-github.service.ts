import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user: User;
  repos: Repos;


  constructor(private http: HttpClient) { 
    this.user = new User("","", "", "",new Date,0);
    this.repos= new Repos()
  }
  GithubSearch(){
    interface ApiResponse{
      login: string;
      bio: string;
      location: string;
      avatar_url: string;
      created_at: Date;
      public_repos:number;
    }
    let promise = new Promise((resolve, reject) =>{
      this.http.get<ApiResponse>(environment.githubApiKey).toPromise().then((response=>{
        this.user.login = response.login;
      }))
    })

    
  }
}
