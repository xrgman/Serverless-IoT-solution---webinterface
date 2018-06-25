import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../room';
import {CurrentData, RoomsService} from '../rooms.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomsService]
})
export class RoomComponent implements OnInit {
  room: Room;
  currentData: CurrentData;

  constructor(private route: ActivatedRoute, private roomService: RoomsService) { }

  ngOnInit() {
    this.getRoom();
    this.getCurrentValues();
    setInterval(() => this.getCurrentValues(), 1000);
  }

  getRoom() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id)
      .subscribe(room => this.room = room);
  }

  getCurrentValues() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getCurrentValues(id)
      .subscribe(data => this.currentData = data);
  }

}
