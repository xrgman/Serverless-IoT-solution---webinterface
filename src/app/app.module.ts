import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomComponent} from './room/room.component';
import {SettingsComponent} from './settings/settings.component';
import { AppRoutingModule, routedComponents } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SelectDeviceDialogComponent } from './select-device-dialog/select-device-dialog.component';
import { RegisterNameDialogComponent } from './register-name-dialog/register-name-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    RoomComponent,
    SettingsComponent,
    routedComponents,
    SelectDeviceDialogComponent,
    RegisterNameDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    SelectDeviceDialogComponent,
    RegisterNameDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
