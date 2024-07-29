import { ChangeDetectorRef, Component } from '@angular/core';
import { LinkImportService } from 'src/app/services/link-import.service';
import { LinkTable } from 'src/app/db';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  links: LinkTable[] = [];

  constructor(private dexieService: LinkImportService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.populateDatabase();
    this.fetchLinks();
  }

  handles = (updatedLinks: LinkTable[]) => {
    this.links = updatedLinks;
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

  async renderAgain(event: boolean) {
    if (event) {
      await this.dexieService.getAllLinks()
      this.dexieService.watchDatabase(this.handles)
    }
  }
}
