import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig.jsx';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useState } from 'react';
import InfoSection from '../../view-trip/components/InfoSection.jsx';

function Viewtrip() {
    const {tripId}=useParams();
    const [trip,setTrip]=useState([]);
    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])

    /**
     * Used to get Trip Information from Firebase
     */

    const GetTripData =async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Document:",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document!");
            toast("No such trip found!");
        }
    }
  return (
    <div>
        {/*Information Section */}
        <InfoSection trip={trip}/>
        {/* Recommended Hotels */}

        {/*Daily Plan*/}

        {/* Footer */}
    </div>
  )
}

export default Viewtrip