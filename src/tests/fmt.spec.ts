import { describe, expect, it } from "vite-plus/test"

import { defaultFmtConfig, defineFmtConfig } from "../index.ts"

describe("defineFmtConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(defineFmtConfig()).toEqual(defaultFmtConfig)
  })

  it("переопределяет параметры", () => {
    expect(defineFmtConfig({ semi: true })).toMatchObject({
      semi: true,
      sortPackageJson: { sortScripts: true },
    })
  })

  it("дополняет вложенные параметры", () => {
    expect(
      defineFmtConfig({
        ignorePatterns: ["dist"],
        sortTailwindcss: { stylesheet: "./app/assets/css/main.css" },
      }),
    ).toMatchObject({
      ignorePatterns: ["dist", "CHANGELOG.md"],
      sortTailwindcss: {
        attributes: ["ui"],
        functions: ["tv", "defineAppConfig"],
        stylesheet: "./app/assets/css/main.css",
      },
    })
  })

  it("отключает сортировку классов Tailwind CSS", () => {
    expect(defineFmtConfig({ sortTailwindcss: false }).sortTailwindcss).toBe(false)
  })
})
