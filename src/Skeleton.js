import { Card, SkeletonBodyText, SkeletonPage } from '@shopify/polaris'
import React from 'react'

const Skeleton = () => {
  return (
      <Card sectioned>
        <SkeletonBodyText />
      </Card>
  )
}

export default Skeleton