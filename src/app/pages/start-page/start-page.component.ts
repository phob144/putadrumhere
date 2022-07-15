import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {}

    createProject(file: File | null): void {
        this.projectService.create(file);
    }

    loadProject(file: File | null): void {
        this.projectService.load(file);
    }
}
