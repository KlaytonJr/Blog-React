// Components
import Hero from './Hero';
import Banner from './Banner';
import Card from './Card';
import Main from './Main';
import Header from '../Header';
import Footer from '../Footer';

// Images
import ny from '../../profile/ny.jpg';
import star from '../../svg/icon-star.svg';

// API
import api from 'services/api';

// Hooks
import { useState, useEffect } from 'react';

const Home = () => {

    // Variáveis de estado
    const [main, setMain] = useState([]);
    const [mostseen, setMostseen] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        // Requisição para posts com nota star=5
        api.get('posts?star=5&_limit=2&order=desc')
            .then((response) => {
                setMain(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        
        // Requisição para banner
        api.get('posts?_sort=date&_limit=1&order=desc')
            .then((response) => {
                setBanner(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        
        // Requisição para posts mais vistos (sem a lógica correta)
        api.get('posts?_limit=3')
            .then((response) => {
                setMostseen(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>

            <Header />

            <Hero />

            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">
                        <img src={star} className="icon-l" alt='' />
                        <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>
                        
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque. 
                        </p>
                    </div>
                    <div className="grid-7">

                        {
                            main.map((item) => {
                                return <Main key={item.id} content={item} />
                            })  
                        }

                    </div>
                </div>
            </section>


            <div className="bg-section">
                <section className="container">
                    <h3 className="ml-2 mb-3">Mais vistos</h3>
                    <div className="row">

                    {
                        mostseen.map((item) => {
                            return <Card key={item.id} content={item} />
                        })  
                    }

                    </div>
                </section>
            </div>

            {
                banner.map((item) => {
                    return <Banner key={item.id} content={item} />
                })  
            }

            <Footer />
        </>
    );
}

export default Home;