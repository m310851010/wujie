import { environment } from './environments/environment';

const map = {
  '//localhost:7100/': '//wujie-micro.github.io/demo-react17/',
  '//localhost:7200/': '//wujie-micro.github.io/demo-vue2/',
  '//localhost:7300/': '//wujie-micro.github.io/demo-vue3/',
  '//localhost:7400/': '//wujie-micro.github.io/demo-angular12/',
  '//localhost:7500/': '//wujie-micro.github.io/demo-vite/',
  '//localhost:7600/': '//wujie-micro.github.io/demo-react16/',
  '//localhost:7700/': '//wujie-micro.github.io/demo-main-react/',
  '//localhost:8000/': '//wujie-micro.github.io/demo-main-vue/',
  "//localhost:8200/": "//wujie-micro.github.io/demo-main-angular/"
};

export function hostMap(host: keyof typeof map) {
    return environment.production ? map[host] : host;
}
