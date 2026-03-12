const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Encuentra la raíz del monorepo
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Observar todos los archivos en el monorepo
config.watchFolders = [workspaceRoot];

// 2. Forzar a Metro a buscar dependencias en el nodo raíz primero
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

module.exports = config;
