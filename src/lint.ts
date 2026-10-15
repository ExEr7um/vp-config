import type { OxlintConfig } from "vite-plus/lint"

import { defu } from "defu"

/** Конфигурация линтинга по умолчанию */
export const defaultLintConfig = {
  categories: { correctness: "error" },
} as const satisfies OxlintConfig

/**
 * Функция для создания конфигурации линтинга `vp lint`
 *
 * @param options - Параметры Oxlint, которые объединяются с конфигурацией по умолчанию
 * @returns Конфигурация для блока `lint`
 */
export function defineLintConfig(options: OxlintConfig = {}): OxlintConfig {
  return defu(options, defaultLintConfig)
}
