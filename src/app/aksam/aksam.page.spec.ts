import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AksamPage } from './aksam.page';

describe('AksamPage', () => {
  let component: AksamPage;
  let fixture: ComponentFixture<AksamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AksamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AksamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
