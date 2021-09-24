import { Button } from "@material-ui/core";
import { useParams} from "react-router";
import { Link } from "react-router-dom";
import img from "../../images/pic1.png"

const Welcome = () => {

    const {name} = useParams();

    return (
        <>
            <img src={img} alt="" width="120" height="200"/>
            <h2>Welcome, {name}</h2>
            <Link to="/" style={{textDecoration: "none"}}>
                <Button
                    variant="contained"
                    underline="none"
                >
                    Voltar
                </Button>
            </Link>
        </>
    )
}

export default Welcome;