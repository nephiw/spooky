import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HouseDecorationService } from '../../house-decoration.service';
import { LoadingState } from 'common/loading-state.enum';

@Component({
  selector: 'bc-house-decoration-form',
  templateUrl: './house-decoration-form.component.html',
  styleUrls: ['./house-decoration-form.component.less']
})
export class HouseDecorationFormComponent implements OnInit {
  @Output() public stateChanged = new EventEmitter<LoadingState>();
  public decorationForm: FormGroup;

  constructor(
    private houseService: HouseDecorationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.decorationForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  public async submitDecorationForm() {
    this.stateChanged.emit(LoadingState.LOADING);

    if (this.decorationForm.valid) {
      try {
        await this.houseService.createHouse(this.decorationForm.value);
        this.decorationForm.reset();
        this.stateChanged.emit(LoadingState.COMPLETED);
      } catch (_error) {
        this.toastr.error('There was an error submitting your home for decorations.');
        this.stateChanged.emit(LoadingState.ERROR);
      }
    }
  }
}
