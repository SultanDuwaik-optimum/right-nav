import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAccountsComponent } from './tenant-accounts.component';

describe('TenantAccountsComponent', () => {
  let component: TenantAccountsComponent;
  let fixture: ComponentFixture<TenantAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
