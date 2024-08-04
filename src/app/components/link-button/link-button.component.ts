import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LinkTable } from 'src/app/db';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css'],
})
export class LinkButtonComponent {
  @Input() link: LinkTable[] = [];

  public safeFaviconUrl: SafeResourceUrl = '';
  public inputTitle: string = '';
  public inputFavicon: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.link.length > 0) {
      this.inputTitle = this.link[0].title;
      this.inputFavicon = this.link[0].favicon;
      this.safeFaviconUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputFavicon)
      console.log(this.safeFaviconUrl)
    }
  }
}
