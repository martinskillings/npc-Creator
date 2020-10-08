import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedNPCComponent } from './created-npc.component';

describe('CreatedNPCComponent', () => {
  let component: CreatedNPCComponent;
  let fixture: ComponentFixture<CreatedNPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedNPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedNPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
