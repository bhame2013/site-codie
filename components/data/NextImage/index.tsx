/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

import * as S from "./styles";

export function NextImage(props: ImageProps) {
    return <S.Image><Image {...props} /></S.Image>
}