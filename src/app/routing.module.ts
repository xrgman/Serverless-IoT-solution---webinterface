import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RoomsComponent} from './rooms/rooms.component';
import {SettingsComponent} from './settings/settings.component';
import {RoomComponent} from './room/room.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'rooms',
    component: RoomsComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'room/:id',
    component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [AppComponent, HomeComponent, RoomsComponent, SettingsComponent];
