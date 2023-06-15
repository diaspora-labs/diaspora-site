import {
  IconButton,
  IconButtonProps,
  LinkOverlayProps,
} from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import React from 'react';

export type ChakraIconButtonAndNextProps = IconButtonProps &
  LinkProps &
  LinkOverlayProps;

export const LinkIconButton = React.forwardRef<
  HTMLButtonElement,
  ChakraIconButtonAndNextProps
>(({ href, children, ...props }, ref) => {
  return (
    <Link href={href} passHref>
      <IconButton as={'a'} {...props} ref={ref}>
        {children}
      </IconButton>
    </Link>
  );
});
