# TremTec - Tech Accelerator

TremTec Web App made with `solid-start`, `tailwincss`, `vite`.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Tasks

- [x] setup linter (eslint + prettier)
- [x] setup git hooks + lint-staged
- [x] setup paths
- [x] move some shared components
- [x] add tremec logos
- [x] add contact form
- [x] add a CTA
- [ ] setup vitest
- [ ] move text to settings
- [ ] add some animation
