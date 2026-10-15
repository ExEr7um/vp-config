import type { UserConfig } from "vite-plus"

/** Правила проверки файлов перед коммитом */
export type StagedConfig = Extract<
  NonNullable<UserConfig["staged"]>,
  Record<string, unknown>
>

/** Конфигурация `vp staged` по умолчанию */
export const defaultStagedConfig = {
  "*": "vp check --fix",
} as const satisfies StagedConfig

/**
 * Функция для создания конфигурации `vp staged`
 *
 * @param options - Правила, которые добавляются к правилам по умолчанию
 * @returns Конфигурация для блока `staged`
 */
export function defineStagedConfig(options: StagedConfig = {}): StagedConfig {
  return { ...defaultStagedConfig, ...options }
}
