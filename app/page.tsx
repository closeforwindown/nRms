import React from 'react'
import CTA from '@/components/CTA'
import {CompanionCard} from '@/components/CompanionCard'
import Companionlist from '@/components/Companionlist'



const Page = async () => {

  return (
    <main>
      <h1> Non RM Management System (nRMS)</h1>
        <section className='home-section'>
          <CompanionCard 
            id ="123"
            PO="Card Open"
            location="Where"
            material="PN"
            agegingdate={30}
            color="#ffda6e"/>
          <CompanionCard 
            id ="456"
            PO="Card Closed"
            location="Where"
            material="PN"
            agegingdate={30}
            color="#ffda6e"/>
          <CompanionCard 
            id ="789"
            PO="Card Rejected"
            location="Where"
            material="PN"
            agegingdate={30}
            color="#ffda6e"/>
        </section>

        <section className='home-section'>
          <Companionlist />
          <CTA />
          
        </section>
        

    </main>
  )
}

export default Page
