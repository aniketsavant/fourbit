import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import{Router, NavigationEnd} from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta : Meta, public router: Router) {
    meta.addTag({name:'keyword', content:'fourbit, 4bit, IT Services'});
    meta.addTag({name: 'discription', content: 'Fourbit adapts the emerging trend of Artificial Intelligence, Blockchain Technology, Data Analytics, Sentimental Analytics, Digital/Market/Research Analytics.'});

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'UA-165382977-1', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    });
  }


  public onActivate(event): void {
    window.scroll(0,0);
  }
}
