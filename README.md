# Workflow CA

A project implementing modern development workflow practices.

## Setup
1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your credentials

## Available Scripts
- `npm run dev` - Start development server
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run test:coverage` - Run tests with coverage
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run lint-fix` - Fix linting issues

## Environment Variables
Required environment variables:
- `TEST_USER_EMAIL`: Test user email for E2E tests (must be a noroff.no email)
- `TEST_USER_PASSWORD`: Test user password for E2E tests
