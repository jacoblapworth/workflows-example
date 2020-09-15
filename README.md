# Workflows by Vend

This is an example web service hosted on [Vercel](https://vercel.com/) (Previously called Zeit) that demonstrates how an Add-on can be built that uses Vend’s Business Rules and Custom Fields to create custom workflows for retailers.

_Please note: The Workflows API (Business Rules and Custom Fields) requires an Enterprise plan._

## Resources

- [Business Rules tutorial](https://docs.vendhq.com/tutorials/guides/beta/business_rules)
- [Custom Fields tutorial](https://docs.vendhq.com/tutorials/guides/beta/custom_fields)
- [Vend Workflows API reference](https://docs.vendhq.com/reference/2-beta/spec/workflows)

## Getting started

Deploy your own Workflows project, with Remote Business Rule [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction) using Vercel.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vend/workflows-example)

Once deployed:

1. Register the endpoint of your Remote Business Rule (`https://<replace-with-your-domain>.now.sh/api`) with Vend.
   [API reference](https://docs.vendhq.com/reference/2-beta/spec/workflows/create-remote-rule)
2. Create a Business Rule to trigger your endpoint. [API reference](https://docs.vendhq.com/reference/2-beta/spec/workflows/create-rule)
3. Define custom fields for the Business Rule to use. [Tutorial](https://docs.vendhq.com/tutorials/guides/beta/custom_fields)


## Custom Fields
All actions defined in `/_actions/` rely on a custom field of type `string` called `demo_rule` on the `product` entity.
The value of this custom field is used to trigger these actions.

**For example:**

Setting the value `stopAction` for the custom filed `demo_rule` on a product, will show a Stop modal when that product is added to the basket and the cashier clicks pay.
