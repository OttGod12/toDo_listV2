import styles from './Footer.module.css'

export function Footer(props) {

        let { autor } = props
        let ano = new Date().getFullYear()

    return (
        <footer className= {styles.Footer}>
            React - { autor } - { ano }
        </footer>
    );
}