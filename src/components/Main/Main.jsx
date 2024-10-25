import styles from './Main.module.css'

export function Main(props) {
        const {children} = props
    return (
        <main className= {styles.Main}>
            {children}
        </main>
    );
}

