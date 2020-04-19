import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionDescPage } from './transaction-desc.page';

describe('TransactionDescPage', () => {
  let component: TransactionDescPage;
  let fixture: ComponentFixture<TransactionDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
