

// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     plugins: [react()],
//     server: {
//       host: '0.0.0.0', 
//       port: 5173,      
//       open: true,      
//     },
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV)
//     }
//   };
// });


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Import the resolve function from the 'path' module for path resolution

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode and make all variables available
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // Makes the server accessible on your local network
      port: 5173,      // Optionally specify a custom port (default is 3000)
      open: true,      // Optionally automatically open the browser on the server start
    },
    resolve: {
      alias: {
        // Setup aliases for directories, can make imports cleaner
        '@': resolve(__dirname, './src'),
        // Add more aliases if needed
      }
    },
    build: {
      outDir: 'dist', // Specify the output directory (default is 'dist')
      assetsDir: 'assets', // Specify the assets subdirectory within the output directory
      sourcemap: mode === 'development', // Generate source maps only in development mode
      minify: mode === 'production' ? 'terser' : false, // Minify the output using terser in production
      terserOptions: {
        compress: {
          drop_console: mode === 'production', // Remove console.logs in production
        },
      },
      rollupOptions: {
        // Additional options for Rollup
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        }
      }
    },
    define: {
      // This will make `__APP_ENV__` accessible as a global constant in your application
      // Replace `__APP_ENV__` with any other global constants you need
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    }
  };
});
