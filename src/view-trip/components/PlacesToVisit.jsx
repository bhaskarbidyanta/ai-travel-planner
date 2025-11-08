import React from 'react'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places To Visit</h2>
        <div>
            {trip?.tripData?.travelPlan?.itinerary?.map((item,index)=>(
                <div>
                    <h2 className='font-medium text-lg'>Day {item.day}</h2>
                    {item.dailyPlan.map((place,idx)=>(
                        <div>
                            <h2>{place.placeName}</h2>
                        </div>
                    ))}
                </div>
        ))}
        </div>
    </div>
  )
}

export default PlacesToVisit