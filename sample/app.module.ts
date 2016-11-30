import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JquiModule } from '../src/jqui.module';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, JquiModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}