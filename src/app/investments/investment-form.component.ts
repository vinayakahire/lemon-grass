import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentService } from './investment.service';

@Component({
    selector: 'app-modal-content',
    templateUrl: './investment-form.component.html'
})
export class InvestmentFormComponent {
    @Input() name;
    investmentForm: any;

    constructor(public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private investmentService: InvestmentService) {
        this.investmentForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'investmentType': ['', Validators.required],
            'amount': ['', Validators.required],
            'investmentDate': ['', Validators.required]
        });
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    save(): void {
        if (this.investmentForm.dirty && this.investmentForm.valid) {
            console.log(this.investmentForm.value);
            this.investmentService.add(this.investmentForm.value)
            .subscribe(data => {
                this.activeModal.dismiss();
            });

        }
    }
}
