export const DEFAULT_IMAGE = '/images/fallback/Monopoly.png'

// Funktion um das Fallback-Bild zu bekommen
export function getItemImage(imageUrl: string | null): string {
  if (imageUrl && imageUrl.startsWith('http')) {
    return imageUrl
  }
  
  if (imageUrl && imageUrl.startsWith('/')) {
    return imageUrl
  }
  
  return DEFAULT_IMAGE
}
