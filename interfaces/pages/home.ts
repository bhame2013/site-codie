import { IMarca } from "interfaces/models/catalogo/marca"
import { IServico } from "interfaces/models/catalogo/servico"
import { IPortfolio } from "interfaces/models/catalogo/portfolio"

import { IBlog } from "interfaces/models/conteudo/blog";
import { IBanner } from "interfaces/models/conteudo/banner";
import { IDepoimento } from "interfaces/models/conteudo/depoimento";

export interface IHomeProps {
    banner?: IBanner[],
    services?: IServico;
    portfolio?: IPortfolio[];
    customers?: IMarca[];
    depoiments?: IDepoimento[];
    blogs?: IBlog;
}