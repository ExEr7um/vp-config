import type { OxfmtConfig } from "vite-plus/fmt"

import { defu } from "defu"

/** Конфигурация форматирования по умолчанию */
export const defaultFmtConfig = {
  htmlWhitespaceSensitivity: "ignore",
  ignorePatterns: ["CHANGELOG.md"],
  objectWrap: "collapse",
  semi: false,
  sortPackageJson: { sortScripts: true },
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
