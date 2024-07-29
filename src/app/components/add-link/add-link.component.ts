import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LinkImportService } from 'src/app/services/link-import.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css'],
})
export class AddLinkComponent {
  @Output() notifyToShow = new EventEmitter<boolean>();
  @Output() reRenderLinks = new EventEmitter<boolean>();

  public faviconChange: string = 'circle';

  notifyParent() {
    this.notifyToShow.emit();
  }

  bookmarkForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
  });

  constructor(private dexieService: LinkImportService) {}

  ngOnInit() {}

  async getItems() {
    let title: string = this.bookmarkForm.get('title')?.value;
    let link: string = this.bookmarkForm.get('link')?.value;
    let favicon: string | null = null;

    let regex = /^https?:\/\/([^/?#]+).*$/;

    const match = link.match(regex);

    if (match) {
      const domain = match[1];

      const faviconLink = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      favicon = `<img src="${faviconLink}" alt="favicon" />`;
    } else {
      console.log('Invalid URL format');
    }

    try {
      await this.dexieService.addTableData(title, link, favicon || '');
      this.dexieService.getAllLinks();
      this.notifyParent()
    } catch (error) {
      console.error('Error in the add-link component : ', error)
    };
  }
}
