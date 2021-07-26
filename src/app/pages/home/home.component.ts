import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  selector:'app-home'
})
export class HomeComponent implements OnInit {

  public carregando: boolean = false
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    this.carregando = true
    console.log('search')
    setTimeout(() => {
      this.router.navigateByUrl('results')
    }, 5000)
  }

}
