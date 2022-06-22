import { IServico } from "interfaces/models/catalogo/servico"
import { IPortfolio } from "interfaces/models/catalogo/portfolio"
import { IMarca } from "interfaces/models/catalogo/marca"

export interface IHomeProps {
    services?: IServico;
    portfolio?: IPortfolio[];
    customers?: IMarca[];
}