import { describe, expect, it } from "vite-plus/test"

import { defaultPackConfig, definePackConfig } from "../index.ts"

describe("definePackConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(definePackConfig()).toEqual(defaultPackConfig)
  })

  it("переопределяет параметры", () => {
    expect(definePackConfig({ entry: ["index.ts"], minify: false })).toEqual({
      ...defaultPackConfig,
      entry: ["index.ts"],
      minify: false,
    })
  })
})
