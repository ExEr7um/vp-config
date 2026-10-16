import { defineConfig } from "vite-plus"

import {
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  definePackConfig,
  defineStagedConfig,
} from "./src/index.ts"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  lint: defineLintConfig(),
  pack: definePackConfig(),
  staged: defineStagedConfig({}, { eslint: "*.{js,mjs,ts,json,yml}" }),
})
