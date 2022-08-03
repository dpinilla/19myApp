import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  mostrarElegido:{[key:number]:boolean} = {}
  nombre: string = ''
  datos:Array<any> = []
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get('id')
    this.agregarDatos()
  }

  agregarDatos(){
  this.datos=[
    {
      nombre: "Diego",
      apellido: "Pinilla",
      edad: 30,
      deporte: "Futbol",
      imagen: "https://okdiario.com/img/2019/08/10/origen-del-futbol.jpg"
    },
    {
      nombre: "Alberto",
      apellido: "Hernández",
      edad: 45,
      deporte: "Natación",
      imagen: "https://concepto.de/wp-content/uploads/2019/06/natacion-deporte-estilo-mariposa-e1559784662984.jpg"      
    },
    {
      nombre: "Luz Marina",
      apellido: "Casañas",
      edad: 25,
      deporte: "Tenis",
      imagen: "https://static1.abc.es/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg"
    }
  ]
}

elegido(i:number){
  if(this.mostrarElegido[i]){
    this.mostrarElegido[i] = false
  }else{
    this.mostrarElegido[i] = true
  }
  
}

}


