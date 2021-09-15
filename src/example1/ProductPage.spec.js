import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';

import ProductPage from "ProductPage";

// jest.mock("./ProductStore", () => {
//     return {
//         __esModule: true,
//         ...jest.requireActual("./ProductStore")
//     };
// });

// jest.mock("./ProductStore");

describe("ProductPage", () => {
    it("markup", async () => {
        const props = {
            match: {
                params: {
                    code: "live_code"
                }
            },
            location: {
                state: {
                    isLoading: false
                }
            }
        };

        render(<ProductPage {...props} />);

        await waitFor(() => expect(screen.getByTestId("product")).toBeInTheDocument());

        screen.debug(document.body);

        const productCode = screen.getByTestId("product-code");
        expect(productCode).toBeInTheDocument();
        expect(productCode).toHaveTextContent("test_code_from_mock");
    });
});

