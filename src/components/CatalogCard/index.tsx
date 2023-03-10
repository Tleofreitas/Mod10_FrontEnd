import './styles.css';
import ComputerImg from '../../assets/Computer.png';

export default function CatalogCard() {
    return (
        <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={ComputerImg} alt="Computer" />
            </div>
            <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>
                    Computador Gamer XT
                </h4>
            </div>
        </div>
    );
}