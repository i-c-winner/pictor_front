import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig(({ mode }) => {
  // Загружаем переменные из .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    publicDir: 'src/shared',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$font-path: "${env.VITE_FONT_PATH}";`
        }
      }
    }
  };
});

