# Prueba tecnica para Grupo Xcaret

Es una prueba que incorpora varias librerias y funcionalidades.

## Requisitos

- Node.js
- npm o yarn

## Variables de Entorno

Antes de iniciar el proyecto, debes configurar una variable de entorno para el acceso a la API de Exchange Rates:

- `EXCHANGE_RATE_API_KEY`: Es tu clave personal de acceso para https://exchangeratesapi.io/. Puedes obtener una registrándote en su sitio web.

### Configuración de Variables de Entorno

1. Copia el archivo `.env.example` a `.env.local` en el directorio raíz del proyecto.
2. Abre `.env.local` y asigna tu clave de acceso a `EXCHANGE_RATE_API_KEY`.

## Inicio Rápido

### Instalación

```bash
npm install
# o
yarn install
```

### Modo local

```bash
npm run dev
# o
yarn dev
```
Por defecto está configurado a iniciar en el puerto 3000.

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

### Test de componentes con Storybook

Para ejecutar Storybook:

```bash
npm run storybook
# o
yarn storybook
```

Esto iniciará Storybook en un nuevo puerto y podrás visualizar y trabajar con los componentes de la aplicación.

Se configuró el story para ver los cambios de los componentes en su versión mobile o descktop.

## Registro en Exchange Rates API

Para obtener tu clave de acceso:

1. Ve a [https://exchangeratesapi.io/](https://exchangeratesapi.io/) y haz click en "Get Free Key".
2. Regístrate utilizando tu email o cuenta de GitHub.
3. Una vez registrado, te proporcionarán una clave de acceso que puedes usar para configurar la variable `EXCHANGE_RATE_API_KEY` en tu entorno local.

## Demo

Se puede acceder al sitio desplegado en Vercel desde el siguiente enlace: [https://xcaret-frontend-test.vercel.app/](https://xcaret-frontend-test.vercel.app/)
