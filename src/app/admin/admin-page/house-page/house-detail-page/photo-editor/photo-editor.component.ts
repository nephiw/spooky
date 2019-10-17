import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'bc-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.less']
})
export class PhotoEditorComponent implements OnInit {
  @Input() public key: string;

  constructor(private readonly storage: AngularFireStorage) {}

  ngOnInit() {}

  public upload(event): void {
    // TODO: Upload the file to a bucket specific to the user key. Be sure to handle multiple files.

    // TODO: Get a reference to the uploads

    // TODO: Update the user with the references.


    const file = event.target.files[0];
    const filePath = `${ this.key }/house`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }
}
