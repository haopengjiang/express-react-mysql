import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'products';

/**
 * Product model.
 */
class Product extends bookshelf.Model {

    /**
     * Get table name.
     */
    get tableName() {
        return TABLE_NAME;
    }
}

export default Product;