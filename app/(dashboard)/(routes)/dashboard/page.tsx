import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const DashboardPage = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UserButton>Click here</UserButton>
    </main>
  )
}

export default DashboardPage
