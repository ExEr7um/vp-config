import { defineConfig } from "vite-plus"

import {
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  defineStagedConfig,
} from "./src/index.ts"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  lint: defineLintConfig(),
  staged: defineStagedConfig(),
})
