import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SelectdPage} from '@/shared/types';
type Props  = {
    page : string,
    selectedPage : SelectdPage,
    setSelectedPage : (value : SelectdPage)=> void

}

export default function Link( {
    page,
    selectedPage,
    setSelectedPage
} : Props){
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectdPage
    
    return (
        <AnchorLink
            className = {`${selectedPage === lowerCasePage}? "text-primary-500" : " " transition duration-500 hover:text-primary-300`}
            href = {`#${lowerCasePage}`}
            onClick = {()=> setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
