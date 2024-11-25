function getImageUrl(name) {
  return new URL(`./movieCovers/${name}`, import.meta.url).href;
}

export { getImageUrl };
