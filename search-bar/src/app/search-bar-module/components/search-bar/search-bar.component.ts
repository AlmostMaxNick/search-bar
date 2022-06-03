import { Component, OnInit } from '@angular/core';
import { Option } from './../../Option'
import { FetchDataService } from '../../services/fetch-data.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  options: Option[] = [];
  allOptions: Option[] = [];
  clicked?: boolean;
  faSearch = faSearch;
  constructor(private fetchData: FetchDataService) { }

  ngOnInit(): void {
    this.fetchData.getOptions().subscribe((options) => (this.options = options));
    this.fetchData.getOptions().subscribe((options) => (this.allOptions = options));
  }
  updateOptions(input: any)
  {
    let counter = 0; //How many options will be displayed
    this.options = this.allOptions.filter((option) =>
    {
      let res:boolean = option.phrase.startsWith(input.value); //change startsWith to includes if you want to display the results that contain searched phrase
      if(res) counter++;
      return (res && counter<=7);
    });
    this.clicked = false;
  }

  recieveInput($event: any, input: any)
  {
    input.value = $event;
  }

}
