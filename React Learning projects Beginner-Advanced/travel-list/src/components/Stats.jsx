import React from 'react'

function Stats({ items }) {
    if(!items.length){
        return (
            <p className='stats'>
                <em>
                    Pls start addding items
                </em>
            </p>
        )
    }
    const itemPacked = items.filter((x) => x.packed).length
    const percentage = Math.round((itemPacked / items.length) * 100)
    return (
        <footer className='stats'>
            <em>
                <>
                    {percentage === 100 ? (
                        "You have Everything ready to go"
                    ) : (
                        <>
                        {itemPacked===0 ? `You have ${items.length} items on ur list, and u packed ${itemPacked} (${percentage}%)` : `You have ${items.length} items on ur list, and u already packed ${itemPacked} (${percentage}%)`}
                      
                       </>
                    )}
                </>

            </em>
        </footer>
    )
}

export default Stats