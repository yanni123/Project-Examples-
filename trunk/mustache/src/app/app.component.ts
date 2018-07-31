import { Component } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mustache';

  person = {
    firstName: "Christophe",
    lastName: "Coenraets",
    blogURL: "http://coenraets.org"
  };
  //template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
  //html1 = Mustache.to_html(this.template, this.person);
  //$('#ex1').html(html1);

  display() {
    $('#ex1').toggle();
  }

}
