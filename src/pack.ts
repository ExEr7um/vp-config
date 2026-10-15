import type { PackUserConfig } from "vite-plus/pack"

import { defu } from "defu"

/** Конфигурация сборки библиотеки по умолчанию */
export const defaultPackConfig = {
  clean: true,
  dts: true,
  format: "esm",
  minify: true,
} as const satisfies PackUserConfig

/**
 * Функция для создания конфигурации сборки `vp pack`
 *
 * @param options - Параметры tsdown, которые объединяются с конфигурацией по умолчанию
 * @returns Конфигурация для блока `pack`
 */
export function definePackConfig(options: PackUserConfig = {}): PackUserConfig {
  return defu(options, defaultPackConfig)
}
