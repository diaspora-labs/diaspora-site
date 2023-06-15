import { Button, ButtonProps, LinkOverlayProps } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import React from 'react';

export type ChakraAndNextProps = ButtonProps & LinkProps & LinkOverlayProps;

export const LinkButton = React.forwardRef<
  HTMLButtonElement,
  ChakraAndNextProps
>(({ href, target, children, ...props }, ref) => {
  return (
    <Link href={href} passHref>
      <Button as={'a'} target={target} {...props} ref={ref}>
        {children}
      </Button>
    </Link>
  );
});
