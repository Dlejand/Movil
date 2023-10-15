import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recuperar2Page } from './recuperar2.page';

describe('Recuperar2Page', () => {
  let component: Recuperar2Page;
  let fixture: ComponentFixture<Recuperar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recuperar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
