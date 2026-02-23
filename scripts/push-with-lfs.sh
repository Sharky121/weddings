#!/bin/sh
# Пуш с учётом локального Git LFS (если .git-lfs-bin есть и git-lfs не в PATH)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LFS_BIN="$ROOT/.git-lfs-bin/git-lfs-3.7.1/git-lfs"
if test -x "$LFS_BIN"; then
  export PATH="$(dirname "$LFS_BIN"):$PATH"
fi
exec git push "$@"
