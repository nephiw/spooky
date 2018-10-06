import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TrunkOrTreatService } from 'trunk-or-treat/trunk-or-treat.service';
import { LoadingState } from 'common/loading-state.enum';

@Component({
  selector: 'bc-trunk-or-treat-form',
  templateUrl: './trunk-or-treat-form.component.html',
  styleUrls: ['./trunk-or-treat-form.component.less']
})
export class TrunkOrTreatFormComponent implements OnInit {
  @Output() public stateChanged = new EventEmitter<LoadingState>();
  public trunkOrTreatForm: FormGroup;

  constructor(
    private service: TrunkOrTreatService
  ) { }

  ngOnInit() {
    this.trunkOrTreatForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      carCount: new FormControl(1, Validators.required)
    });
  }

  public async submitTrunkOrTreatForm() {
    this.stateChanged.emit(LoadingState.LOADING);

    if (this.trunkOrTreatForm.valid) {
      try {
        await this.service.createNewContact(this.trunkOrTreatForm.value);
        this.trunkOrTreatForm.reset();
        this.stateChanged.emit(LoadingState.COMPLETED);
      } catch (_error) {
        console.log(_error);
        this.stateChanged.emit(LoadingState.ERROR);
      }
    }
  }
}
