import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string;
  searchservice:SearchGithubService;

  submitUsername(){
    this.searchservice.getuserData(this.username);
    
  }


 

  constructor(searchsearvice:SearchGithubService  ) {
    this.searchservice=  searchsearvice;
 

   }


  ngOnInit(): void {
    
    
  }

}
