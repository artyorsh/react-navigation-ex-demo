import React from 'react';
import {
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  EdgeInsets,
  useSafeArea,
} from 'react-native-safe-area-context';
import {
  Layout,
  LayoutElement,
  LayoutProps,
} from 'react-native-ui-kitten';

export enum SaveAreaInset {
  TOP = 'top',
  BOTTOM = 'bottom',
}

type InsetsProp = SaveAreaInset | SaveAreaInset[];

interface SafeAreaLayoutProps extends LayoutProps {
  insets?: InsetsProp;
}

export type SafeAreaLayoutElement = React.ReactElement<SafeAreaLayoutProps>;

export const SafeAreaLayout = (props: SafeAreaLayoutProps): LayoutElement => {
  const safeAreaInsets: EdgeInsets = useSafeArea();

  const { insets, style, ...layoutProps } = props;

  const toStyleProp = (inset: SaveAreaInset): ViewStyle => {
    switch (inset) {
      case SaveAreaInset.BOTTOM: return { paddingBottom: safeAreaInsets.bottom };
      case SaveAreaInset.TOP: return { paddingTop: safeAreaInsets.top };
    }
  };

  const createInsets = (): StyleProp<ViewStyle> => {
    // @ts-ignore
    return React.Children.map(insets, toStyleProp)
  };

  return (
    <Layout
      {...layoutProps}
      style={[style, createInsets()]}
    />
  );
};
