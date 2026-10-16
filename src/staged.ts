import type { UserConfig } from "vite-plus"

/** Правила проверки файлов перед коммитом */
export type StagedConfig = Extract<NonNullable<UserConfig["staged"]>, Record<string, unknown>>

/** Параметры пресета `vp staged` */
export interface StagedOptions {
  /** Глоб файлов, которые перед `vp check --fix` исправляет ESLint */
  eslint?: string
}

/** Конфигурация `vp staged` по умолчанию */
export const defaultStagedConfig = { "*": "vp check --fix" } as const satisfies StagedConfig

/**
 * Функция для создания конфигурации `vp staged`
 *
 * @param rules - Правила, которые добавляются к правилам по умолчанию
 * @param options - Параметры пресета
 * @returns Конфигурация для блока `staged`
 */
export function defineStagedConfig(
  rules: StagedConfig = {},
  options: StagedOptions = {},
): StagedConfig {
  const { eslint } = options
  if (!eslint) return { ...defaultStagedConfig, ...rules }

  // Разные глобы запускаются параллельно, поэтому они не должны пересекаться
  return {
    [`!(${eslint})`]: "vp check --fix",
    [eslint]: ["eslint --cache --fix", "vp check --fix"],
    ...rules,
  }
}
