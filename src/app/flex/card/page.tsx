import Card from '@/components/flex/Card'
import Pagina from '@/components/template/Pagina'
import Titulo from '@/components/template/Titulo'

export default function PaginaBlock() {
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Card com Flexbox" descricao="Exemplo de uso prático do Flexbox" />
            <div className=''>
                <Card />
            </div>
        </Pagina>
    )
}
