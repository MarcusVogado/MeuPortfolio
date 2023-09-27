import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpContentComponent } from './csharp-content.component';

describe('CsharpContentComponent', () => {
  let component: CsharpContentComponent;
  let fixture: ComponentFixture<CsharpContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsharpContentComponent]
    });
    fixture = TestBed.createComponent(CsharpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
