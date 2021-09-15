class ProductStore {
    data = {};

    constructor() {
        this.data = {};
    }

    load(code) {
        return Promise.resolve({
            code,
            name: `Product ${code}`,
            price: code
        }).then((result) => {
            this.data = result;
        });
    }

    getData() {
        return this.data;
    }
}

export default new ProductStore();
