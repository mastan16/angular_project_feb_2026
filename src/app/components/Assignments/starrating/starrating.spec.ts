import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starrating } from './starrating';

describe('Starrating', () => {
  let component: Starrating;
  let fixture: ComponentFixture<Starrating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starrating],
    }).compileComponents();

    fixture = TestBed.createComponent(Starrating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
