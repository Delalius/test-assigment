
# Тестове завдання

Проект для швидкого створення та підтримки великої кількості  лендингів в одному репозиторії.
Кожен лендинг збирається як окремий HTML-файл через Vite.

## Структура проекту
src/
  landings/
    example/             — окремий лендинг
      components/        — компоненти, що використовуються тільки тут
        Advantages.tsx
        Banner.tsx
        Footer.tsx
        Header.tsx
        Reviews.tsx
      hooks/             — локальні хуки для цього лендингу
        useFbq.tsx
        useReveal.tsx
      App.tsx            — основний компонент сторінки
      main.tsx           — точка входу (підключається до example.html)
  lib/
    fbq.ts               — реалізація роботи з Facebook Pixel
  types/
    global.d.ts          — глобальні типи (наприклад, для fbq)
  index.css              — Tailwind та глобальні стилі

example.html             — HTML-файл лендингу example
vite.config.ts           — Vite-конфіг з мультисторінковою збіркою
tsconfig*.json           — конфігурації TypeScript


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



