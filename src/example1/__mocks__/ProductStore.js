const ProductStore = {
    load: jest.fn(() => {
        return Promise.resolve({});
    }),
    data: {
        code: "test_code_from_mock",
        name: `Product test`,
        price: 1000
    }
}

export default ProductStore;

// export default class ProductStore {
//
//     data = {
//         code: "test_code_from_mock",
//         name: `Product test from mock`,
//         price: 1000
//     };
//
//   constructor() {
//
//   }
//
//   load() {
//       return Promise.resolve({});
//   }
//
// }
