import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { User } from './user';
import { Repos } from './repos';



@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  user: User;
  repos: Repos;
  repoData = [];
  newUserData: any = [];

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", new Date(), 0);
    this.repos = new Repos("", "", "", new Date());
  }
  getuserData(username: string) {
    interface ApiResponse {
      login: string;
      bio: string;
      avatar_url: string;
      created_at: Date;

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>( "https://api.github.com/users/"+ username).toPromise().then(response => {
        this.user.login = response.login;
        this.user.bio = response.bio;
        this.user.avatar_url = response.avatar_url;
        this.user.created_at = response.created_at;


        resolve(response)
      }, error => {
        reject(Error)
      })
      this.http.get<any>(environment.apiUrl + username + "/repos").toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.newUserData = new Repos(response[i].name, response[i].description, response[i].clone_url, response[i].updated_at)
          this.repoData.push(this.newUserData);
        }
        resolve(response)
      }
        , error => {
          reject(error)
        })

    })
    return promise;


  }
}
