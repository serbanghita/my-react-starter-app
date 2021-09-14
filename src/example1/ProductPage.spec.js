import {render, screen, waitFor} from '@testing-library/react';
import ProductPage from "./ProductPage";

// jest.mock("./ProductStore", () => {
//     return {
//         __esModule: true,
//         ...jest.requireActual("./ProductStore")
//     };
// });

jest.mock("./ProductStore");

test("ProductPage", async () => {
    const props = {
        match: {
            params: {
                code: "some code"
            }
        },
        location: {
            state: {
                isLoading: false
            }
        }
    };

    render(<ProductPage {...props} />);

    await waitFor(() => expect(screen.getByTestId("product")).toBeInTheDocument())

    const productCode = screen.getByTestId("product-code");
    expect(productCode).toBeInTheDocument();
    expect(productCode).toHaveTextContent("test_code");
});