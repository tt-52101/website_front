import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewModule } from 'ngx-treeview';
import { NgxEchartsModule } from 'ngx-echarts';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TabModule } from 'angular-tabs-component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreeviewModule.forRoot(),
    NgxEchartsModule,
    PdfViewerModule,
    NgxDocViewerModule,
    TabModule
  ],
  exports: [
    // MatButtonModule,
    // MatCheckboxModule
    NgxEchartsModule,
    TreeviewModule,
    PdfViewerModule,
    NgxDocViewerModule,
    TabModule
  ]
})
export class ThirdpartyCompModule { }
