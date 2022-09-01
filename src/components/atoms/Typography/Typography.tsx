import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

export type TypographyProps = {
  children: ReactNode;
  fontWeight: number;
  
}

const Typography = (props: TypographyProps) => {
  const {children, fontWeight} = props;
  
  return (
    <h1>{children}</h1>
  )
}

export default Typography