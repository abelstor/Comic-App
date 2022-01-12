import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ComicListModel } from '../models/ComicListModel';
import { useStateValue } from '../../providers/StateProvider';
import FavIcon from '../../assets/icons/favourites.png';

export const ListFavouritesScreen = () => {

    const [{ basket }] = useStateValue();

    return (
        <>
            <Link to={'favourites'} className="text__link">
                <h3 className="mt-4 text-center">
                    <img src={FavIcon} alt="char" />
                    {'  '}
                    My Favourites
                </h3>
            </Link>
            <Row xs={1} md={1}>
                {basket.map((per) => [
                    <Col key={per.id}>
                        <ComicListModel
                            {...per}
                        />
                    </Col>
                ])}
            </Row>
        </>
    )
}