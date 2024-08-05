

function PropsUser(props) {

       // destructring !!!
       
   const { userDetails, placeDetails } = props.users
   const { username, age, qualification, POY } = userDetails
   const { place, pincode } = placeDetails

   return (
      <>
         <h3>{username}</h3>
         <h3>{age}</h3>
         <h3>{qualification}</h3>
         <h3>{POY}</h3>
         <h3>{place}</h3>
         <h3>{pincode}</h3>
      </>
   )
}

export { PropsUser }