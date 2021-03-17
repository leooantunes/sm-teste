import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/models/service/api.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  users?: User[];

  public editUserForm:FormGroup = this.fb.group({
    id: ['',[Validators.required]],
    first_name: ['', [Validators.required]],
    job: ['', [Validators.required]],
  });

  constructor(public dialogRef: MatDialogRef<DialogEditComponent>, private fb: FormBuilder, public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers()
    this.editUserForm = this.fb.group({
      id: ['',[Validators.required]],
      first_name: ['',[Validators.required]],
      job: ['', [Validators.required]],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.editUserForm.reset();
  }

  getUsers(){
    this.apiService.getUsers().subscribe(data => {
      console.log(data)
      this.users = data.data;
    })
  }

  editUser(){
    this.apiService.editUser(this.editUserForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.editUserForm.reset();
    alert('Usuario editado com sucesso')
  }

}
