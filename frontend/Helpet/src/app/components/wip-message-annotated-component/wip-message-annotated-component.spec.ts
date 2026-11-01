import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WipMessageAnnotatedComponent } from './wip-message-annotated-component';

describe('WipMessageAnnotatedComponent', () => {
  let component: WipMessageAnnotatedComponent;
  let fixture: ComponentFixture<WipMessageAnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WipMessageAnnotatedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WipMessageAnnotatedComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
