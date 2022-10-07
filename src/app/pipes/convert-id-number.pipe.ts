import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertIdNumber'
})
export class ConvertIdNumberPipe implements PipeTransform {

  transform(value:string):any {

    let year = value.slice(1,3)
    let mon = value.slice(3,5)
    let day = value.slice(5,7)
    // let final_proc = `${day}-${mon}-${year}`;
    if (value.length == 14) {

      if(parseInt(year) <= 99) {

     let  tes3enat  = '19' + value.slice(1,3)

     return `${day}-${mon}-${tes3enat}`;

      } else {

        return `${day}-${mon}-${year}`
      }

      

    } else if (value.length > 14) {

      return `This Number greater than 14`

    } else {

      return `Wait for the date of birth`
    }
    

  }

}
