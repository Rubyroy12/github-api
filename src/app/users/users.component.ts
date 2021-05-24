import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  repoDetails=[]
  searchservice:SearchGithubService;


  constructor(searchservice:SearchGithubService) {
    this.searchservice=searchservice;


  }

  ngOnInit(): void {
    this.user=this.searchservice.user;
    this.repoDetails=this.searchservice.repoData;
    

  }

}
