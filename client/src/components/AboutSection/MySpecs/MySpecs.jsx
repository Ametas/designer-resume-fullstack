import React, { useEffect, useState } from 'react'
import './MySpecs.scss'

import MySpecsItem from './MySpecsItem/MySpecsItem'


function MySpecs() {
    const [spec, setSpec] = useState(null)

    useEffect(() => {
        fetch('api/specs')
            .then(response => response.json())
            .then(response => setSpec(response.specs))
            .catch(error => console.log(error))
    }, [])

    return (
        <ul className='specs-list'>
            {spec.map((item, index) => (
                <MySpecsItem key={index} values={item.value} title={item.title} />
            ))}
        </ul>
    )
}

export default MySpecs