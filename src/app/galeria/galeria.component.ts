import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class GaleriaComponent  implements OnInit {

  public tituloSeccion:string = 'Galeria de Imagenes Dinámica';
  public descripcion:string = 'Esta imagen se carga desde el directorio de assets Property Binding.';
  public rutaImagenLocal:string = 'assets/foto1.jpg';

  constructor() { }

  ngOnInit() {}

}
