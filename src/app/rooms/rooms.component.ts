import { Component, OnInit } from '@angular/core';
import {RoomsService} from '../rooms.service';
import {Room} from '../room';
import {MatDialog} from '@angular/material';
import {SelectDeviceDialogComponent} from '../select-device-dialog/select-device-dialog.component';
import {getUrlScheme} from '@angular/compiler';
import {RegisterNameDialogComponent} from '../register-name-dialog/register-name-dialog.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  unregisteredRooms: Room[];

  constructor(private roomsService: RoomsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getRooms();
    this.getUnregisteredRooms();
  }

  getRooms(): void {
    this.roomsService.getRegisteredDevices()
      .subscribe(rooms => this.rooms = rooms.devices);
  }

  getUnregisteredRooms(): void {
    console.log('fetching rooms');
    this.roomsService.getUnregisteredDevices()
      .subscribe( rooms => {this.unregisteredRooms = rooms.devices; console.log(rooms); });
  }

  openSelectDeviceDialog() {
    this.getUnregisteredRooms();


    const selectDialog = this.dialog.open(SelectDeviceDialogComponent, {
      data: this.unregisteredRooms
    });

    selectDialog.afterClosed().subscribe(result => {

      // Checking if a room is selected, if so opening a new dialog:
      if (result !== undefined) {
        const room = this.unregisteredRooms.find(unregisteredRoom => unregisteredRoom.id === result);

        const addNameDialog = this.dialog.open(RegisterNameDialogComponent, {
          data: room
        });

        addNameDialog.afterClosed().subscribe(nameResult => {
          if (nameResult) {
            this.roomsService.setRoomName(room.id, nameResult)
              .subscribe(res => { this.getRooms(); this.getUnregisteredRooms(); });
          }
        });
      }
    });

  }
}
