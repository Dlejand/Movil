import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class IngresoPage implements OnInit {

  correo = 'atorres@duocuc.cl';
  password = '1234';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ingresar() {
    this.authService.login(this.correo, this.password);
  }

}
