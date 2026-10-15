import { defineConfig } from "vite-plus"

import { defineFmtConfig } from "./src/index.ts"

export default defineConfig({ fmt: defineFmtConfig() })
