import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-denegado',
  templateUrl: './denegado.page.html',
  styleUrls: ['./denegado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DenegadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
