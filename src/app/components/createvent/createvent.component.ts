import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createvent',
  templateUrl: './createvent.component.html',
  styleUrls: ['./createvent.component.css']
})
export class CreateventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.eventForm = this.fb.group({
      eventName: [''],
      eventDetails: [''],
      venue: ['']
    })
  }

  ngOnInit() { }

  createEvent() {
    this.authService.createEvent(this.eventForm.value).subscribe((res) => {
      if (res.result) {
        this.eventForm.reset()
        this.router.navigate(['events']);
      }
    })
  }
}
