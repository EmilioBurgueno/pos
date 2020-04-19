import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoDonePage } from './co-done.page';

describe('CoDonePage', () => {
  let component: CoDonePage;
  let fixture: ComponentFixture<CoDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
