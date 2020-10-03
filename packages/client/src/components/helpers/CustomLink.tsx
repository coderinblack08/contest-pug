import { Link, LinkProps } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

type CustomLinkProps = LinkProps & {
  href: string;
  text: string;
  hrefAs?: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  text,
  hrefAs: as,
  ...props
}) => (
  <NextLink href={href} as={as}>
    <Link {...props}>{text}</Link>
  </NextLink>
);
