import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorPageComponent } from './pages/editor-page/editor-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

const routes: Routes = [
    { path: '', component: StartPageComponent },
    { path: 'editor', component: EditorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
