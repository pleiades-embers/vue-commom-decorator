import { createDecorator } from 'vue-class-component';
import useSWR from 'swrv';

export function UseSWR(key: string, fetcher: (...args: any[]) => any) {
  console.log(key,fetcher,"111")
  return createDecorator((options, key) => {
    options.computed = options.computed || {};
    options.computed[key] = function() {
      const { data, error } = useSWR(key, fetcher);
      return {
        loading: !error && !data,
        error,
        data,
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