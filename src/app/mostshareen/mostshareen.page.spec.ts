import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostshareenPage } from './mostshareen.page';

describe('MostshareenPage', () => {
  let component: MostshareenPage;
  let fixture: ComponentFixture<MostshareenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostshareenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostshareenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
