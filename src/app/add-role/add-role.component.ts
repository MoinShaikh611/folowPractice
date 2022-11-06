import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextClick(){
    this.router.navigate(['/auth/roles/add-new-role']);
  }
}
