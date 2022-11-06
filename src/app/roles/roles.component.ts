import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  rolesList: any = [];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.listAllRoles();
  }

  listAllRoles(){
    this.commonService.getAllRoles().subscribe(
      (res: any) => {
         this.rolesList = res.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRole(role: any){
    let deleteRoleObj = {
      password: 'admin@1234',
    };
    let id = role.id;
    this.commonService.roleDelete(deleteRoleObj,id).subscribe(
      (res: any) => {
        console.log(res);
        alert("Record Deleted Successfully");
        this.listAllRoles();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
