import axios from "axios";

const post = async (url, data) => {
  try {
    let config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      data,
    };
    console.log(config)
    let res = await axios(config);
    return { status: true, data: res.data, code: 200 };
  } catch (err) {
    return {
      status: false,
      data: err.response.data,
      code: err.response.status,
    };
  }
};

export { post };
