export const slugify = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // replace space with hyphens
    .replace(/[^\w-]+/g, '') // removes non-word and non-hyphen characters
    .replace(/--+/g, '-') // convert multiple hyphens to a single one
    .replace(/^-+/, '')
    .replace(/-+$/, '') // remove hyphens at the start or end of the string
}
