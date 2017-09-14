import { Component, OnInit, Input } from '@angular/core';
import { People } from '../models/people';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers: [PeopleService]
})
export class PersonDetailComponent implements OnInit {
  // @Input() person: People;
  person: People;
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = Number.parseInt(params.id);
      this.person = this.peopleService.getPerson(id);
    });
  }

  gotoPeoplesList() {
    // const link = '/persons';
    // this.router.navigate([link]);
    window.history.back();
  }
}
