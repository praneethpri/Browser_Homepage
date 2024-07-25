import Dexie, { Table } from 'dexie';

export interface LinkTable {
  id?: number;
  title: string;
  favicon: string;
  link: string;
}

export class AppDB extends Dexie {
  linkSet!: Dexie.Table<LinkTable, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      linkSet: '++id, title, favicon, link',
    });
    this.linkSet = this.table('linkSet');
  }

  async populate() {
    const linksToAdd = [
      {
        title: 'Yahoo',
        favicon: 'x',
        link: 'yahoo.com',
      },
    ];

    for (const link of linksToAdd) {
      const count = await this.linkSet.where('link').equals(link.link).count();
      if (count == 0) {
        await this.linkSet.add(link);
      }
    }
  }

  async clearDatabase() {
    try {
      await this.linkSet.clear();
      console.log('linkSet table cleared successfully');
    } catch (error) {
      console.error('Error clearing linkSet table:', error);
    }
  }
}
