import { NgModule } from "@angular/core";
import { InvestmentFormComponent } from "./investment-form.component";
import { InvestmentEditFormComponent } from "./investment-edit-form.component";
import { InvestmentListComponent } from "./investment-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InvestmentService } from "./investment.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        InvestmentFormComponent,
        InvestmentListComponent,
        InvestmentEditFormComponent
    ],
    imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        HttpModule,
        BrowserModule
    ],
    entryComponents: [InvestmentFormComponent, InvestmentEditFormComponent],
    providers: [InvestmentService],
    exports: []
})
export class InvestmentModule { }