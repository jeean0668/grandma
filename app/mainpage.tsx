
import styled from "@emotion/styled"
import Image from 'next/image'
import { ReactNode } from "react";

const LogoWrap = styled("div")`

  justify-content: center
  & > div {
    margin
  }
`;

interface Props {
  alt : string 
  src : string 
  width : number 
  height : number 
}

const LogoImage = ({alt,src,width,height} : Props) => {

  return (
    <LogoWrap>
      <Image src = {src}
      alt = {alt}
      width = {width}
      height = {height}
      />
    </LogoWrap>
  )
}

export default LogoImage