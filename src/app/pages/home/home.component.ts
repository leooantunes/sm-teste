import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/models/service/api.service';
import { User } from 'src/app/models/user.model';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersPrevious?: User[];

  constructor(public apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.apiService.getUsers().subscribe(data => {
      console.log(data)
      this.usersPrevious = data.data;
    })
  }

  deleteUser(id?:number){
    this.apiService.deleteUserId(id).subscribe(result => {
      alert('User Deletado com sucesso!')
    });
  }

  editUser(): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
