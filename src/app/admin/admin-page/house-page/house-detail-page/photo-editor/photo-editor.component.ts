import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { finalize, first } from 'rxjs/operators';
import { AdminService } from 'admin/admin.service';
import { House } from 'house-decoration';

const MAX_SIZE = 10 * 1024 * 1024;

@Component({
  selector: 'bc-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.less']
})
export class PhotoEditorComponent implements OnInit {
  @Input() public house: House;
  public key: string;
  public path: string;
  public loading: boolean;
  public error: boolean;
  public errorSize: boolean;

  public uploadPercent$: Observable<number>;
  public downloadUrl$: Observable<any>;

  constructor(
    private readonly storage: AngularFireStorage,
    private readonly adminService: AdminService
  ) {}

  ngOnInit() {
    this.uploadPercent$ = of(0);
    this.key = this.house.contactKey;
    this.path = this.house.path;
    this.loading = false;
    this.error = false;
    this.errorSize = false;
  }

  public upload(event: any): void {
    const file = event.target.files[0];

    if (file.size > MAX_SIZE) {
      this.errorSize = true;
      return;
    }

    this.error = false;
    this.errorSize = false;
    this.loading = true;

    const filePath = `${this.key}/house`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    this.uploadPercent$ = task.percentageChanges();

    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadUrl$ = ref.getDownloadURL();
          this.downloadUrl$.pipe(first()).subscribe((path: string) => {
            this.adminService.updateHouse(this.key, { path });
          });
          this.loading = false;
        })
      )
      .subscribe({
        error: () => {
          this.error = true;
        }
      });
  }
}
