import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividasComponent } from './dividas/dividas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [DividasComponent, ReceitasComponent],
  imports: [CommonModule, IconsModule],
  exports: [DividasComponent, ReceitasComponent],
})
export class FinancasModule {}
