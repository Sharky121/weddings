"use client";

import { upload } from "@vercel/blob/client";
import { useState } from "react";

export default function UploadVideoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setError(null);
    setUrl(null);
    setProgress(0);
    try {
      const blob = await upload(`videos/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/upload-video",
        multipart: true,
        onUploadProgress: ({ percentage }) => setProgress(percentage ?? 0),
      });
      setUrl(blob.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
      setProgress(null);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="mb-6 text-2xl font-medium text-brand-dark" style={{ fontFamily: "var(--font-forum)" }}>
        Загрузка видео в Vercel Blob
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="video" className="mb-1 block text-sm text-brand-dark">
            Файл (MP4, WebM, MOV, до 500 MB)
          </label>
          <input
            id="video"
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-brand-dark file:mr-4 file:rounded file:border-0 file:bg-brand-muted file:px-4 file:py-2 file:text-sm file:text-brand-dark"
          />
        </div>
        <button
          type="submit"
          disabled={!file || loading}
          className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark/90 disabled:opacity-50"
        >
          {loading ? "Загрузка…" : "Загрузить"}
        </button>
      </form>
      {progress != null && loading && (
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-muted">
          <div
            className="h-full bg-brand-dark transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {url && (
        <div className="mt-6 rounded-lg border border-brand-muted/50 bg-brand-light/50 p-4">
          <p className="mb-2 text-sm font-medium text-brand-dark">URL видео:</p>
          <code className="block break-all text-xs text-brand-dark">{url}</code>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(url)}
            className="mt-2 text-sm text-brand-dark underline hover:no-underline"
          >
            Копировать
          </button>
        </div>
      )}
    </div>
  );
}
