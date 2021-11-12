import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'snakeCase'
})
export class SnakePipe implements PipeTransform {

    transform(text: string, ...args: any[]) {
        return text.split(' ').join(args[0]);
    }

}