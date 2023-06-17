import { ButtonProps } from '@chakra-ui/react';
import { useMemo } from 'react';
import tinycolor from 'tinycolor2';

export const useMintButtonStyling = (primaryColor?: string) => {
  // Based on the primaryColor handle the styling based on this added color
  const buttonStyling: ButtonProps['style'] = useMemo(() => {
    const pColor = primaryColor ?? '#FFFFFF';

    const color = tinycolor(pColor);

    return {
      bg: pColor,
      color: color.isLight() ? 'background.primary' : 'foreground.primary',
      _hover: {
        bg: color.darken(5).toString(),
        _disabled: {
          color: color.isLight() ? 'transparency.bgt4' : 'transparency.fgt3',
          bg: `${pColor}1A`,
        },
      },
      _active: {
        bg: color.darken(10).toString(),
      },
      _disabled: {
        color: color.isLight() ? 'transparency.bgt4' : 'transparency.fgt3',
        bg: `${pColor}1A`,
      },
    };
  }, [primaryColor]);

  return { buttonStyling };
};
