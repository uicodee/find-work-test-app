## Начало работы

Для начала склонируйте репозиторий и введите в терминале:

```bash
npm install
# или
yarn install
# или
pnpm install
```

Затем запустите сервер командой:

```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере и взгляните на результат.

## Структура проекта

Проект сделан с использованием методологии FSD ([https://feature-sliced.design](feature-sliced-design)).

- `app` - основная часть приложения, содержит все страницы приложения

- `features` - все возможности приложения т.е фичи

- `shared` - компоненты, которые используются в разных частях приложения, взамодействия с API, UI Kit, утилиты, типы, константы

- `widgets` - те же компоненты, но только для конкретной части приложения и со своей Бизнес-логикой
