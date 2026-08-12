import { useEffect } from 'react'

const SITE = 'Daniel Sorouni'

// Hash routes never change the document title on their own, which leaves every
// tab and bookmark reading the same thing.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Software Engineer`
  }, [title])
}
