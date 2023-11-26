import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { FormsModule } from '@angular/forms';

// Prime NG Components Import
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    ChartComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    DropdownModule,
    GridModule,
    PagerModule,
    InputSwitchModule,
    FormsModule,
    InputTextModule,
    TableModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    MultiSelectModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
