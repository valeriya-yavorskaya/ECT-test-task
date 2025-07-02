import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTasks } from './js-tasks';

describe('JsTasks', () => {
  let component: JsTasks;
  let fixture: ComponentFixture<JsTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
