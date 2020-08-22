import React , {lazy} from 'react'
import ToastComponent from '../Components/Toast/toastComponent'
import AdvancedSearch from '../Components/AdvanceSearch/advanceSearch'
import DragAndDrop from '../Components/DragAndDrop/dragAndDrop'
import CountUp from '../Components/CountUp/countUp'
import Logout from '../Components/Logout/logout'
import CreditCard from '../Components/CreditCard'
import Lazy from '../Components/Lazy/lazy'

const Designer = lazy(()=>import('../Components/CustomDesigner/customDesigner'));
const VideoPlayer = lazy(()=>import('../Components/VideoPlayer/videoPlayer'));

const navItems = [
    {
    url: "home",
    name:'VideoPlayer',
    component: <Lazy><VideoPlayer /></Lazy>,        
    path:"/home"
},
    {
    url: "designer",
    name:'Designer',
    component:<Lazy><Designer /></Lazy>,
    path:"/designer"
},
    {
    url: "toast",
    name:'Toast',
    component:<ToastComponent />,
    path:"/toast"
},
    {
    url: "dnd",
    name:'Drag and Drop',
    component:<DragAndDrop />,
    path:"/dnd"
},
    {
    url: "advSearch",
    name:'Advance Search',
    component:<AdvancedSearch />,
    path:"/advSearch"
},
    {
    url: "countUp",
    name:'Count up',
    component:<CountUp />,
    path:"/countUp"
},
    {
    url: "creditCard",
    name:'Credit Card',
    component:<CreditCard />,
    path:"/creditCard"
},
    {
    url: "",
    name:'Logout',
    component:<Logout />,
    path:"/"
},
]

export default navItems