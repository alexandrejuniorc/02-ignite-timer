import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../../components/Header'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header /> {/* conteúdo fixado em todas as páginas */}
      <Outlet /> {/* todo o conteúdo das páginas */}
    </LayoutContainer>
  )
}
