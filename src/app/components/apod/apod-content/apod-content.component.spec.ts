import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodContentComponent } from './apod-content.component';

describe('ApodContentComponent', () => {
  let component: ApodContentComponent;
  let fixture: ComponentFixture<ApodContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
