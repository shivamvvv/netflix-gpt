export const getInitialsAvatar = (fullName) => {
  const initials = (fullName || "U")
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="#e50914"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" fill="#ffffff">${initials}</text></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
