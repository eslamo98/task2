import LowerNavbar from '@/components/LowerNavbar/LowerNavbar'
import MainContent from '@/components/MainContent/MainContent'
import UperNavbar from '@/components/UperNavbar/UperNavbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     <UperNavbar />
     <LowerNavbar />
     <MainContent />
    </>
  )
}
