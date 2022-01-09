import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { CharacterModel } from '../models/CharacterModel';
import { useCharacterByName } from '../../helpers/useCharacterByName';
import CharIcon from '../../assets/icons/characters.png';
import './screens.css';

export const SearchScreen = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('q');

    const data = useCharacterByName(myParam);

    return (
        <div className="container animate__animated animate__fadeInLeft">
            <Link to={'/'} className="text__link">
                <h3 className="mt-3 text-center">
                    <img src={CharIcon} alt="char" />
                    {' '}
                    Characters
                </h3>
            </Link>
            <div>
                <Row xs={1} md={2} className="g-0">
                    {data.map((per) => [
                        <Col key={per.id}>
                            <CharacterModel
                                name={per.name}
                                description={per.description}
                                id={per.id}
                                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                items={per.comics.items.map((it) => (it.name))}
                            />
                        </Col>
                    ])}
                </Row>
            </div>
        </div >
    )
}