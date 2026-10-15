import type { OxfmtConfig } from "vite-plus/fmt"

import { defu } from "defu"

/** Конфигурация форматирования по умолчанию */
export const defaultFmtConfig = {
  htmlWhitespaceSensitivity: "ignore",
  ignorePatterns: ["CHANGELOG.md"],
  objectWrap: "collapse",
  // У Prettier ширина строки 80, у Oxfmt по умолчанию 100
  printWidth: 80,
  semi: false,
  sortTailwindcss: { attributes: ["ui"], functions: ["tv", "defineAppConfig"] },
} as const satisfies OxfmtConfig

/**
 * Функция для создания конфигурации форматирования `vp fmt`
 *
 * @param options - Параметры Oxfmt, которые объединяются с конфигурацией по умолчанию
 * @returns Конфигурация для блока `fmt`
 */
export function defineFmtConfig(options: OxfmtConfig = {}): OxfmtConfig {
  return defu(options, defaultFmtConfig)
}
