import { describe, expect, it } from "vite-plus/test"

import {
  defaultCheckConfig,
  defaultFmtConfig,
  defaultLintConfig,
  defaultPackConfig,
  defaultStagedConfig,
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  definePackConfig,
  defineStagedConfig,
} from "../index.ts"

describe("defineFmtConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(defineFmtConfig()).toEqual(defaultFmtConfig)
  })

  it("переопределяет параметры", () => {
    expect(defineFmtConfig({ semi: true })).toMatchObject({
      printWidth: 80,
      semi: true,
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
    expect(defineFmtConfig({ sortTailwindcss: false }).sortTailwindcss).toBe(
      false,
    )
  })
})

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

describe("defineCheckConfig", () => {
  it("отключает линтинг по умолчанию", () => {
    expect(defineCheckConfig()).toEqual(defaultCheckConfig)
    expect(defineCheckConfig().lint).toBe(false)
  })

  it("включает линтинг", () => {
    expect(defineCheckConfig({ lint: true })).toEqual({ fmt: true, lint: true })
  })
})

describe("defineStagedConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(defineStagedConfig()).toEqual(defaultStagedConfig)
  })

  it("добавляет правила", () => {
    expect(
      defineStagedConfig({ "*.{vue,ts}": "eslint --cache --fix" }),
    ).toEqual({ "*": "vp check --fix", "*.{vue,ts}": "eslint --cache --fix" })
  })
})

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
