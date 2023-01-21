import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {}

export const CofeeStore: FC<Props> = () => {
  const rout = useRouter()
  return (
    <div style={{ minHeight: '100vh' }}>
      index
      {rout.query.shopId}
      <Link href="/"> back to home</Link>
    </div>
  )
}

export default CofeeStore;
