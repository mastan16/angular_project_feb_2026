import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForm1Demo1 } from './template-form1-demo1';

describe('TemplateForm1Demo1', () => {
  let component: TemplateForm1Demo1;
  let fixture: ComponentFixture<TemplateForm1Demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateForm1Demo1],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateForm1Demo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
