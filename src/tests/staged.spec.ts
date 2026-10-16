import { describe, expect, it } from "vite-plus/test"

import { defaultStagedConfig, defineStagedConfig } from "../index.ts"

describe("defineStagedConfig", () => {
  it("возвращает конфигурацию по умолчанию", () => {
    expect(defineStagedConfig()).toEqual(defaultStagedConfig)
  })

  it("добавляет правила", () => {
    expect(defineStagedConfig({ "*.ts": "vp test related --run" })).toEqual({
      "*": "vp check --fix",
      "*.ts": "vp test related --run",
    })
  })

  it("разделяет файлы для ESLint и остальные", () => {
    expect(defineStagedConfig({}, { eslint: "*.{vue,ts}" })).toEqual({
      "!(*.{vue,ts})": "vp check --fix",
      "*.{vue,ts}": ["eslint --cache --fix", "vp check --fix"],
    })
  })
})
