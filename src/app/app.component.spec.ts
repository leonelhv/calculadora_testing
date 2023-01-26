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

  it('should multiply 2 numbers, multiplicacion(num1: number, num2: number)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockData = { valor1: 1, valor2: 3 };
    const expectedResult = 3;

    const result = app.multiplicacion(mockData.valor1, mockData.valor2);
    expect(result).toEqual(expectedResult);
  });

  it('should divide 2 numbers, division(num1: number, num2: number)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockData = { valor1: 12, valor2: 3 };
    const expectedResult = 4;

    const result = app.division(mockData.valor1, mockData.valor2);
    expect(result).toEqual(expectedResult);
  });

  it('should addition 2 numbers, suma(num1: number, num2: number)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockData = { valor1: 1, valor2: 3 };
    const expectedResult = 4;

    const result = app.suma(mockData.valor1, mockData.valor2);
    expect(result).toEqual(expectedResult);
  });

  it('should subtract 2 numbers, resta(num1: number, num2: number)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const mockData = { valor1: 12, valor2: 3 };
    const expectedResult = 9;

    const result = app.resta(mockData.valor1, mockData.valor2);
    expect(result).toEqual(expectedResult);
  });
});
