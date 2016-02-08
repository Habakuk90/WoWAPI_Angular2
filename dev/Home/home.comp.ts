import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'home',
    template: `
			<div>HomeComp!</div>

    `,
    directives:[ROUTER_DIRECTIVES],
    providers: []
})

export class HomeComp {

}
