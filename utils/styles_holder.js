import {
  white,
  background,
  grey_price,
  grey_divider,
  button_background,
} from './colors';
import {FONT_WEIGHTS, SIZES} from './dimens';

const font = {fontFamily: 'Roboto'};

export const flexSize = {
  flex: 1,
};

export const rowDirections = {
  ...flexSize,
  flexDirection: 'row',
};

export const header = {
  ...font,
  color: white,
  fontWeight: FONT_WEIGHTS[600],
  fontSize: 32,
};

export const subHeader = {
  ...font,
  color: white,
  fontWeight: FONT_WEIGHTS[300],
  fontSize: SIZES[18],
};

export const body = {
  backgroundColor: background,
  borderTopLeftRadius: SIZES[20],
  borderTopRightRadius: SIZES[20],
  padding: SIZES[20],
};

export const priceAmount = {
  ...font,
  fontSize: SIZES[14],
  fontWeight: FONT_WEIGHTS[200],
  color: grey_price,
};

export const verticalLineDivider = {
  height: '100%',
  width: 1,
  backgroundColor: grey_divider,
  marginLeft: SIZES[10],
  marginRight: SIZES[10],
};

export const baseButton = {
  backgroundColor: button_background,
  borderRadius: 3,
  padding: 5,
};

export const submitButton = {
  ...baseButton,
  marginTop: 10,
  paddingTop: 15,
  paddingBottom: 15,
  marginLeft: 30,
  marginRight: 30,
  elevation: 5,
  borderRadius: 20,
  borderColor: '#fff',
};

export const iconSize = {
  height: SIZES[15],
  width: SIZES[15],
};
