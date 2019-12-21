import React from 'react'

import ContentLoader from 'react-content-loader'

const SingleLoader = () => {
  return (
    <ContentLoader
      height={170}
      width={400}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='0' y='0' rx='10' ry='10' width='400' height='170' />
    </ContentLoader>
  )
}

export default SingleLoader
