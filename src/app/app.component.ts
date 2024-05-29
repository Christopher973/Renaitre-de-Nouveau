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

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000,
    });
  }
}