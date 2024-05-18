
import { defineConfig, UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import  {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import  path from "path";

export default ({ command }: ConfigEnv): UserConfigExport => {
    return{
      plugins: [
        vue(),
        viteMockServe({
          // default
          mockPath: 'mock',
          enable: true,
        }),
        createSvgIconsPlugin({
          iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
          symbolId:'icon-[dir]-[name]',
            }
        ),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),

      ],
      resolve:{
        alias:{
          "@": path.resolve("./src")
        }
      },

      //scss全局变量配置
      css:{
        preprocessorOptions:{
          scss:{
            javascriptEnabled:true,
            additionalData:'@import "./src/styles/variable.scss";'
          }
        }
      }
}
}
