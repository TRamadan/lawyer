import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoignPage } from './loign.page';

describe('LoignPage', () => {
  let component: LoignPage;
  let fixture: ComponentFixture<LoignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
