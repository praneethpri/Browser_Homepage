import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Dexie from 'dexie';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css'],
})
export class AddLinkComponent {
  @Output() notifyToShow = new EventEmitter<boolean>();

  public faviconChange: string = 'circle';

  notifyParent() {
    this.notifyToShow.emit(false);
  }

  bookmarkForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  async getItems() {
    let title = this.bookmarkForm.get('title')?.value;
    let link = this.bookmarkForm.get('link')?.value;
    let faviconHtml;

    let regex = /^https?:\/\/([^/?#]+).*$/;

    const match = link.match(regex);

    if (match) {
      const domain = match[1];

      const faviconLink = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      faviconHtml = `<img src="${faviconLink}" alt="favicon" />`;
    } else {
      console.log('Invalid URL format');
    }

    console.log(title);
    console.log(link);
    console.log(faviconHtml);
  }
}
