import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const Account = () => {
  return (
    <ProtectedRoute>
        <div>Account</div>
    </ProtectedRoute>
  )
}

export default Account