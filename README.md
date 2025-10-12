# node-template

## Task

Node.js template powered with:

- Typescript and JavaScirpt
- Pnpm package manager
- Tsup bundler
- Vitest test run, watch and coverage
- ESLint lint and fix
- Prettier lint, fix and organize imports
- Editor config
- Pre-commit hook with lint and test

## Installation

Run `pnpm install` to install dependencies

## Development

Run `pnpm start` to start the project

The application will automatically restart if you change any of the source files

## Build

Run `pnpm build` to build the project. The build artifacts will be stored in the `dist/` directory

## Prod

Run `pnpm prod` to run built project from `dist/` directory

## Run tests

Run `pnpm test` to execute unit tests

Run `pnpm test:watch` to execute unit tests in watch mode

Run `pnpm test:coverage` to generate [coverage report](./coverage/index.html)

## Run code quality checks

Run `pnpm lint` for code quality checks and fixes. It happens automatically in pre-commit hook.

## Update library versions

Run `pnpm update` to update libraries to the latest versions.
