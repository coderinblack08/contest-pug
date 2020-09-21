package.json:
{
  "name": "@contest-pug/server",
  "version": "1.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "scripts": {
    "start": "ts-node src/index.ts",
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
  },
  "devDependencies": {
    "@types/node": "^14.11.1",
    "nodemon": "^2.0.4",
    "ts-node": "^9.0.0",
    "typescript": "^4.0.3"
  }
}

tsconfig: 
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  }
}

