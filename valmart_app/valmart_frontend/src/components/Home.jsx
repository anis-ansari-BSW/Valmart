import React from 'react'
import FrontContent from './FrontContent'
import SavingsForTheNewYear from './SavingsForTheNewYear'
import ProductList from './ProductList'
import FreshFree from './FreshFree'
import StockGame from './StockGame'
import ApiDjango from './ApiDjango'

function Home() {
    return (
        <>
            <FrontContent />
            <SavingsForTheNewYear title="Savings for the new year" />
            <ProductList />
            <FreshFree />
            <StockGame />
            {/* <ProductDetails /> */}
            <ApiDjango />
        </>
    )
}

export default Home