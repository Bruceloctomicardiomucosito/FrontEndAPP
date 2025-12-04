import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AsignacionPracticantes } from '../../interfaces/iAsignacionPracticantes';
import { AsignacionPracticantesService } from '../services/asignacion-practicantes';

@Component({
  selector: 'app-asignacion-practicantes-endpoints',
  imports: [RouterOutlet,AsyncPipe],
  templateUrl: './asignacion-practicantes-endpoints.html',
  styleUrl: './asignacion-practicantes-endpoints.css',
})
export class AsignacionPracticantesEndpoints implements OnInit {
  public asignacionesPracticantes$!: Observable<AsignacionPracticantes[]>;

  constructor(private service: AsignacionPracticantesService){ }

  ngOnInit(): void {
    this.service.getAllAsignacionPracticantes().subscribe(response =>{
      console.log(response);
    });
  }
}
