import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailed } from './article-detailed';

describe('ArticleDetailed', () => {
  let component: ArticleDetailed;
  let fixture: ComponentFixture<ArticleDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetailed],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
