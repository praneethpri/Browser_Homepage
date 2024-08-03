import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LinkTable } from 'src/app/db';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css']
})
export class LinkButtonComponent {
  @Input() link: LinkTable[] = [];

  public safeFaviconUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeFaviconUrl = this.sanitizer.bypassSecurityTrustUrl(this.inputFavicon)
  }

  public inputTitle: string = '';
  public inputFavicon: string = '';

  ngOnInit() {
    this.inputTitle = this.link[0].title
    this.inputFavicon = this.link[0].favicon
  }
}
