import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'

const MobileSidebar = () => {
  return (
    <Button variant={'ghost'} className='md:hidden' size='icon'>
      <Menu />
    </Button>
  )
}

export default MobileSidebar
