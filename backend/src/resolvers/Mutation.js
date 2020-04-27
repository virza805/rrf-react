const Mutations = {
    async createProduct(parent, args, ctx, info) {
        product = await ctx.db.mutation.createProduct(
            {
                data: {
                    ...args
                }
            },
            info
        )

        return product;
    },
    
    async createPost(parent, args, ctx, info) {
        post = await ctx.db.mutation.createPost(
            {
                data: {
                    ...args
                }
            },
            info
        )

        return post;
    }
};
module.exports = Mutations;