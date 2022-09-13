import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Main', url: '/'},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Graphs', url: 'graph1'},
        { title: 'Promises', url: 'promises'},
        { title: 'Rxjs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
