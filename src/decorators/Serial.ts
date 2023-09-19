import { createDecorator } from 'vue-class-component';


export function Serial(initialValue: number) {
  
    return createDecorator((options:any, key:string) => {
      console.log(options, key);

      options[key] = initialValue;
    });
}

