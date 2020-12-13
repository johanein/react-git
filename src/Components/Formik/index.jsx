import React, { memo, useEffect } from 'react'
import {useFormik} from 'formik'

const index = memo( (props)=>{
    useEffect(() => {
        throw new Error('formik is errored')
    }, [])
    const formik = useFormik({
        initialValues:{
            name:'Albert',
            email:''
        },
        onSubmit: (values) => {
            console.log('onsubmit : ', values)
        }
    })
    // console.log('formik.values', formik.values)
    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                </div>
                <div>
                <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
})

export default index
