import React from 'react'

function ReusePercentage({ service, handleService, children }) {
    return (
        <div>
            <label> {children} </label>
            <select value={service} onChange={handleService}>
                <option value="dissatisfied">Dissatisfied (0%)</option>
                <option value="okay">It was okay (5%)</option>
                <option value="good">It was good (10%)</option>
                <option value="amazing">Absolutely Amazing (20%)</option>
            </select>
        </div>
    )
}

export default ReusePercentage