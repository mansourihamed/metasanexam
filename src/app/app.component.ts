import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'صحه اول', url: '/folder/Metasan ', icon: 'storefront' },
    { title: 'مواد', url: '/folder/مواد', icon: 'flask' },
    { title: 'محصولات', url: '/folder/محصولات', icon: 'layers' },
    { title: 'مقالات', url: '/folder/مقالات', icon: 'newspaper' },
    { title: 'اخبار', url: '/folder/اخبار', icon: 'radio' },
    { title: 'شرکت ها', url: '/folder/شرکت ها', icon: 'business' },
  ];

  constructor() {}
}
