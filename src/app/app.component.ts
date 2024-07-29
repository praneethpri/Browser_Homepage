import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homepage';

  public showAddLink: boolean = false;

  public showAddLinkFunc(event: boolean) {
    this.showAddLink = event;
  }

  public showAddLinkPlusFunc(eventItem: any) {
    this.showAddLink = eventItem;
  }

  public renderAgain() {
    window.location.reload();
  }
}
