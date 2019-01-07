import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name:'convertToSpaces'      //we will refer this name to html
 
})
export class ConvertToSpacesPipe implements PipeTransform {


    transform(value:string , character: string ) : string {
        return value.replace(character,' ') ;
    }


}