import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../../interfaces/iGrupo';
import { GruposService } from '../services/grupos';

@Component({
  selector: 'app-grupos-endpoints',
  imports: [AsyncPipe],
  templateUrl: './grupos-endpoints.html',
  styleUrl: './grupos-endpoints.css',
})
export class GruposEndpoints implements OnInit {
  public GruposResults$! : Observable<Grupo[]>
  constructor(private service: GruposService){ }
  ngOnInit(): void {
    this.service.getAllGrupos().subscribe(response => {
      console.log(response);
    });
  }
}
