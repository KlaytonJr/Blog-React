import img02 from '../../../img/02.png';

const Card = () => {

    return (
        <>
            <div className="grid-4 card hidden p-0">
                <div className="thumb hidden">
                    <a href="" className="p-0">
                        <img src={img02} alt="" />
                    </a>
                    
                </div>
                <div className="p-2">
                    <h6 className="color-gray">01 NOV 2021</h6>
                    <h6 className="uppercase color-primary">TECNOLOGIA</h6>
                    <a href="" className="link-title">
                        <h4 className="mt-1">Air Pods Pro vs. Air Pods 3º geração</h4>
                    </a>
                    
                    <p className="my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ornare urna pharetra ut ac, pellentesque.
                    </p>
                    <a href="" className="link p-0">Ler mais</a>
                </div>
                
            </div>
        </>
    );
}

export default Card;