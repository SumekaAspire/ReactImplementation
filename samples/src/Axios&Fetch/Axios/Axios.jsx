import React from 'react'
import AxiosHandleMultipleUrls from './AxiosHandleMultipleUrls'
import AxiosMultipleUrlsAllSettled from './AxiosMultipleUrlsAllSettled'
import SingleAxiosExample from './SingleAxiosExample'

const Axios = () => {
  return (
    <div>Axios
        <SingleAxiosExample/>
        <AxiosHandleMultipleUrls/>
        <AxiosMultipleUrlsAllSettled/>
    </div>
  )
}

export default Axios