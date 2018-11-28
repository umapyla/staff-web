import { TestBed, async } from '@angular/core/testing';
import { CurrencyPipe } from './currency.pipe';
describe('Pipe: Currencye', () => {
  let pipe: CurrencyPipe;
  it('should create an instance', () => {
     pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
