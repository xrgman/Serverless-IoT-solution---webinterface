import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNameDialogComponent } from './register-name-dialog.component';

describe('RegisterNameDialogComponent', () => {
  let component: RegisterNameDialogComponent;
  let fixture: ComponentFixture<RegisterNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
