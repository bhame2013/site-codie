import Image from "next/image";
import { Configs } from "services/configs";

import * as S from "./styles";

interface NextImageProps  {
    isBaseUrl?: boolean;
    src: string | undefined
    layout: "fill" | "fixed" | "intrinsic" | "responsive" | "raw" | undefined
}

export function NextImage({ src, layout, isBaseUrl }: NextImageProps) {
    return <S.Image><Image src={src ? isBaseUrl ? Configs.baseUrl + src : src : "/images/default.jpg"} layout={layout} /></S.Image>
}