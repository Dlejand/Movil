import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/Usuario';
import { showToast } from 'src/app/model/Message';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';


@Component({
  selector: 'app-recuperar1',
  templateUrl: './recuperar1.page.html',
  styleUrls: ['./recuperar1.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone:true,
  
  
})
export class Recuperar1Page {
 
  public correo: string = '';

  constructor(
    private dataSharingService: DataSharingService
    , private router: Router
    , private authService: AuthService
    , private bd: DataBaseService
  ) {}

  public async recuperar() {
    await this.bd.leerUsuario(this.correo).then(async (usuario: Usuario | undefined) => {
      if (usuario) {
        showToast(`Correo encontrado en el sistema`);
        this.dataSharingService.setUsuario(usuario);
        
        this.router.navigate(['recuperar2']);
      }
      else {
        showToast(`El correo no fue encontrado`);
        this.router.navigate(['denegado']);
      }
    });
  }

  public inicio(){
    this.router.navigate(['ingreso']);
  }

 
  

}


