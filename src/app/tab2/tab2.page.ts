import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { FACULTY } from '../mock-faculty';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() { }
  isModalOpenFac = false;

  setOpenFac(isOpen: boolean) {
    this.isModalOpenFac = isOpen;
   
  }

  ngOnInit() {
  }

  faculty = FACULTY;
  j:any;

  isModalOpen = false;

  setOpen(isOpen: boolean, i:number) {
    this.isModalOpen = isOpen;
    this.j=i;
  }


}
