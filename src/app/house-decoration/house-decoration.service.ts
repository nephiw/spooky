import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ContactService } from 'common/contact.service';

@Injectable()
export class HouseDecorationService {

  constructor(
    private db: AngularFireDatabase,
    private contactService: ContactService
  ) { }

  public async createHouse(data: any) {
    const contactKey = this.contactService.generateKey(data);
    const house = { contactKey, streetAddress: data.streetAddress };

    await this.contactService.createNewContact(data);

    const houses = this.db.object('/houses');
    houses.update({ [ contactKey ]: house });

    return this.db.object(`/houses/${ contactKey }`);
  }
}
