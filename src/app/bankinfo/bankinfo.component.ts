import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.css']
})
export class BankinfoComponent implements OnInit {

  bank_name:any

  constructor() { }

  ngOnInit(): void {
  }

}
