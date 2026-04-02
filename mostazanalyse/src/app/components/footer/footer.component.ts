import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <p>&copy; 2026 par Rafael Mostaza, Ph.D. Créé par Dieu lui même</p>
                </div>
                <div class="footer-right">
                    <div>
                        <h4>Adresse</h4>
                        <p>
                            5 rue de Sophocle, <br/>
                            15110, Deux-Verges
                        </p>
                    </div>
                    <div>
                        <p><b>Tél : </b>06 05 18 56 00</p>
                        <p><b>Fax : </b>01 23 45 67 89</p>
                    </div>
                    <!-- <a href="#privacy">Privacy Policy</a> -->
                    <!-- <a href="#terms">Terms of Use</a> -->
                    <!-- <a href="#sitemap">Sitemap</a> -->
                    <!-- <a href="https://templatemo.com" target="_blank" rel="noopener nofollow">Provided by TemplateMo</a> -->
                </div>
            </div>
        </div>
    </footer>
    `,
    standalone: true
})
export class FooterComponent {

}