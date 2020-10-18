import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyServicingPage } from './policy-servicing.page';

describe('PolicyServicingPage', () => {
  let component: PolicyServicingPage;
  let fixture: ComponentFixture<PolicyServicingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyServicingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyServicingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
