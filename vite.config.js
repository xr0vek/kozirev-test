import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        //   @import "./src/styles/variables.scss";
        //   @import "./src/styles/mixins.scss";
        `,
      },
    },
  },
});