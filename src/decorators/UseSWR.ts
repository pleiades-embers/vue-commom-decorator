import { createDecorator } from 'vue-class-component';
import useSWR from 'swrv';

export function UseSWR(key: string, fetcher: (...args: any[]) => any) {
  return createDecorator((options, key) => {
    options.methods= options.methods || {};
    options.methods[key] = function () {
      let res = useSWR(key, fetcher)
      console.log(res,"res")
      let data=res.data, error = res.error
      return {
          loading: !error && !data,
          error: error,
          data: data,
      };
    };
  });
}

// import { Vue, Component } from 'vue-property-decorator';
// import { UseSWR } from './UseSWR';

// @Component
// export default class MyComponent extends Vue {
//   @UseSWR('api/data', fetch)
//   data: any;

//   fetch(url: string) {
    // 实现你的数据获取逻辑
//   }
// }