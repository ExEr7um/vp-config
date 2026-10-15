import { describe, expect, it } from "vite-plus/test"

import { defaultLintConfig, defineLintConfig } from "../index.ts"

describe("defineLintConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(defineLintConfig()).toEqual(defaultLintConfig)
  })

  it("дополняет правила", () => {
    expect(defineLintConfig({ rules: { "no-console": "error" } })).toEqual({
      ...defaultLintConfig,
      rules: { "no-console": "error" },
    })
  })
})
