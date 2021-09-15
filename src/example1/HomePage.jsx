import {Link} from "react-router-dom";
import React from "react";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Link
                    to={{
                        pathname: "/product/1111"
                    }}
                >Product 1111</Link>
            </div>
        );
    }
}