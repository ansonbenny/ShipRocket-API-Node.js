# ShipRocket-API-Node.js
This Module Is used for order product to shiprocket and check delivery pincode availablity

This module create based on meta shiprocket documentation
<br>
#[DOCUMENTATION](https://apidocs.shiprocket.in/)

<h5>Requirements</h5>

[Express JS](https://expressjs.com/)
<br>
[Axios](https://www.npmjs.com/package/axios)
<br>
[qs](https://www.npmjs.com/package/qs)

<h6>Enter Commad On Terminal For Install All Package</h6>
npm install 

For Order And Check Availability From Node.js Change Following Data In routers/index.js

#Check Pincode

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
<br>
#Order
<br>

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
  
  
  <h6>npm start Enter This Command On Terminal For Start</h6>
