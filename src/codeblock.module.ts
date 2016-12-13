import { NgModule } from '@angular/core';
import { DIRECTIVES } from './languages';
import { CodeblockComponent } from './codeblock.component';
import { CodeRendererComponent } from './code-renderer.component';

const COMP_DIRECTIVES = [CodeblockComponent, CodeRendererComponent];

@NgModule({
  declarations: [...COMP_DIRECTIVES, ...DIRECTIVES],
  exports: [...COMP_DIRECTIVES],
  entryComponents: [...COMP_DIRECTIVES, ...DIRECTIVES]
})
export class CodeblockModule {
}