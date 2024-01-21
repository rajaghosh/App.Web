import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerDisplayComponent } from './hacker-display.component';

describe('HackerDisplayComponent', () => {
  let component: HackerDisplayComponent;
  let fixture: ComponentFixture<HackerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerDisplayComponent]
    });
    fixture = TestBed.createComponent(HackerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
