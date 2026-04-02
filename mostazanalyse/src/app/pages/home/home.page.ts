import { AfterViewInit, Component } from "@angular/core";

@Component({
    selector: 'home-page',
    templateUrl: 'home.page.html',
    standalone: true
})
export class HomePage implements AfterViewInit {

    constructor() {}

    ngAfterViewInit(): void {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

                // Staggered animation for portfolio items
        const portfolioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.portfolio-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animatedElements.forEach(el => observer.observe(el));

        const portfolioSection = document.querySelector('.portfolio-grid');
        if (portfolioSection) {
            portfolioObserver.observe(portfolioSection);
        }
    }
}