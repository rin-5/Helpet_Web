import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForumCard } from './forum-card';

describe('ForumCard', () => {
  let component: ForumCard;
  let fixture: ComponentFixture<ForumCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ForumCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
