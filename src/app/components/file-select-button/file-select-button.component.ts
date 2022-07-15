import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-file-select-button',
    templateUrl: './file-select-button.component.html',
    styleUrls: ['./file-select-button.component.scss'],
})
export class FileSelectButtonComponent implements OnInit {
    @Output()
    fileSelect = new EventEmitter<File | null>();

    constructor() {}

    ngOnInit(): void {}

    selectFile(): void {
        const fileSelector = document.querySelector('input');

        if (!fileSelector) return;

        fileSelector.click();
        fileSelector.onchange = () => {
            this.fileSelect.emit(fileSelector.files![0]);
        };
    }
}
