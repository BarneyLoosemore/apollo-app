import React from 'react'
import styled from 'styled-components'

import history from '../../history'
import { Title } from '../../Utils/Primitives/Title'

const HeaderContainer = styled.div`
  text-align: center;
  cursor: pointer;
  margin-left: 350px;
  margin-right: 350px;
  :hover {
    color: grey;
  }
`

const returnToPostList = () => {
  history.push('/posts')
}

export const Header = () => 
  <HeaderContainer onClick={returnToPostList}>
    <Title size="30">
      Apollo Blog
    </Title>
  </HeaderContainer>