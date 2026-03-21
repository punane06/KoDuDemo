export function getProjectUpdateImageSrc(photoUrls: string[], index: number, fallbackUrl: string) {
  if (photoUrls.length === 0) {
    return fallbackUrl;
  }

  return photoUrls[index % photoUrls.length];
}
