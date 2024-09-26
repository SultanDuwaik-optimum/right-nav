import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@OptimumPartners/olive-uitk/src/components/icon/src/public-api';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let mockRouter: Partial<Router>;
  let mockMatIconRegistry: Partial<MatIconRegistry>;
  let mockDomSanitizer: Partial<DomSanitizer>;

  beforeEach(async () => {
    mockRouter = {
      url: '/test',
    };

    mockMatIconRegistry = {
      addSvgIcon: jest.fn(),
    };

    mockDomSanitizer = {
      bypassSecurityTrustResourceUrl: jest.fn((url) => url),
    };

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, BrowserAnimationsModule],
      declarations: [],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MatIconRegistry, useValue: mockMatIconRegistry },
        { provide: DomSanitizer, useValue: mockDomSanitizer },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    component.navItems = [
      { icon: 'test-icon', name: 'test', label: 'Test', event: jest.fn() },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should register icons for each nav item', () => {
      component.ngOnInit();
      expect(mockMatIconRegistry.addSvgIcon).toHaveBeenCalledWith(
        'test',
        'test-icon',
      );
    });
  });

  describe('isItemSelected', () => {
    it('should return true if the nav item name matches the first segment of the URL', () => {
      component.navItems[0].name = 'test';
      expect(component.isItemSelected(component.navItems[0])).toBe(true);
    });

    it('should return false if the nav item name does not match the first segment of the URL', () => {
      component.navItems[0].name = 'not-test';
      expect(component.isItemSelected(component.navItems[0])).toBe(false);
    });
  });
});
