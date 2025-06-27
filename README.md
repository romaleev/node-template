# node-template

## Task

Node.js template powered with:

- Typescript
- ESLint lint, fix, coverage
- Prettier lint, fix, organize imports
- Pre-commit hook with lint and test
- Editor config
- Jest test
- NPM check updates

## Installation

Run `pnpm install` to install dependencies

## Development

Run `pnpm start` to start the project

The application will automatically restart if you change any of the source files

## Build

Run `pnpm build` to build the project. The build artifacts will be stored in the `dist/` directory

## Run tests

Run `pnpm test:run` to execute unit tests

Run `pnpm test:watch` to execute unit tests in watch mode

Run `pnpm test:coverage` to generate [coverage report](./coverage/index.html)

## Run code quality checks

Run `pnpm lint` for code quality checks.

Run `pnpm lintfix` for code quality fixes. It happens automatically in pre-commit hook.

## Update library versions

Run `pnpm update` to update libraries to the latest versions.
