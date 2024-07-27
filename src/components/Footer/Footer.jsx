import { FaArrowUp } from 'react-icons/fa';

function Footer() {
    return (
        <>
             <footer style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "5em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            position: "relative"
        }}>
            <h1 style={{ color: "#000", fontSize: "1.5em"}}>&copy; 2024 Todos os direitos reservados.</h1>
            <a href='#sobre_mim' style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                // backgroundColor: "red"
            }}>
                <p style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#F57D1F",
                    fontWeight: "400",
                    fontSize: "30px",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff",
                    border: "2px solid #F57D1F",
                    borderRadius: "50%",
                    cursor: "pointer"
                }}>
                    <FaArrowUp />
                </p>
            </a>
        </footer>
        </>
    )
}

export default Footer;