import React from 'react'
import ToastComponent from '../Components/Toast/toastComponent'
import Home from '../Components/Home/home'
import AdvancedSearch from '../Components/AdvanceSearch/advanceSearch'
import DragAndDrop from '../Components/DragAndDrop/dragAndDrop'
import CountUp from '../Components/CountUp/countUp'
import Logout from '../Components/Logout/logout'

import CreditCard from '../Components/CreditCard'


const navItems = [
    {
    url: "home",
    name:'Home',
    component:<Home />,
    path:"/home"
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