
# Тестове завдання

Проект для швидкого створення та підтримки великої кількості  лендингів в одному репозиторії.
Кожен лендинг збирається як окремий HTML-файл через Vite.

## Структура проєкту
```bash
├── example.html
├── index.css
├── vite.config.ts
├── tsconfig.json
└── src
    ├── landings
    │   └── example
    │       ├── components
    │       │   ├── Advantages.tsx
    │       │   ├── Banner.tsx
    │       │   ├── Footer.tsx
    │       │   ├── Header.tsx
    │       │   └── Reviews.tsx
    │       ├── hooks
    │       │   ├── useFbq.ts
    │       │   └── useReveal.ts
    │       ├── App.tsx
    │       └── main.tsx
    ├── lib
    │   └── fbq.ts
    └── types
        └── global.d.ts

```

## Features

- Продумана структура проєкту для сотень лендингів.
- Доданий один приклад лендингу — /landings/example.
- Окремий HTML-файл для кожного лендингу.
- Адаптивна верстка для мобільних, планшетів і десктопів.
- Анімації появи секцій та елементів.
- Інтеграція умовного Facebook Pixel (fbq) через кастомний хук useFbq.


## Опис ключових файлів і директорій

### `/landings/example`
Повний приклад одного лендингу. Містить всі секції сторінки, логіку та окремий HTML-файл.

### `/components`
Відповідає за структуру лендингу.  
Тут лежать такі блоки:

- `Header.tsx` — хедер з  навігацією  
- `Banner.tsx` — баннер  
- `Advantages.tsx` — блок з фічами 
- `Reviews.tsx` — відгуки клієнтів 
- `Footer.tsx` — футер

### `/hooks`
- `useReveal.tsx` — плавна поява секцій через IntersectionObserver  
- `useFbq.tsx` — умовна логіка надсилання евентів у Facebook Pixel  

### `/lib/fbq.ts`
Проста обгортка навколо window.fbq з перевірками.

### `example.html`
Окремий HTML-файл, який збирає тільки один лендинг.

---

## Як додати новий лендинг

    1. Створити нову папку у `/landings`.
    2. Скопіювати структуру з `/landings/example`.
    3. Створити новий HTML-файл за зразком `example.html`.
    4. Додати шлях до HTML у `vite.config.ts`, якщо потрібно.


## Технічний стек

Vite, React, TypeScript, TailwindCSS



