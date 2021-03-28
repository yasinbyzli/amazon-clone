import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';


function Home() {

    const [products, setProducts] = useState([]);

    const getProducts = () =>{
        db.collection('products').onSnapshot((snaphot) => {
            let temProducts = [];
            temProducts = snaphot.docs.map((doc) => (
                {
                id : doc.id,
                product: doc.data()
                }
            ));
            setProducts(temProducts);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data) =>(
                        <Product 
                            title = {data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`

const Content = styled.div`
    padding: 0 10px;
    margin-top: -350px;
    display: flex;
`