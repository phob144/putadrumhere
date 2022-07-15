import { Injectable } from '@angular/core';
import axios from 'axios';
import { ProjectModel } from 'src/app/models/project.model';
import { getFileExtension } from 'src/app/utils/get-file-extension.util';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    project: ProjectModel | null = null;

    constructor() {}

    async load(file: File | null): Promise<void> {
        if (!file || getFileExtension(file.name) != 'padh') return;

        try {
            let response = await axios.post('/api/loadProject', file.name);
            this.project = response.data as ProjectModel;
        } catch (err) {
            console.error(err);
        }
    }

    async create(file: File | null): Promise<void> {
        if (!file || getFileExtension(file.name) != 'txt') return;

        try {
            let response = await axios.post('/api/createProject', file.name);
            this.project = response.data as ProjectModel;
        } catch (err) {
            console.error(err);
        }
    }
}
