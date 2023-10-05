import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  //variabile utilizzata per l'interpolazione di stringa
  numTests:number=25;
  //oggetto utilizzato per le proprietà vincolanti
  car = {
    model: "Alfa Romeo Giulia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ciXJ17i4VpCiSLwPtAxAzYpzicznycbAFg&usqp=CAU",
    available:false
  }
}
