// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html',
          dest: '.'
        },
        {
          src: 'CNAME',
          dest: '.'
        }
      ]
    })

  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  
  // plugins: [
   
  // ]

});

