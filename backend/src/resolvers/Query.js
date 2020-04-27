const {forwardTo} = require('prisma-binding')

const Query = {
    products: forwardTo('db'),
    posts: forwardTo('db')
};

module.exports = Query;