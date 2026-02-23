# Видео через Git LFS

Видео хранятся в репозитории с помощью [Git LFS](https://git-lfs.com/). Файлы лежат в `public/` и отдаются Next.js как статика.

## Файлы

- `public/wedding-about.mp4` — страница «Об Усадьбе»
- `public/wedding-ceremony.mp4` — страница «Венчание»

## Первая настройка (один раз)

1. Установите Git LFS:
   - **macOS (Homebrew):** `brew install git-lfs`
   - **Windows:** [git-lfs.github.com](https://git-lfs.github.com)

2. В корне репозитория выполните:
   ```bash
   git lfs install
   ```

3. Отслеживание `*.mp4` уже задано в `.gitattributes`. Добавьте файлы и закоммитьте:
   ```bash
   # положите wedding-about.mp4 и wedding-ceremony.mp4 в public/
   git add public/wedding-about.mp4 public/wedding-ceremony.mp4
   git add .gitattributes
   git commit -m "Add video files via LFS"
   git push
   ```

## Замена видео

1. Замените файл в `public/` (то же имя: `wedding-about.mp4` или `wedding-ceremony.mp4`).
2. `git add` обновлённый файл и сделайте коммит — LFS подставит новый контент.

## Переопределение URL (опционально)

Если нужно отдавать видео с другого домена (CDN и т.п.), задайте в `.env.local` или в Vercel:

- `NEXT_PUBLIC_VIDEO_ABOUT_URL`
- `NEXT_PUBLIC_VIDEO_CEREMONY_URL`

Тогда в приложении будут использоваться эти URL вместо локальных путей.
