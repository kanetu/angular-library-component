import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanetuComponent } from './kanetu.component';

describe('KanetuComponent', () => {
  let component: KanetuComponent;
  let fixture: ComponentFixture<KanetuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KanetuComponent,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanetuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
