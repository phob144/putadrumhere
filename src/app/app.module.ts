import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { FileSelectButtonComponent } from './components/file-select-button/file-select-button.component';
import { StackComponent } from './components/stack/stack.component';
import { EditorPageComponent } from './pages/editor-page/editor-page.component';
import { ButtonComponent } from './components/button/button.component';
import { ChannelTimelineComponent } from './components/channel-timeline/channel-timeline.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        StartPageComponent,
        EditorPageComponent,
        FileSelectButtonComponent,
        StackComponent,
        ButtonComponent,
        ChannelTimelineComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, DragDropModule, ScrollingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
