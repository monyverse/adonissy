import { FC } from 'react';
import Image from 'next/image';
import { Images } from '../assets/images';
// import styled from 'styled-components';

const { src, alt } = Images.logoHorizontal;

// const StyledImage = styled.img`
//   /* background-color: #00ff22; */
//   height: 200px;
//   padding: 20px;
// `;

//
type LogoProps = {
  height?: number;
  width?: number;
  href?: string;
};

export const Logo: FC<LogoProps> = ({ href, height, width }) => {
  return (
    <a href={href || '#'} target="_blank" rel="noreferrer">
      <Image src={src} alt={alt} height={height} width={width} />
    </a>
  );
};
