import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportFeuilleHeureComponent } from './rapport-feuille-heure.component';

describe('RapportFeuilleHeureComponent', () => {
  let component: RapportFeuilleHeureComponent;
  let fixture: ComponentFixture<RapportFeuilleHeureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportFeuilleHeureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportFeuilleHeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
