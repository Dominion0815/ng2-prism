import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeblockComponent } from './codeblock.component';
import { CodeRendererComponent } from './code-renderer.component';
import { SrcDirective } from './ng2-src-directive/src.directive';

const COMP_DIRECTIVES = [CodeRendererComponent, CodeblockComponent, SrcDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMP_DIRECTIVES],
  exports: [...COMP_DIRECTIVES]
})
export class CodeblockModule {
}
