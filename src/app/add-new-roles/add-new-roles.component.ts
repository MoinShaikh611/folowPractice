import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-roles',
  templateUrl: './add-new-roles.component.html',
  styleUrls: ['./add-new-roles.component.css']
})
export class AddNewRolesComponent implements OnInit {
  users=["App Users", "Admin Users"]
  constructor() { }

  ngOnInit(): void {
  }

}
