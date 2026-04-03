import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-navigation',
    template: `
    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo" [routerLink]="'/'">MostazAnalyse</div>
            <ul class="nav-links">
                <li><a [routerLink]="'/#home'">Accueil</a></li>
                <li><a [routerLink]="'/#about'">A propos</a></li>
                <li><a [routerLink]="'/#portfolio'">Portfolio</a></li>
                <li><a [routerLink]="'/#contact'">Contact</a></li>
            </ul>
            <div class="mobile-menu-toggle" id="mobileMenuToggle">
                <div class="hamburger"></div>
                <div class="hamburger"></div>
                <div class="hamburger"></div>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <ul class="mobile-nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>

    `,
    imports: [RouterLink]
})
export class NavigationComponent {

}