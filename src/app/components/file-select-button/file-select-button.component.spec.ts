import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSelectButtonComponent } from './file-select-button.component';

describe('FileSelectButtonComponent', () => {
  let component: FileSelectButtonComponent;
  let fixture: ComponentFixture<FileSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileSelectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
