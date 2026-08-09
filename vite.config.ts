import { defineConfig, loadEnv } from 'vite'
import { federation } from '@module-federation/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const base = env.VITE_BASE_PATH || '/'
  const remoteEntry = env.VITE_REMOTE_APP_ENTRY || 'http://localhost:5174/remoteEntry.js'

  return {
    base,
    server: {
      port: 5173,
      strictPort: true,
    },
    preview: {
      port: 5173,
      strictPort: true,
    },
    plugins: [
      federation({
        name: 'hostApp',
        remotes: {
          remoteApp: {
            type: 'module',
            name: 'remoteApp',
            entry: remoteEntry,
          },
        },
        shared: {
          react: { singleton: true },
          'react/': { singleton: true },
          'react-dom': { singleton: true },
        },
        dts: false,
      }),
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
  }
})
