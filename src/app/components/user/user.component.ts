import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: String;
  age: number;
  email: string;

  address: Address;

  hobbies = ['IT', 'cine'];

  posts: Post[];

  isEdit: boolean;

  constructor(private dataService: DataService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'Tài Mai';
    this.age = 22;
    this.email = 'taimai0604@gmail.com';
    this.address = {
      street: 'QL 1A',
      city: 'Biên Hòa',
      state: 'Biên Hòa'
    };

    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.isEdit = false;
  }

  onClick() {
    this.name = 'change name';
    this.hobbies.push('New hobby');
  }
  toggletEdit() {
    this.isEdit = !this.isEdit;
  }
  addHobby(hobby: string) {
    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(index) {
    this.hobbies.splice(index, 1);
  }
}
interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
