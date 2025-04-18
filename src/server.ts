// src/server.ts (Netlify Compatible - Intento 2)

// PASO 1: Verifica tu main.server.ts y ajusta la importación
import bootstrap from './main.server'; // Asumiendo exportación de función bootstrap

// --- PASO 2: Intenta importar por defecto ---
import netlifyAngularHandler from '@netlify/angular-runtime';
// Ya no necesitamos importar NetlifyAngularHandlerOptions explícitamente
// import { NetlifyAngularHandlerOptions } from '@netlify/angular-runtime'; // Comenta o borra esta línea

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// --- EXPORTA EL HANDLER DE NETLIFY ---

// Mantenemos el objeto options como antes (sin tipo explícito)
const options = {
  // PASO 3: Asegúrate que esto coincida con tu importación del PASO 1
  bootstrap: bootstrap,

  // PASO 4: Verifica que esta ruta apunte a tu carpeta de build del navegador
  outputPath: resolve(dirname(fileURLToPath(import.meta.url)), '../browser'),
};

// --- PASO 5: Llama al handler usando el nombre del