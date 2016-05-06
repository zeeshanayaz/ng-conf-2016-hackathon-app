import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './main';
import {CountriesComponent} from './countries/countriesComponent';


@Component({
  selector: 'app',
  template: `
  	<h1>Countries and Capitals</h1>
    <router-outlet><router-outlet>
  `,
  styleUrls:[''],
  directives: [ROUTER_DIRECTIVES,HomeComponent],
  providers:[ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: './main',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: './countries',
    name: 'Countries',
    component: CountriesComponent
  }
])

export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
  
