import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [SearchResultsComponent],
  exports: [
    SearchResultsComponent
  ]
})
export class SearchResultsModule { }
