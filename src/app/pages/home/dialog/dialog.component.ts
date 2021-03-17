import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/models/service/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public userForm:FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    job: ['', [Validators.required]],
  });

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private fb: FormBuilder, public apiService: ApiService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ['',[Validators.required]],
      job: ['', [Validators.required]],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.userForm.reset();
  }

  addUser(){
    this.apiService.addUser(this.userForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.userForm.reset();
    alert('Usuario adicionado com sucesso')
  }

}
