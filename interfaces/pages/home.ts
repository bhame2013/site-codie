import { Banner } from "interfaces/models/conteudo/banner"
import { Noticia } from 'interfaces/models/conteudo/noticia'

export interface HomeProps {
    banners?: Banner[] 
    noticias?: Noticia
}