/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
/* eslint-enable */

import 'vue'

declare module 'vue' {
  interface HTMLAttributes extends interface {
    vModel?: unknown
  }
}
