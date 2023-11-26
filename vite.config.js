import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Importante: Certifique-se de que os caminhos para cert.pem e key.pem estão corretos.
// Eles devem ser relativos à localização do arquivo vite.config.js.

// O método fileURLToPath converte uma URL do tipo file:// para um caminho de arquivo
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// Obtenha o diretório atual de onde o script está sendo executado
// const __dirname = dirname(fileURLToPath(import.meta.url));

// Caminhos para o certificado e chave
const certPath = `/home/kalil/cert.pem`;
const keyPath = `/home/kalil/key.pem`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    // Pode ser necessário especificar o host se você estiver tendo problemas para acessar via HTTPS
    host: '0.0.0.0', // Isso permite acessar o servidor de desenvolvimento de outros dispositivos na mesma rede
  },
});
