import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreartarjetaComponent } from './dialog-creartarjeta.component';

describe('DialogCreartarjetaComponent', () => {
  let component: DialogCreartarjetaComponent;
  let fixture: ComponentFixture<DialogCreartarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreartarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreartarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
