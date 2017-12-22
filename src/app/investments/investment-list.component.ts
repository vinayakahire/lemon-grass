import { Component, OnInit } from '@angular/core';
import { InvestmentService } from './investment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvestmentEditFormComponent } from './investment-edit-form.component';
import { InvestmentFormComponent } from './investment-form.component';

@Component({ selector: 'app-investment-list', templateUrl: 'investment-list.component.html' })
export class InvestmentListComponent implements OnInit {
    public investments: Array<any>;
    constructor(private investmentService: InvestmentService,
        private modalService: NgbModal) {
        this.investments = [];
    }

    ngOnInit() {
        this.fetchAll();
    }

    private fetchAll() {
        this.investmentService.fetchList().subscribe(data => this.investments = data.json());
    }

    delete(id) {
        this.investmentService.delete(id).subscribe(data => console.log(data.json()));
        this.fetchAll();
    }

    edit(id) {
        const modalRef = this.modalService.open(InvestmentEditFormComponent);
        modalRef.componentInstance.id = id;
    }

    add() {
        const modalRef = this.modalService.open(InvestmentFormComponent);
        modalRef.componentInstance.name = 'World';
    }
}
