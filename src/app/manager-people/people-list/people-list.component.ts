import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { PeopleService } from '../people.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [PeopleService]
})
export class PeopleListComponent implements OnInit {
  peoples: People[];

  selectedPerson: People;

  posts: Post[];

  title = 'People';
  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peoples = this.peopleService.getAll();
    this.peopleService.getPost().subscribe(posts => {
      this.posts = posts;
    });
  }

  selectPerson(person: People) {
    this.selectedPerson = person;
  }

  closePerson() {
    this.selectedPerson = null;
  }
}

