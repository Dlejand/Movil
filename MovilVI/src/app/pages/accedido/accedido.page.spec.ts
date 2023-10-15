import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccedidoPage } from './accedido.page';

describe('AccedidoPage', () => {
  let component: AccedidoPage;
  let fixture: ComponentFixture<AccedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
