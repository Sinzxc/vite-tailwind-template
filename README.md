# Your UI Kit

A modern React UI Kit with Tailwind CSS.

## Features

- 🎨 Built with Tailwind CSS
- 📦 Tree-shakeable exports
- 💪 Written in TypeScript
- 🎭 Storybook documentation
- ⚡ Powered by Vite

## Installation

```bash
npm install @your-org/ui-kit
```

## Usage

1. Add the UI Kit's Tailwind preset to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    ***
    './node_modules/@sinzxc/ots-ui-kit/dist/**/*.js',
  ],
  // ... your config
}
```

2. Import and use components:

```jsx
import { Button } from '@your-org/ui-kit'

function App() {
  return (
    <Button variant="primary">
      Click me!
    </Button>
  )
}
```

## Documentation

Visit our Storybook documentation at [link-to-your-storybook]

## Available Components

- `Button` - Versatile button component with multiple variants and states
- `ErrorBoundary` - React error boundary for graceful error handling

## Documentation

For detailed documentation and examples, run the Storybook locally:

```bash
npm run storybook
```
