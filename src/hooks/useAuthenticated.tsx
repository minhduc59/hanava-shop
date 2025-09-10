'use client'

import { validateBoolean } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function useAuthenticated() {
   const [authenticated, setAuthenticated] = useState<boolean | null>(null)

   useEffect(() => {
      try {
         if (typeof window !== 'undefined' && window.localStorage) {
            const cookies = document.cookie.split(';')
            const loggedInCookie = cookies.find((cookie) =>
               cookie.trim().startsWith('logged-in')
            )

            // Safely extract value only if cookie exists
            const isLoggedIn = loggedInCookie
               ? loggedInCookie.split('=')[1] === 'true'
               : false

            setAuthenticated(isLoggedIn)
         }
      } catch (error) {
         console.error({ error })
         setAuthenticated(false) // fallback if error occurs
      }
   }, [])

   return { authenticated: validateBoolean(authenticated, true) }
}
