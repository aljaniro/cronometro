import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacContainerComponent } from './reac-container.component';

describe('ReacContainerComponent', () => {
  let component: ReacContainerComponent;
  let fixture: ComponentFixture<ReacContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
