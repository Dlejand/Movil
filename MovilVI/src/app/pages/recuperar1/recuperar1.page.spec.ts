import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recuperar1Page } from './recuperar1.page';

describe('Recuperar1Page', () => {
  let component: Recuperar1Page;
  let fixture: ComponentFixture<Recuperar1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recuperar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
