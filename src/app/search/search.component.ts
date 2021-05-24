import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user: User;
  username: string;
  searchservice: SearchGithubService;
  searchTerm?: string



  performSearch(searchTerm: any) {
    this.searchservice.getuserData(searchTerm).then((success) => {
      this.user = this.searchservice.user
    })

  }




  constructor(searchsearvice: SearchGithubService) {
    this.searchservice = searchsearvice;
  }


  ngOnInit(): void {
    this.performSearch('Rubyroy12');


  }

}
