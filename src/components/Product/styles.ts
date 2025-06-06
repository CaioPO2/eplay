import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branco};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fti: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8pc;
`

export const Descricao = styled.p`
  font-sixe: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
