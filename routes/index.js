import express from 'express'
var router = express.Router();
import shipRocketPinCode from '../ShipRocket/pincode.js'
import shipRockerOrder from '../ShipRocket/order.js'

/* GET users listing. */
router.get('/check', async function (req, res, next) {
  const response = await shipRocketPinCode({

    auth: {
      email: EMAIL_API, //Enter ShipRocket Api Email
      password: PASSWORD_API, //Enter ShipRocket Api Password
    },
    params: {
      pickup_postcode: 123456, //Enter Correct Pickup Pincode 
      delivery_postcode: 123457, //Enter Correct Delivery Pincode 
      weight: 2,
      cod: 1
    }
  })

  console.log(response)
  res.send('respond with a resource');
});

router.get('/order', async (req, res) => {
  const statusShip = await shipRockerOrder({

    auth: {
      email: EMAIL_API, //Enter ShipRocket Api Email
      password: PASSWORD_API, //Enter ShipRocket Api Password
    },
    params: {                                //Fill The Following Details
      "order_id": "224-412352124",
      "order_date": "2022-09-29 10:48",
      "pickup_location": "Delhi",
      "billing_customer_name": "First Name",
      "billing_last_name": "Last Name",
      "billing_address": "ADDRESS",
      "billing_address_2": "ADDRESS2",
      "billing_city": "CITY",
      "billing_pincode": "123456",
      "billing_state": "Delhi",
      "billing_country": "India",
      "billing_email": "email@gmail.com",
      "billing_phone": "8435674560",
      "shipping_is_billing": 1,
      "order_items": [{
        "name": "TShirt",
        "sku": "tshirt",
        "units": 10,
        "selling_price": "900",
        "discount": "",
        "tax": "",
        "hsn": 441122
      },],
      "payment_method": "Prepaid", //or Postpaid
      "shipping_charges": 0,
      "giftwrap_charges": 0,
      "transaction_charges": 0,
      "total_discount": 0,
      "sub_total": 9000,
      "length": 10,
      "breadth": 15,
      "height": 20,
      "weight": 2.5
    }
  })

  console.log(statusShip)
  res.send('respond with a resource');
})

export default router;
