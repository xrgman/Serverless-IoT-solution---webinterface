import {Component, Inject, OnInit} from '@angular/core';
import {SelectDeviceDialogComponent} from '../select-device-dialog/select-device-dialog.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Room} from '../room';

@Component({
  selector: 'app-register-name-dialog',
  templateUrl: './register-name-dialog.component.html',
  styleUrls: ['./register-name-dialog.component.css']
})
export class RegisterNameDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectDeviceDialogComponent>, @Inject(MAT_DIALOG_DATA) public room: Room) { }

  ngOnInit() {
  }

  onSaveButton(newName) {
    if (newName) {
      this.dialogRef.close(newName);
    }
  }

}
