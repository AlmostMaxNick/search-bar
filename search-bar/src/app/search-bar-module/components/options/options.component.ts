import { Component, OnInit } from '@angular/core';
import { Option } from './../../Option';
import { Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() options?: Option[];
  @Output() eventTask = new EventEmitter<string>();
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
    
  }

  sendInput(newInput: string)
  {
    this.eventTask.emit(newInput);
  }

}
