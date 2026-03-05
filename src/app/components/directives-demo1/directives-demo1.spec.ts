import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDemo1 } from './directives-demo1';

describe('DirectivesDemo1', () => {
  let component: DirectivesDemo1;
  let fixture: ComponentFixture<DirectivesDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
