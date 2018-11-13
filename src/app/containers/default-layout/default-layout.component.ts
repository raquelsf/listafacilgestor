import {Component} from '@angular/core';
import {EventEmitter} from '@angular/core'
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    public headerTitle = new EventEmitter();

    public title = 'Meu Painel';

    constructor(private router: Router) {
        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
        });

        // this.changes.observe(<Element>this.element, {
        //     attributes: true
        // });
        //
        // this.events();
    }

    //
    // events() {
    //     this.headerTitle.subscribe((value) => {
    //         this.title = value
    //     })
    // }

    logout() {
        this.router.navigate(['/login'])
    }
}
