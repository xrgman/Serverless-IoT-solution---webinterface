import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from './room';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

export interface Rooms {
  devices: Array<Room>;
}

export interface CurrentData {
  temperature: number;
  humidity: number;
  fineDust25: number;
  fineDust10: number;
  carbonMonoxide: number;
  nitrogenOxide: number;
}

@Injectable()
export class RoomsService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://pimanager1.local:3000/api';

  getRegisteredDevices(): Observable<Rooms> {
    return this.http.get<Rooms>(this.baseUrl + '/device/list');
  }

  getUnregisteredDevices(): Observable<Rooms> {
    return this.http.get<Rooms>(this.baseUrl + '/device/list_unregistered');
  }

  getRoom (id: number): Observable<Room> {
    return this.http.get<Room>(this.baseUrl + '/device/' + id);
  }

  getCurrentValues(id: number): Observable<CurrentData> {
    return this.http.get<CurrentData>(this.baseUrl + '/data/' + id + '/current_data');
  }

  setRoomName(id: number, newName: string): Observable<any> {
    return this.http.post(this.baseUrl + '/device/' + id + '/name', { name: newName });
  }

}
