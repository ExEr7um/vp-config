# Конфигурация Vite Plus

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/downloads/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)
[![Open on npmx.dev](https://npmx.dev/api/registry/badge/license/@exer7um/vp-config)](https://npmx.dev/package/@exer7um/vp-config)

Общая конфигурация [Vite Plus](https://viteplus.dev): форматирование (Oxfmt), линтинг (Oxlint), проверка файлов перед коммитом и сборка библиотек (tsdown).

## Установка

```bash
bun add -D @exer7um/vp-config
```

```bash
pnpm i -D @exer7um/vp-config
```

```bash
npm i -D @exer7um/vp-config
```

```bash
yarn add -D @exer7um/vp-config
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

### Настройки редактора

Форматирует Oxfmt, линтинг остается за ESLint, поэтому Oxlint в редакторе отключен.

Для VS Code нужно установить расширения [Vite Plus](https://marketplace.visualstudio.com/items?itemName=VoidZero.vite-plus-extension-pack) и [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) и добавить в файл `.vscode/settings.json`:

```json
{
  "[javascript]": { "editor.defaultFormatter": "oxc.oxc-vscode" },
  "[javascriptreact]": { "editor.defaultFormatter": "oxc.oxc-vscode" },
  "[typescript]": { "editor.defaultFormatter": "oxc.oxc-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "oxc.oxc-vscode" },
  "[vue]": { "editor.defaultFormatter": "oxc.oxc-vscode" },
  "editor.codeActionsOnSave": { "source.fixAll": "explicit" },
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true,
  "oxc.disableNestedConfig": true,
  "oxc.enable.oxlint": false,
  "oxc.fmt.disableNestedConfig": true
}
```

Для Zed нужно установить расширение Oxc и добавить в файл `.zed/settings.json`. Oxfmt запускается из `vite-plus` проекта, иначе Zed скачивает отдельный Oxfmt, который не читает `vite.config.ts`:

```json
{
  "language_servers": ["!oxlint", "..."],
  "languages": {
    "CSS": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "GraphQL": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "HTML": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "Handlebars": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "JSON": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "JSON5": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "JSONC": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "JSX": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "JavaScript": {
      "code_actions_on_format": { "source.fixAll.eslint": true },
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "Less": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "MDX": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "Markdown": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "SCSS": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "TSX": {
      "code_actions_on_format": { "source.fixAll.eslint": true },
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "TypeScript": {
      "code_actions_on_format": { "source.fixAll.eslint": true },
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "Vue.js": {
      "code_actions_on_format": { "source.fixAll.eslint": true },
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    },
    "YAML": {
      "format_on_save": "on",
      "formatter": [{ "language_server": { "name": "oxfmt" } }],
      "prettier": { "allowed": false }
    }
  },
  "lsp": {
    "oxfmt": {
      "binary": { "arguments": ["fmt", "--lsp"], "path": "node_modules/vite-plus/bin/vp" },
      "initialization_options": {
        "settings": { "fmt.configPath": "./vite.config.ts", "run": "onSave" }
      }
    }
  }
}
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

### Линтинг

Линтинг пока отключен в `vp check` через `defineCheckConfig`, правила еще не перенесены из `@exer7um/eslint-config`. Включить его можно так:

```ts
defineCheckConfig({ lint: true })
```

### Проверка перед коммитом

По умолчанию все файлы проверяются через `vp check --fix`. Пока линтинг остается за ESLint, файлы для него передаются глобом: они сначала исправляются ESLint, а потом проверяются через `vp check --fix`.

```ts
defineStagedConfig({}, { eslint: "*.{vue,js,jsx,cjs,mjs,ts,json,yaml}" })
```

Правила для разных глобов запускаются параллельно, поэтому дополнительные правила не должны изменять файлы:

```ts
defineStagedConfig({ "*.ts": "vp test related --run" })
```

### Сборка библиотек

`definePackConfig` включает минификацию в `vp pack`. Остальные параметры остаются по умолчанию tsdown: ESM, очистка `dist` перед сборкой и генерация `.d.mts`, если в `package.json` есть поле `types`.

```ts
import { definePackConfig } from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({ pack: definePackConfig({ entry: ["index.ts"] }) })
```

Добавить команду для сборки в `package.json`:

```json
{ "build": "vp pack" }
```
