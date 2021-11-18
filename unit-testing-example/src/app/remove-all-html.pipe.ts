import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAllHtml'
})
export class RemoveAllHtmlPipe implements PipeTransform {

  transform(html: any, ...args: unknown[]): unknown {
    const xmlTagRegex = /(<([^>]+)>)/ig;
    const multipleSpaceRegex = /\s+/g;
    return html?.replace(xmlTagRegex , ' ')
      .replace(multipleSpaceRegex, " ")
      .trim() ?? '';
  }
  //  <h1>Hola!</h1> => Hola!


}
