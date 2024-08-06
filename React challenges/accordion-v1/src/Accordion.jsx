
import React, { useState } from 'react'
import SingleAcordion from './SingleAcordion'

function Accordion({ data }) {
    
    return (
        <div className='accordion'>
            {data.map((item) => {
                return (
                    <>
                  <SingleAcordion {...item}/>
                    </>
                )
            })}
        </div>
    )
}

export default Accordion