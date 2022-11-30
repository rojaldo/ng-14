import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  store: any[] = [];

  constructor() { }

  saveStorage(obj: any): number {
    this.store[obj.index] = obj;
    return this.store.length - 1;
  }
}
