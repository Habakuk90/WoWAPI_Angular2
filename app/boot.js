System.register(["angular2/core","angular2/platform/browser","angular2/router","./app.component","angular2/http","rxjs/add/operator/map"],function(t){var n,o,r,a,e;return{setters:[function(t){n=t},function(t){o=t},function(t){r=t},function(t){a=t},function(t){e=t},function(t){}],execute:function(){o.bootstrap(a.AppComp,[r.ROUTER_PROVIDERS,e.HTTP_PROVIDERS,n.provide(r.LocationStrategy,{useClass:r.HashLocationStrategy}),n.provide(r.APP_BASE_HREF,{useValue:"/"})])}}});