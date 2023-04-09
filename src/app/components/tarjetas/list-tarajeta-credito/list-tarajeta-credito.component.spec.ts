import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarajetaCreditoComponent } from './list-tarajeta-credito.component';

describe('ListTarajetaCreditoComponent', () => {
  let component: ListTarajetaCreditoComponent;
  let fixture: ComponentFixture<ListTarajetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTarajetaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTarajetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
