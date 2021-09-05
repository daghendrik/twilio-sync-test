import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncTestComponent } from './sync-test.component';

describe('SyncTestComponent', () => {
  let component: SyncTestComponent;
  let fixture: ComponentFixture<SyncTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
