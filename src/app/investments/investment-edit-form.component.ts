import { Component, OnInit } from "@angular/core";
import { InvestmentService } from "./investment.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";

@Component({selector: 'app-investment-edit-form', templateUrl: 'investment-edit-form.component.html'})
export class InvestmentEditFormComponent implements OnInit {
    public id: number;
    public investmentForm: any;

    constructor(public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        private investmentService: InvestmentService) {
        this.investmentForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'type': ['', Validators.required],
            'amount': ['', Validators.required],
            'investmentDate': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.investmentService.fetch(this.id).subscribe(data=>{
            this.investmentForm.patchValue(data.json())
        });
    }
}