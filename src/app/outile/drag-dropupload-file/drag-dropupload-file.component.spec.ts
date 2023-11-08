import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropuploadFileComponent } from './drag-dropupload-file.component';

describe('DragDropuploadFileComponent', () => {
  let component: DragDropuploadFileComponent;
  let fixture: ComponentFixture<DragDropuploadFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropuploadFileComponent]
    });
    fixture = TestBed.createComponent(DragDropuploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
