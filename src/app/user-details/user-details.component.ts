import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from './userDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: UserDetails;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  onNavigate(extUrl){
    window.open(extUrl, '_blank');
  }


}
