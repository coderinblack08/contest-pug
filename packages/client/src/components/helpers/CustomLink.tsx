import { Link, LinkProps } from '@chakra-ui/core';
import NextLink from 'next/link';
import React from 'react';

type CustomLinkProps = LinkProps & {
  href: string;
  text: string;
};

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  text,
  ...props
}) => (
  <NextLink href={href}>
    <Link {...props}>{text}</Link>
  </NextLink>
);
