import React from 'react'
import styled from 'styled-components';

function CartItem({id, item}) {
    
    let options = [];

    for (let i=1; i<Math.max(item.quantity + 1, 20); i++){
        options.push(<option value={i}>Qty: {i}</option>)
    }

    return (
        <Container>

            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>

                <CartInfoTop>
                    <h2>{item.name}</h2>
                </CartInfoTop>

                <CartInfoBottom>

                    <CartIttemQuantityContainer>
                        <select
                            value = {item.quantity}
                        >
                            {options}
                        </select>
                    </CartIttemQuantityContainer>
                    
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                
                </CartInfoBottom>

            </CartItemInfo>

            <CartItemPrice>
                ${item.price}
            </CartItemPrice>
        
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding: 12px 0;
    display: flex;
    border-bottom: 1px solid #ddd;
`

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`

const CartItemInfo = styled.div`
    flex-grow: 1;
`

const CartInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
`

const CartInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`

const CartIttemQuantityContainer = styled.div`
    select{
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17.15);
        :focus{
            outline: none;
        }
    }
`

const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`