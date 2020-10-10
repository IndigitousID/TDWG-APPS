import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsAddPage } from './settings-add.page';

describe('SettingsAddPage', () => {
  let component: SettingsAddPage;
  let fixture: ComponentFixture<SettingsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
