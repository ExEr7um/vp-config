import { describe, expect, it } from "vite-plus/test"

import { defaultCheckConfig, defineCheckConfig } from "../index.ts"

describe("defineCheckConfig", () => {
  it("отключает линтинг по умолчанию", () => {
    expect(defineCheckConfig()).toEqual(defaultCheckConfig)
    expect(defineCheckConfig().lint).toBe(false)
  })

  it("включает линтинг", () => {
    expect(defineCheckConfig({ lint: true })).toEqual({ lint: true })
  })
})
