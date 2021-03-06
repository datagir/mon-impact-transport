import React, { Suspense, useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import StyleContext from 'utils/StyleContext'
import Configurator from 'components/misc/Configurator'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import IframeFooter from 'components/layout/IframeFooter'

const Map = React.lazy(() => import('components/misc/Map'))

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  width: 46rem;
  margin: 0 auto;
  padding: 0.5rem 0.5rem 2rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
export default function Iframe(props) {
  const { map } = useContext(UXContext)
  const { theme } = useContext(StyleContext)
  return (
    <Wrapper>
      {theme === 'default' && map && (
        <Suspense fallback={''}>
          <Map />
        </Suspense>
      )}
      <Configurator />
      <Content>
        <FullScreen>{props.children}</FullScreen>
        <IframeFooter />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
    </Wrapper>
  )
}
