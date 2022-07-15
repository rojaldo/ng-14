import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivialCardComponent } from './trivial-card.component';

describe('TrivialCardComponent', () => {
  let component: TrivialCardComponent;
  let fixture: ComponentFixture<TrivialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrivialCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrivialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
