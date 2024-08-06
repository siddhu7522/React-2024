import React from 'react'
import ReusePercentage from './ReusePercentage'

function CalculatePercentage({ myService, friendService, handleMyService, handleFriendService }) {
    return (
        <div>
            <ReusePercentage service={myService} handleService={handleMyService}>
                <label>How did u like the service ?</label>
            </ReusePercentage>
            <ReusePercentage service={friendService} handleService={handleFriendService}>
                <label>How did your friend like the service</label>
            </ReusePercentage>
            <br /><br />
        </div>
    )
}

export default CalculatePercentage