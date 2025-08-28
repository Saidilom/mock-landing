import { BoxProps } from '@chakra-ui/react'
import React from 'react'

import { MotionBox } from './box'

export const Float: React.FC<
  BoxProps & { delay?: number; steps?: number[] }
> = (props) => {
  const { children, delay = 0.2, ...rest } = props
  return (
    <MotionBox
      transition={`all 5s ease-in-out ${delay}s infinite`}
      _hover={{
        transform: 'translateY(-10px)'
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}
