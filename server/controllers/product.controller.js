import HttpStatus from 'http-status-codes';
import Product from '../models/product.model';

/**
 * Find all the products
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findAll(req, res) {
    Product.forge()
        .fetchAll()
        .then(product => res.json({
                error: false,
                data: product.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 *  Find product by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function findById(req, res) {
    Product.forge({id: req.params.id})
        .fetch()
        .then(product => {
            if (!product) {
                res.status(HttpStatus.NOT_FOUND).json({
                    error: true, data: {}
                });
            }
            else {
                res.json({
                    error: false,
                    data: product.toJSON()
                });
            }
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Store new product
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function store(req, res) {
    const {title, text} = req.body;
    Product.forge({
        title, text
    }).save()
        .then(product => res.json({
                success: true,
                data: product.toJSON()
            })
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Update product by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function update(req, res) {
    Product.forge({id: req.params.id})
        .fetch({require: true})
        .then(product => product.save({
                title: req.body.title || product.get('title'),
                text: req.body.text || product.get('text')
            })
                .then(() => res.json({
                        error: false,
                        data: product.toJSON()
                    })
                )
                .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        error: true,
                        data: {message: err.message}
                    })
                )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}

/**
 * Destroy product by id
 *
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function destroy(req, res) {
    Product.forge({id: req.params.id})
        .fetch({require: true})
        .then(product => product.destroy()
            .then(() => res.json({
                    error: false,
                    data: {message: 'Product deleted successfully.'}
                })
            )
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    error: true,
                    data: {message: err.message}
                })
            )
        )
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            })
        );
}