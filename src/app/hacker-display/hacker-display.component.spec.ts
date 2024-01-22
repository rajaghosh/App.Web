import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerDisplayComponent } from './hacker-display.component';
import { HackerService } from 'src/services/hacker.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HackerDisplayComponent', () => {
  let component: HackerDisplayComponent;
  let fixture: ComponentFixture<HackerDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerDisplayComponent],
      imports:
        [
          HttpClientTestingModule,
          MatInputModule,
          MatFormFieldModule,
          MatPaginatorModule,
          MatProgressSpinnerModule,
          MatTableModule,
          BrowserAnimationsModule
        ],
      providers: [HackerService],
    });
    fixture = TestBed.createComponent(HackerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create HackerDisplayComponent', () => {
    const fixture = TestBed.createComponent(HackerDisplayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'R System Hacker Data Information Page'`, () => {
    const fixture = TestBed.createComponent(HackerDisplayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('R System Hacker Data Information Page');
  });

  it(`should render title 'R System Hacker Data Information Page' in a h1 tag`, () => {
    const fixture = TestBed.createComponent(HackerDisplayComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('R System Hacker Data Information Page');
  });


});

