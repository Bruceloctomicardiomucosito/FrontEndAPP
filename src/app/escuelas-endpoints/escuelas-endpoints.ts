import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../../interfaces/iEscuela';
import { EscuelasService } from '../services/escuelas';

@Component({
  selector: 'app-escuelas-endpoints',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './escuelas-endpoints.html',
  styleUrl: './escuelas-endpoints.css',
})
export class EscuelasEndpoints implements OnInit{
  public EscuelasResults$! : Observable<Escuela[]>;

  constructor(private service: EscuelasService){ }

  ngOnInit(): void {
    this.service.getAllEscuelas().subscribe(respone =>{
      console.log(respone);
    });
  }
}
