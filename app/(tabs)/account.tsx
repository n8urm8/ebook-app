import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import Account from '@/components/account/Account'
import Auth from '@/components/auth/Auth'
import { supabase } from '@/lib/utils/supabase'

export default function AccountScreen() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}