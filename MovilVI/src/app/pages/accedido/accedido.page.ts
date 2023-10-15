import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accedido',
  templateUrl: './accedido.page.html',
  styleUrls: ['./accedido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccedidoPage implements OnInit {

  usu: Usuario | null | undefined;
  public password: string = '';

  constructor(private dataSharingService: DataSharingService
    , private router: Router
    , private authService: AuthService
    , private bd: DataBaseService) { }


  ngOnInit() {
    this.usu = this.dataSharingService.getUsuario();
    if (this.usu) {
      this.password= this.usu.password;
    }
  }

  public inicio(){
    this.router.navigate(['ingreso']);
  }

  

}
