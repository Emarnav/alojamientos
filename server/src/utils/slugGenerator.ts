export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Reemplazar caracteres especiales españoles
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/ü/g, 'u')
    .replace(/ç/g, 'c')
    // Remover caracteres especiales excepto espacios y guiones
    .replace(/[^a-z0-9\s-]/g, '')
    // Reemplazar espacios múltiples con un solo espacio
    .replace(/\s+/g, ' ')
    // Reemplazar espacios con guiones
    .replace(/\s/g, '-')
    // Remover guiones múltiples
    .replace(/-+/g, '-')
    // Remover guiones al inicio y final
    .replace(/^-+|-+$/g, '')
    // Limitar longitud máxima a 100 caracteres
    .substring(0, 100)
    // Remover guión final si se cortó
    .replace(/-+$/, '');
}

export async function generateUniqueSlug(
  baseText: string, 
  checkExistsFn: (slug: string) => Promise<boolean>
): Promise<string> {
  let baseSlug = generateSlug(baseText);
  let slug = baseSlug;
  let counter = 1;

  // Verificar si ya existe
  while (await checkExistsFn(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}