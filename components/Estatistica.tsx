import styles from '../styles/Estatistica.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corRonte?: string
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor:props.corFundo ?? '#fdd60f',
                color: props.corRonte ?? '#333'
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}