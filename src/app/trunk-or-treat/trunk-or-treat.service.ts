import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ContactService, Trunk } from 'common';

@Injectable()
export class TrunkOrTreatService {

  constructor(
    private db: AngularFireDatabase,
    private contactService: ContactService
  ) {}

  public async createNewContact(data: any) {
    const contactKey = this.contactService.generateKey(data);
    const trunk = new Trunk({ contactKey: contactKey, numTrunks: data.carCount });

    await this.contactService.createNewContact(data);

    const trunks = this.db.object('/trunks');
    trunks.update({ [ contactKey ]: trunk });

    return this.db.object(`/trunks/${ contactKey }`);
  }
}
