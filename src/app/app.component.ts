import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
// import * as AOS from 'aos';
import * as AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'flowbite';

  currentYear: number = new Date().getFullYear();

  showAgirAvecNous: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000,
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/agir-don'
        this.showAgirAvecNous = event.urlAfterRedirects !== '/agir-don';
      }
    });
  }
}