import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  Event: any = [];

  constructor(
    public restApi: AuthService
  ) { }

  ngOnInit() {
    this.loadEvents()
  }

  // Get events list
  loadEvents() {
    return this.restApi.getEvents().subscribe((data: {}) => {
      this.Event = data;
    })
  }


}
