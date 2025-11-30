import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import tailwindcss from '@tailwindcss/vite'

function collectLandings() {
  const root = path.resolve(__dirname, 'src/landings');
  const entries: Record<string, string> = {};

  if (fs.existsSync(root)) {
    for (const folder of fs.readdirSync(root)) {
      const file = path.join(root, folder, 'index.html');
      if (fs.existsSync(file)) {
        entries[folder] = file;
      }
    }
  }

  return entries;
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: collectLandings()
    }
  }
});
