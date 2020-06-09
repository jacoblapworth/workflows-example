import * as Actions from '../_actions'
import { getValueForCustomField } from "../_utils/customFields";

function lineItemActions(lineItem, ctx) {
  /*
  Look for a custom field on the line_item's product called "demo_rule"
  Use the value to call an action of the same name
  */

  const rule = getValueForCustomField(lineItem.custom_fields, 'demo_rule')

  if (typeof Actions[rule] === 'undefined') {
    throw new Error("No action with that name.")
  }

  const ruleAction = Actions[rule](lineItem, ctx)

  return ruleAction;
}

export default function readyForPayment(event) {
  const lineItems = event.sale.line_items;

  const actions = lineItems.flatMap((lineItem, i) => {
    console.log(`Line_item: ${i}`, lineItem);

    // Returns
    if (lineItem.quantity < 0) {
      return Actions.itemReturn(lineItem, event);
    }

    // Line-item actions
    return lineItemActions(lineItem, event);

  }).filter((item) => !!item);

  return { actions };
}


