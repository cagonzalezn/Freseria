import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFresaComponent } from './custom-fresa.component';

describe('CustomFresaComponent', () => {
  let component: CustomFresaComponent;
  let fixture: ComponentFixture<CustomFresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
