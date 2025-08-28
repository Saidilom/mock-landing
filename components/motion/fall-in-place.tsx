import React from 'react'
import { BoxProps } from '@chakra-ui/react'

import { MotionBox } from './box'

export const FallInPlace: React.FC<BoxProps & { delay?: number }> = (
  props,
) => {
  const { children, delay = 0.2, ...rest } = props
  return (
    <MotionBox
      opacity="0"
      transform="translateY(20px) scale(1)"
      transition={`all 2s ease-out ${delay}s`}
      _hover={{
        opacity: "1",
        transform: "translateY(0) scale(1)"
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}
