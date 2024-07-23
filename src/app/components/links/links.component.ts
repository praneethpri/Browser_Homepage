import { Component } from '@angular/core';
import { LinkImportService } from 'src/app/services/link-import.service';
import { LinkTable } from 'src/app/db';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  links: LinkTable[] = [];

  constructor(private dexieService: LinkImportService) { }

  ngOnInit(): void {
    this.populateDatabase();
    this.fetchLinks();
  }

  async populateDatabase() {
    await this.dexieService.populateLinkTable();
  }

  async fetchLinks() {
    this.links = await this.dexieService.getAllLinks();
    console.log(this.links)
  }

  async clearDatabase() {
    await this.dexieService.clearTableData();
    this.fetchLinks();
  }
}
