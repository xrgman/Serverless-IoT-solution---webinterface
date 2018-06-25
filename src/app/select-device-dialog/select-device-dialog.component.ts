import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Room} from '../room';


@Component({
  selector: 'app-select-device-dialog',
  templateUrl: './select-device-dialog.component.html',
  styleUrls: ['./select-device-dialog.component.css']
})
export class SelectDeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectDeviceDialogComponent>, @Inject(MAT_DIALOG_DATA) public rooms: Room[]) { }

  ngOnInit() {
  }

  onSelectRoom(roomId) {
    this.dialogRef.close(roomId);
  }
}
