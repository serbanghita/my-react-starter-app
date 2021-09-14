import ProductStore from "./ProductStore";
import React from "react";

export default class ProductPage  extends React.Component {

    constructor(props) {
        super(props);
        const { code } = props.match.params;
        this.state = {
            isLoading: true,
            code: code,
            data: {}
        };
    }

    componentDidMount() {
        // const ProductStore
        const ps = new ProductStore();
        ps
            .load(this.state.code)
            .then(() => {
                console.log("Nope");
                this.setState({
                    data: ps.data, // ProductStore.data,
                    isLoading: false
                });
        });
    }

    render() {
        return (
            this.state.isLoading ? <div>Loading ...</div> :
            <div data-testid="product">
                <h1>Product page</h1>
                <div><b>Code:</b> <span data-testid="product-code">{ this.state.data.code }</span></div>
                <div><b>Name:</b> <span data-testid="product-name">{ this.state.data.name }</span></div>
                <div><b>Price:</b> <span data-testid="product-price">{ this.state.data.price }</span></div>
            </div>
        );
    }
}