import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedData: any;
  private usuario : any;
  private correo: any;
  

  constructor() { }

  setSharedData(data: any) {
    this.sharedData = data;
  }

  setUsuario(user: any) {
    this.usuario = user;
  }

  getSharedData() {
    return this.sharedData;
  }

  getUsuario() {
    return this.usuario;
  }

  getCorreo() {
    return this.correo;
  }

  setCorreo(){
    return this.correo;
  }
}


