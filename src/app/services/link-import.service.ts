import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { AppDB, LinkTable } from '../db';

@Injectable({
  providedIn: 'root'
})
export class LinkImportService {

  private db: AppDB;

  constructor() {
    this.db = new AppDB()
  }

  async populateLinkTable() {
    try {
      await this.db.populate()
    }
    catch {
      console.error('Error')
    }
  }

  async getAllLinks(): Promise<LinkTable[]> {
    try {
      return await this.db.linkSet.toArray()
    }
    catch {
      console.error('Error')
      return [];
    }
  }

  async clearTableData() {
    try {
      await this.db.clearDatabase();
    }
    catch {
      console.error('Error clearing the database ! ')
    }
  }

  async addTableData(title: string, link: string, favicon: string) {
    try {
      await this.db.addToDatabase(title, link, favicon);
    }
    catch {
      console.error('Error adding to database !')
    }
  }
}
