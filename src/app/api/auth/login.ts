import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth/react'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body
    const result = await signIn('credentials', { email, password })

    if (result?.error) {
      return res.status(401).json({ error: 'Invalid credentials.' })
    }

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' })
  }
}