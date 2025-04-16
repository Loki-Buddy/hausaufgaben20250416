import React from 'react'

function TierCard(props) {
    return (
    <main>
        <h5>Name:</h5>
        <p>{props.name}</p>
        <br/>
        <h5>Art:</h5>
        <p>{props.art}</p>
        <br/>
        <h5>Krankheit:</h5>
        <p>{props.krankheit}</p>
    </main>
  )
}

export default TierCard