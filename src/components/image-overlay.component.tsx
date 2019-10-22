import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
interface ImageOverlayStyle extends ViewStyle {
  overlayColor?: string;
}

type Override<T, U> = Omit<T, keyof U> & U;

type ImageOverlayProps = Override<ImageBackgroundProps, {
  style: StyleProp<ImageOverlayStyle>;
}>;

export type ImageOverlayElement = React.ReactElement<ImageOverlayProps>;

const DEFAULT_OVERLAY_COLOR: string = 'rgba(0, 0, 0, 0.15)';

export class ImageOverlay extends React.Component<ImageOverlayProps> {

  private getOverlayColor = (source: string | undefined): string => {
    return source || DEFAULT_OVERLAY_COLOR;
  };

  public render(): React.ReactElement<ImageBackgroundProps> {
    const { style, children, ...restProps } = this.props;
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

    const overlayColor: string = this.getOverlayColor(derivedOverlayColor);

    return (
      <ImageBackground
        style={containerStyle}
        {...restProps}>
        <View style={[styles.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: DEFAULT_OVERLAY_COLOR,
    ...StyleSheet.absoluteFillObject,
  },
});
