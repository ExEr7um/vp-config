import type { UserConfig } from "vite-plus"

import { defu } from "defu"

/** Параметры композитной команды `vp check` */
export type CheckConfig = NonNullable<UserConfig["check"]>

/** Конфигурация `vp check` по умолчанию */
export const defaultCheckConfig = {
  // Правила ESLint еще не перенесены в Oxlint
  lint: false,
} as const satisfies CheckConfig

/**
 * Функция для создания конфигурации `vp check`
 *
 * @param options - Параметры, которые объединяются с конфигурацией по умолчанию
 * @returns Конфигурация для блока `check`
 */
export function defineCheckConfig(options: CheckConfig = {}): CheckConfig {
  return defu(options, defaultCheckConfig)
}
