import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { showToast } from 'src/app/model/Message';


@Component({
  selector: 'app-recuperar2',
  templateUrl: './recuperar2.page.html',
  styleUrls: ['./recuperar2.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class Recuperar2Page  {

  usu: Usuario | null | undefined;

  public nombre: string = '';
  public apellido: string = '';
  public preguntaSecreta: string = '';
  public respuesta: string = ''; 

  constructor(private dataSharingService: DataSharingService
    , private router: Router
    , private authService: AuthService
    , private bd: DataBaseService) {
  }

  ngOnInit() {
    this.usu = this.dataSharingService.getUsuario();
    if (this.usu) {
      this.nombre = this.usu.nombre;
      this.apellido = this.usu.apellido;
      this.preguntaSecreta = this.usu.preguntaSecreta;
    }
  }

  public async recuperarRespuesta() {
    await this.bd.leerPregunta(this.preguntaSecreta, this.respuesta).then(async (usuario: Usuario | undefined) => {
      if (usuario) {
        showToast(`La respuesta fue correcta`);

        this.dataSharingService.setUsuario(usuario);
        
        this.router.navigate(['accedido']);
        console.log('Respuesta validada');
      }
      else {
        showToast(`La respuesta fue incorrecta`);
        this.router.navigate(['incorrecto']);
      }
    });
  }
  

  public inicio(){
    this.router.navigate(['ingreso']);
  }

}
