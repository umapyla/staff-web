import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
describe('LoginComponent', () => {
   let component: LoginComponent;
   let fixture: ComponentFixture<LoginComponent>;
   let router: Router;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [LoginComponent],
         imports: [RouterTestingModule]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      router = TestBed.get(Router);
   });

   it('should be created', () => {
      expect(component).toBeTruthy();
   });

   it('router navigates to transactions', () => {
      const spy = spyOn(router, 'navigate');
      component.loginClick();
      expect(spy.calls.first().args[0]).toEqual(['/transactions']);
   });
});
