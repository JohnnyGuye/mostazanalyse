import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-cat',
    template: `
    <div class="flying-cat">
        <div class="flying-cat-image" (click)="clickOnCat()"></div>
    </div>
    `
})
export class CatComponent {

    private router = inject(Router)
    
    private _clickOnCat: number = 0


    clickOnCat() {
        this._clickOnCat += 1
        if (this._clickOnCat > 1) {
            this.router.navigate(["/cattaga"])
        }
    }

}