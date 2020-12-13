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
const Charts = lazy(()=>import('../Components/Charts/index'));
const Table = lazy(()=>import('../Components/Table'));
const VirtualizedList = lazy(()=>import('../Components/VirtualizedList'));
const Formik = lazy(()=>import('../Components/Formik'));
const HOC = lazy(()=>import('../Components/HOC'));

const navItems = [
    {
    url: "home",
    name:'VideoPlayer',
    component: <Lazy><VideoPlayer /></Lazy>

},
    {
    url: "formik",
    name:'Formik',
    component: <Lazy><Formik /></Lazy>

},
    {
    url: "hoc",
    name:'HOC',
    component: <Lazy><HOC /></Lazy>

},
    {
    url: "virualizedList",
    name:'VirualizedList',
    component: <Lazy><VirtualizedList /></Lazy>  

},
    {
    url: "table",
    name:'Table',
    component: <Lazy><Table /></Lazy>

},
    {
    url: "designer",
    name:'Designer',
    component:<Lazy><Designer /></Lazy>

},
    {
    url: "charts",
    name:'Charts',
    component:<Lazy><Charts /></Lazy>

},
    {
    url: "toast",
    name:'Toast',
    component:<ToastComponent />

},
    {
    url: "dnd",
    name:'Drag and Drop',
    component:<DragAndDrop />

},
    {
    url: "advSearch",
    name:'Advance Search',
    component:<AdvancedSearch />

},
    {
    url: "countUp",
    name:'Count up',
    component:<CountUp />

},
    {
    url: "creditCard",
    name:'Credit Card',
    component:<CreditCard />

},
    {
    url: "",
    name:'Logout',
    component:<Logout />

},
]

export default navItems