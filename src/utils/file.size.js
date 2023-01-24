const units = ["bytes", "KB", "MB", "GB", "TB"];

export function fixBytes(x) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  const floored = Math.floor(n * 10) / 10;
  return floored + " " + units[l];
}
