import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from 'angular2/router'
import {AppComp} from "./app.component";
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map'

//noinspection TypeScriptValidateTypes
bootstrap(AppComp, [ROUTER_PROVIDERS, HTTP_PROVIDERS, JSONP_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
	provide(APP_BASE_HREF, {useValue: '/'})
	]);
