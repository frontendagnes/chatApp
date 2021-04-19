import React from 'react'
import { Link, Add, Search } from './theme/themeLink.js'
const Links = () => {
    return(
    <div>
        <Add className='scrollBtn scrollBtn__Add'><Link href='#scroll'>View or add a new entry</Link></Add> |
        <Search className='scrollBtn scrollBtn__Search'><Link href='#scrollSearchEngine'> Go to the search engine</Link></Search>
    </div>
    )
}

export default Links