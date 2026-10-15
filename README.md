# Конфигурация Vite Plus

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/downloads/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/license/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)

Общая конфигурация [Vite Plus](https://viteplus.dev): форматирование (Oxfmt).

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
import { defineFmtConfig } from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({ fmt: defineFmtConfig() })
```

Добавить команды для запуска в `package.json`:

```json
{ "check": "vp check", "check:fix": "vp check --fix" }
```

Добавить в файл `.vscode/settings.json`:

```json
{ "editor.defaultFormatter": "oxc.oxc-vscode", "oxc.fmt.disableNestedConfig": true }
```

## Конфигурация

Каждая функция принимает параметры соответствующего блока `vite.config.ts` и объединяет их с конфигурацией по умолчанию: значения переопределяются, вложенные объекты объединяются, массивы дополняются.

### Форматирование

| Параметр                      | Значение                    |
| ----------------------------- | --------------------------- |
| `htmlWhitespaceSensitivity`   | `"ignore"`                  |
| `ignorePatterns`              | `["CHANGELOG.md"]`          |
| `objectWrap`                  | `"collapse"`                |
| `semi`                        | `false`                     |
| `sortPackageJson.sortScripts` | `true`                      |
| `sortTailwindcss.attributes`  | `["ui"]`                    |
| `sortTailwindcss.functions`   | `["tv", "defineAppConfig"]` |

Для Tailwind CSS v4 нужно указать путь до файла стилей:

```ts
defineFmtConfig({ sortTailwindcss: { stylesheet: "./app/assets/css/main.css" } })
```
