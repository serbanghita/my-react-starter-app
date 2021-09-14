export default class ProductStore {
    data = {};

    load(code) {
        return Promise.resolve({
            code,
            name: `Product ${code}`,
            price: code
        }).then((result) => {
            this.data = result;
        });
    }
}

// export default new ProductStore();