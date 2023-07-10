type AdjustColorActions =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | SelectComplimentaryColor;

type PropsWithHexColor<P> = P & {
  hexColor: string;
};

type PropsWithDispatch<P> = P & {
  dispatch: React.Dispatch<AdjustColorActions>;
};

type PropsWithHexColorAndDispatch<P> = P &
  PropsWithHexColor<P> &
  PropsWithDispatch<P>;
