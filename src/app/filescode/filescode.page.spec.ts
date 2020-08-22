import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilescodePage } from './filescode.page';

describe('FilescodePage', () => {
  let component: FilescodePage;
  let fixture: ComponentFixture<FilescodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilescodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilescodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
