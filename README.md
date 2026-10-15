# Конфигурация Vite Plus

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/downloads/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/license/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)

Общая конфигурация [Vite Plus](https://viteplus.dev): форматирование (Oxfmt), линтинг (Oxlint), проверка файлов перед коммитом и сборка библиотек (tsdown).

## Установка

```bash
bun add -D vite-plus @exer7um/vp-config
```

```bash
pnpm i -D vite-plus @exer7um/vp-config
```

```bash
npm i -D vite-plus @exer7um/vp-config
```

```bash
yarn add -D vite-plus @exer7um/vp-config
```

## Использование

Для использования нужно создать файл `vite.config.ts` с содержимым:

```ts
import {
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  defineStagedConfig,
} from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  lint: defineLintConfig(),
  staged: defineStagedConfig(),
})
```

Добавить команды для запуска в `package.json`:

```json
{ "check": "vp check", "check:fix": "vp check --fix", "prepare": "vp config" }
```

Для проверки файлов перед коммитом нужно создать файл `.vite-hooks/pre-commit`:

```sh
vp staged
```

Добавить в файл `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "oxc.fmt.disableNestedConfig": true
}
```

## Конфигурация

Каждая функция принимает параметры соответствующего блока `vite.config.ts` и объединяет их с конфигурацией по умолчанию: значения переопределяются, вложенные объекты объединяются, массивы дополняются.

### Форматирование

| Параметр                     | Значение                    |
| ---------------------------- | --------------------------- |
| `htmlWhitespaceSensitivity`  | `"ignore"`                  |
| `ignorePatterns`             | `["CHANGELOG.md"]`          |
| `objectWrap`                 | `"collapse"`                |
| `printWidth`                 | `80`                        |
| `semi`                       | `false`                     |
| `sortTailwindcss.attributes` | `["ui"]`                    |
| `sortTailwindcss.functions`  | `["tv", "defineAppConfig"]` |

Для Tailwind CSS v4 нужно указать путь до файла стилей:

```ts
defineFmtConfig({
  sortTailwindcss: { stylesheet: "./app/assets/css/main.css" },
})
```

### Линтинг

Линтинг пока отключен в `vp check` через `defineCheckConfig`, правила еще не перенесены из `@exer7um/eslint-config`. Включить его можно так:

```ts
defineCheckConfig({ lint: true })
```

### Проверка перед коммитом

По умолчанию все файлы проверяются через `vp check --fix`. Дополнительные правила добавляются к нему:

```ts
defineStagedConfig({ "*.{vue,js,ts}": "eslint --cache --fix" })
```

### Сборка библиотек

`definePackConfig` задает параметры tsdown для `vp pack`: ESM, минификация, генерация `.d.mts` и очистка `dist` перед сборкой.

```ts
import { definePackConfig } from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({ pack: definePackConfig({ entry: ["index.ts"] }) })
```

Добавить команду для сборки в `package.json`:

```json
{ "build": "vp pack" }
```
