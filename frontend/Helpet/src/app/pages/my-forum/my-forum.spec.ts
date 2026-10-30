import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyForum } from './my-forum';

describe('MyForum', () => {
  let component: MyForum;
  let fixture: ComponentFixture<MyForum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyForum],
    }).compileComponents();

    fixture = TestBed.createComponent(MyForum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
