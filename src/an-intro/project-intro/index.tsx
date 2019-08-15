import React from 'react';
import { Image } from '@react-pakistan/react-ui-collection/eCommerceV1UI/image';
import { H3 } from '@react-pakistan/react-ui-collection/eCommerceV1UI/h3';
import { HR } from '@react-pakistan/react-ui-collection/eCommerceV1UI/hr';
import { H4 } from '@react-pakistan/react-ui-collection/eCommerceV1UI/h4';
import { ProjectIntroContainer } from './styles';

export const ProjectIntro = ({

} : IProjectIntroProps) : JSX.Element => (
  <ProjectIntroContainer>
    <Image
      imageUrl="https://i.ibb.co/k8Y3RMh/React-Pakistan-Logo-01.jpg"
      alt="alt-image"
      margin="0"
      padding="0"
      width="600px"
      height="auto"
    />
    <H3
      fontFamily="Montserrat"
      fontSize="1.6em"
      fontWeight={700}
      lineHeight="normal"
      letterSpacing="1px"
      textAlign="left"
      textTransform="uppercase"
      color="#2E2E2E"
    >
      This project is released under ReactPakistan platform.
    </H3>
    <HR />
    <H4
      fontFamily="Montserrat"
      fontSize="1.4em"
      fontWeight={700}
      lineHeight="normal"
      letterSpacing="1px"
      textAlign="center"
      textTransform="uppercase"
      color="#2E2E2E"
    >
      Project Maintainer's List
    </H4>
  </ProjectIntroContainer>
);

export interface IProjectIntroProps {
  /**
   *
   */
  test? : string;
}
