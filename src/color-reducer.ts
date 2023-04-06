import { rgb } from 'color-convert';

type HexColor = `#${string}`;
type RGBString = `rgb(${number}, ${number}, ${number})`;

type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';
type ActionTypes = `update-${ColorFormats}-color`;

export type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [r: number, g: number, b: number];
  };
};

type SelectComplimentaryColor = {
  type: 'select-complimentary-color';
  payload: {
    hexColor: string;
  };
};

type ColorState = {
  hexColor: string;
};

export type AdjustColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | SelectComplimentaryColor;

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  if (action.type === 'select-complimentary-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  return state;
};
