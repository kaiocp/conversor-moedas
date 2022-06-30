import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionHistoryComponent } from './components/conversion-history/conversion-history.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { SymbolsComponent } from './components/symbols/symbols.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'conversor', component: CurrencyConverterComponent },
  { path: 'moedas', component: SymbolsComponent },
  { path: 'historico', component: ConversionHistoryComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
