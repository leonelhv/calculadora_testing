import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculadora_testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculadora_testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'calculadora_testing app is running!'
    );
  });

  it('should multiply 2 numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.dato1 = '7';
    app.dato2 = '8';
    app.operacion = 'multiplicacion';
    app.onOperacion();

    const expectResult = 56;

    expect(app.resultado).toEqual(expectResult);
  });
  it('should divide 2 numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.dato1 = '18';
    app.dato2 = '2';
    app.operacion = 'division';
    app.onOperacion();

    const expectResult = 9;

    expect(app.resultado).toEqual(expectResult);
  });
  it('should addition 2 numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.dato1 = '7';
    app.dato2 = '8';
    app.operacion = 'suma';
    app.onOperacion();

    const expectResult = 15;

    expect(app.resultado).toEqual(expectResult);
  });
  it('should subtract 2 numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.dato1 = '17';
    app.dato2 = '8';
    app.operacion = 'resta';
    app.onOperacion();

    const expectResult = 9;

    expect(app.resultado).toEqual(expectResult);
  });
});
