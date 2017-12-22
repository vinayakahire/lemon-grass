import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { InvestmentFormComponent } from './investment-form.component';

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(InvestmentFormComponent);
    modalRef.componentInstance.name = 'World';
  }
}
