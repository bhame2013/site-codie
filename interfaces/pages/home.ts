import { IMarca } from "interfaces/models/catalogo/marca"
import { IServico } from "interfaces/models/catalogo/servico"
import { IPortfolio } from "interfaces/models/catalogo/portfolio"

import { IBanner } from "interfaces/models/conteudo/banner";

export interface IHomeProps {
    banner?: IBanner[],
    services?: IServico;
    portfolio?: IPortfolio[];
    customers?: IMarca[];
}