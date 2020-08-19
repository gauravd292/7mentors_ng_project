import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  template: `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <li><a routerLink="/mobile">Mobile </a></li>
          <li><a routerLink="/mobile/moto">Motorola </a></li>
          <li><a routerLink="/mobile/sam">Samsung </a></li>
        </ul>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class MobileMenuComponent {}
