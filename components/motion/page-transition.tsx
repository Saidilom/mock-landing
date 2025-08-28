'use client'

import * as React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export const PageTransition: React.FC<BoxProps> = (props) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Box
      transform={isMounted ? 'translateY(0)' : 'translateY(-24px)'}
      opacity={isMounted ? 1 : 0}
      transition="all 0.3s ease"
      {...props}
    />
  )
}
