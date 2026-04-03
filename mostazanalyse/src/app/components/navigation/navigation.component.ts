import { AfterViewInit, Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-navigation',
    template: `
    <!-- Navigation -->
    <nav id="navbar">
        <div class="nav-container">
            <div class="logo" [routerLink]="'/'">MostazAnalyse</div>
            <ul class="nav-links">
                <li><a [routerLink]="'/'" [fragment]="'home'">Accueil</a></li>
                <li><a [routerLink]="'/'" [fragment]="'about'">A propos</a></li>
                <li><a [routerLink]="'/'" [fragment]="'portfolio'">Portfolio</a></li>
                <li><a [routerLink]="'/'" [fragment]="'contact'">Contact</a></li>
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
            <li><a [routerLink]="'/'" [fragment]="'home'">Accueil</a></li>
            <li><a [routerLink]="'/'" [fragment]="'about'">A propos</a></li>
            <li><a [routerLink]="'/'" [fragment]="'portfolio'">Portfolio</a></li>
            <li><a [routerLink]="'/'" [fragment]="'contact'">Contact</a></li>
        </ul>
    </div>

    `,
    imports: [RouterLink]
})
export class NavigationComponent implements AfterViewInit {
    
    ngAfterViewInit(): void {
        
        const mobileMenuToggle = document.getElementById('mobileMenuToggle')!;
        const mobileMenu = document.getElementById('mobileMenu')!;
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a')!;

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target as any) && !mobileMenu.contains(e.target as any)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

    }

}