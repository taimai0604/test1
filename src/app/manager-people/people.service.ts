import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from './models/post';
import { People } from './models/people';

@Injectable()
export class PeopleService {
  constructor(private dataService: DataService) { }
  persons: People[] = [
    { id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: 'jedi' },
    { id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: 'bounty hunter' },
    { id: 3, name: 'Han Solo', height: 185, weight: 85, profession: 'princess' },
  ];
  getAll() {
    return this.persons;
  }

  getPerson(id: Number) {
    return this.persons.find(p => p.id === id);
  }

  getPost() {
    return this.dataService.getPosts();
  }
}
