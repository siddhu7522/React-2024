import { any } from "prop-types"


function MyMain({children}) { 
    return (
        <main className="main">
            {children}
        </main>
    )
}

MyMain.propTypes = {
    children: any
}

export default MyMain