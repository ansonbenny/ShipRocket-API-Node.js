import axiosLib from 'axios';
const axios = axiosLib.default;
import shipToken from './token.js'
import qs from 'qs';

async function shipOrder({
    auth,
    params
  }) {
    if (!auth.email && !auth.password && !auth.token) {
      return console.log("pass the valid props");
    }

    var token = auth.token;
    if (!token) {
      token = await shipToken(auth.email, auth.password);
    }
    const parameterGenerator = qs.stringify(params)
    const parameter = parameterGenerator.toString();
    const url = `https://apiv2.shiprocket.in/v1/external/orders/create/adhoc?${parameter}`;

    const myHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const requestOptions = {
      method: "POST",
      url,
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await axios(requestOptions);
console.log(response)
      if (response.data.status == "NEW") {
        const successMessage = "order ADDED";
        return successMessage;
      } else {
        const errorMessage = "Failed";
        return errorMessage
      }

    } catch (err) {
      console.log(err);
      const status = err
      return status
    }
  }

export default shipOrder;
