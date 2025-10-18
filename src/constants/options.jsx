export const SelectTravelList = [
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveler in exploration',
        icon:'🚲',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travelers in tandem',
        icon:'🍻',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adventurers',
        icon:'👨‍👩‍👧‍👦',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'⛵',
        people:'5 to 10 People'
    }

]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location} for {days} days with a budget of {budget} for {travelers}. The response should be in JSON format with the following structure: { "day1": { "morning": "Activity 1", "afternoon": "Activity 2", "evening": "Activity 3" }, "day2": { "morning": "Activity 1", "afternoon": "Activity 2", "evening": "Activity 3" }, ... } Ensure that each activity is unique and provides a mix of sightseeing, dining, and leisure options. Include specific names of places, restaurants, or landmarks where applicable. The itinerary should be engaging and suitable for the specified number of travelers and budget.'