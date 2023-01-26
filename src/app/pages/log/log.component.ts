import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/interface/log';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs: Log[];

  constructor() { }

  ngOnInit(): void {
    this.logs = [
      {
      'date':'26/01/2022',
      'method':'GET',
      'petition':'peticion realizada',
      'status':200
      },
      {
        'date':'26/01/2022',
        'method':'GET',
        'petition':'peticion realizada',
        'status':200
      },
      {
        'date':'26/01/2022',
        'method':'GET',
        'petition':'peticion realizada',
        'status':200
      },
      {
        'date':'26/01/2022',
        'method':'GET',
        'petition':'peticion realizada',
        'status':200
      },
      {
        'date':'26/01/2022',
        'method':'GET',
        'petition':'peticion realizada',
        'status':200
      },
      {
          'date':'26/01/2022',
          'method':'GET',
          'petition':'peticion realizada',
          'status':200
      },
      {
        'date':'26/01/2022',
        'method':'GET',
        'petition':'peticion realizada',
        'status':200
        },
        {
          'date':'26/01/2022',
          'method':'GET',
          'petition':'peticion realizada',
          'status':200
        },
        {
          'date':'26/01/2022',
          'method':'GET',
          'petition':'peticion realizada',
          'status':200
        },
        {
          'date':'26/01/2022',
          'method':'GET',
          'petition':'peticion realizada',
          'status':200
        },
        {
          'date':'26/01/2022',
          'method':'GET',
          'petition':'peticion realizada',
          'status':200
        },
        {
            'date':'26/01/2022',
            'method':'GET',
            'petition':'peticion realizada',
            'status':200
        },
        
  ];
  }

}
