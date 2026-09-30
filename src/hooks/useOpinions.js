import { useEffect, useState } from 'react'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

export function useOpinions() {
  const [opinions, setOpinions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      const opinionsQuery = query(
        collection(db, 'opinions'),
        orderBy('createdAt', 'desc')
      )

      const unsubscribe = onSnapshot(
        opinionsQuery,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setOpinions(data)
          setLoading(false)
        },
        (err) => {
          console.error('Failed to fetch opinions:', err)
          setError(err)
          setLoading(false)
        }
      )

      return () => unsubscribe()
    } catch (err) {
      console.error('Firestore initialization error:', err)
      setError(err)
      setLoading(false)
    }
  }, [])

  return { opinions, loading, error }
}