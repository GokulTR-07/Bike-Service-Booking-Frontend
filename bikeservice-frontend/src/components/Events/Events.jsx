import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   
  return (
    <div>
     {
      !isLoading && (
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Offers</h1>
        </div>

      <div className="w-full grid">
        {
          allEvents.length !== 0 && ( 
            <EventCard data={allEvents && allEvents[0]} />
           ) 
         }
         <h4 className='text-center text-2xl py-10 font-medium'>{
           allEvents?.length === 0 && (
            'There is no Offer running currently....!'
           )
          }
         </h4>  
      </div>
    </div>
       )
     } 
  </div>
  )
}

export default Events;