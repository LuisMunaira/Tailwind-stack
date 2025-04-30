import MenuGrupo from './MenuGrupo'
import MenuItem from './MenuItem'

export interface MenuProps {
    className?: string
}

export default function Menu(props: MenuProps) {
    return (
        <aside className={`${props.className ?? ''}`}>
            <nav className="flex flex-col gap-6 p-4 bg-slate-100 rounded-3xl">
                <MenuGrupo label="Web Sites ">
                    <MenuItem label="Deliver" href="/Deliver" />
                    <MenuItem label="Ecomerce" href="/ecomerce" />
                    <MenuItem label="Sys Votos" href="/votacao" />
                </MenuGrupo>
                <MenuGrupo label="Motion">
                    <MenuItem label="Block" href="/display/block" />
                    <MenuItem label="Inline" href="/inline" />
                    <MenuItem label="Inline Block" href="/inline-block" />
                </MenuGrupo>
                <MenuGrupo label="Flexbox">
                    <MenuItem label="Flex Container" href="/flex-container" />
                    <MenuItem label="Carinhos" href="/page/paginaProduto" />
                    <MenuItem label="Perguntas" href="/page/condicional" />
                    <MenuItem label="Exemplo de Card" href="/flex/card" />
                </MenuGrupo>
                <MenuGrupo label="Grid">
                    <MenuItem label="Grid Container" href="/grid-container" />
                    <MenuItem label="Grid Item" href="/grid-item" />
                    <MenuItem label="Grid Template Columns" href="/grid-template-columns" />
                </MenuGrupo>
                <MenuGrupo label="Responsividade">
                    <MenuItem label="Breakpoints" href="/breakpoints" />
                    <MenuItem label="Media Query" href="/media-query" />
                    <MenuItem label="Mobile First" href="/mobile-first" />
                </MenuGrupo>
            </nav>
        </aside>
    )
}
