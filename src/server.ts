// src/server.ts (Netlify Compatible - Corregido TS2554)

import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';
import bootstrap from './main.server'; // Asegúrate que este import es correcto

// --- PASO 4: Crea la instancia del AppEngine SIN ARGUMENTOS ---
const angularAppEngine = new AngularAppEngine();
// Ya no se pasa { bootstrap: bootstrap } aquí
// ---------------------------------------------------------

// --- PASO 5: Define el handler principal para Netlify Functions ---
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // --- Opcional: API routes ---
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }
  // --------------------------

  // Llama a handle SIN pasar bootstrap explícitamente aquí tampoco
  // El engine debería encontrarlo por convención
  console.log(`SSR Handling request for: ${request.url}`);
  const result = await angularAppEngine.handle(request, context);

  if (!result) {
      console.log(`SSR No result for: ${request.url}, returning 404.`);
      return new Response('Not found', { status: 404 });
  }
  console.log(`SSR Successfully handled: ${request.url}`);
  return result;
}

// --- PASO 6: Exporta el reqHandler (sin cambios) ---
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);