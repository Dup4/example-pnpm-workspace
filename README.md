# example-pnpm-workspace

[![Test](https://github.com/Dup4/example-pnpm-workspace/actions/workflows/test.yml/badge.svg)](https://github.com/Dup4/example-pnpm-workspace/actions/workflows/test.yml)
[![Lint](https://github.com/Dup4/example-pnpm-workspace/actions/workflows/lint.yml/badge.svg)](https://github.com/Dup4/example-pnpm-workspace/actions/workflows/lint.yml)
[![GitHub release](https://img.shields.io/github/release/Dup4/example-pnpm-workspace.svg)](https://GitHub.com/Dup4/example-pnpm-workspace/releases/)

## Tutorial

### Install deps

```bash
pnpm install typescript -w
pnpm install react -r --filter @dup4/example-pnpm-workspace-ui
pnpm install @dup4/example-pnpm-workspace-utils -r --filter @dup4/example-pnpm-workspace-core
```

## License

[MIT](./LICENSE) License © 2022 [Dup4](https://github.com/Dup4)
