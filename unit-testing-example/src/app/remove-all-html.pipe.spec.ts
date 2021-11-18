import { RemoveAllHtmlPipe } from './remove-all-html.pipe';

describe('RemoveAllHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe).toBeTruthy();
  });

  it('Remove HTML Tags', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe.transform('<h1>Hola!</h1>')).toEqual('Hola!');
  });

  it('Remove nested HTML Tags', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe.transform('<div><h1>Hola!</h1></div>')).toEqual('Hola!');
  });

  
  it('Remove multiple HTML Tags', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe.transform('<div><h1>Hola!</h1></div><div><h1>Hola!</h1></div>')).toEqual('Hola! Hola!');
  });

  it('On null return empty string', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe.transform(null)).toEqual('');
  });

  it('On undefined return empty string', () => {
    const pipe = new RemoveAllHtmlPipe();
    expect(pipe.transform(undefined)).toEqual('');
  });

});
