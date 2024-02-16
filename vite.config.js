import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  server:{
    open:true,
    port:8088
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  },
  plugins: [
    vue(),
    Components({ resolvers: [ElementPlusResolver()],}),
    Components({ resolvers: AntDesignVueResolver() }),
  ],
})
