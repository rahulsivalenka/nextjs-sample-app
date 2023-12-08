import { headers } from 'next/headers'

export function getReferer() {
  const headersList = headers()
  const referer = headersList.get('referer')
  const currentPath = headersList.get('next-url')

  console.log({
    referer,
    currentPath,
  })

  return (currentPath != null &&
    referer != null &&
    referer.endsWith(currentPath)) ||
    currentPath === '/'
    ? null
    : referer
}
