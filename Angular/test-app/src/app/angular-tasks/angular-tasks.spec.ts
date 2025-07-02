import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTasks } from './angular-tasks';

describe('AngularTasks', () => {
  let component: AngularTasks;
  let fixture: ComponentFixture<AngularTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
