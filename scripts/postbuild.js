// scripts/postbuild.js
const fs = require('fs-extra');
const path = require('path');

const serverDir = path.join(__dirname, '../dist/casa-laureles/server'); // Ajusta 'casa-laureles' si tu nombre es diferente
const internalDir = path.join(serverDir, 'internal');
const filesToMove = ['main.server.mjs', 'polyfills.server.mjs'];

async function moveFiles() {
  try {
    // Asegurarse que el directorio de servidor existe (por si acaso)
    if (!await fs.pathExists(serverDir)) {
      console.warn(`Directorio del servidor no encontrado: ${serverDir}. Saltando postbuild.`);
      return;
    }

    // Crear el directorio 'internal' si no existe
    await fs.ensureDir(internalDir);
    console.log(`Directorio ${internalDir} asegurado.`);

    // Mover cada archivo problemático
    for (const fileName of filesToMove) {
      const sourcePath = path.join(serverDir, fileName);
      const destPath = path.join(internalDir, fileName);

      if (await fs.pathExists(sourcePath)) {
        await fs.move(sourcePath, destPath, { overwrite: true });
        console.log(`Movido ${fileName} a ${internalDir}`);
      } else {
        console.warn(`Archivo ${fileName} no encontrado en ${serverDir}. No se movió.`);
      }
    }
    console.log('Script postbuild completado exitosamente.');

  } catch (err) {
    console.error('Error durante el script postbuild:', err);
    process.exit(1); // Salir con error para que el build falle si el script falla
  }
}

moveFiles();