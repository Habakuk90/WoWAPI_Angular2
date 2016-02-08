import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'about',
    template: `
			<div>AboutComp!</div>

    `,
    directives:[ROUTER_DIRECTIVES],
    providers: []
})

export class AboutComp {

}
