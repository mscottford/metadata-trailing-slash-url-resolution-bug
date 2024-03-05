# Metadata URL Resolution Bug Demonstration

This repository is a demonstration of a bug in Next's metadata URL resolution for static exports that have `trailingSlash: true`.

## Steps to reproduce

Create the static build and start an http server to host the contents.

```bash
npm run start-static
```

In a different terminal, run the tests.

```bash
npm run test
```
