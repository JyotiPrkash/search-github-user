import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbToastService } from 'ngb-toast';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule],
      providers: [ NgbToastService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create homecomponent', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a searchQuery 'empty'`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.searchQuery).toBe('');
  });

  it(`should have a pageNumber '1'`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.pageNumber).toBe(1);
  });

  it(`should have a totalRepoCount '0'`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.totalRepoCount).toBe(0);
  });

  it(`should have a isLoaderActive 'true'`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.isLoaderActive).toBe(true);
  });

  it(`searchUser should be defined `, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.searchUser).toBeDefined();
  });

  it(`getRepos should be defined `, () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.getRepos).toBeDefined();
  });

});
