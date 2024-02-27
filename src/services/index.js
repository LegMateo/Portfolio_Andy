import axios from "axios";

let Service = axios.create({
  baseURL: "http://127.0.0.1:8001",
  timeout: 9000,
});

let getData = {
  async getData() {
    let response = await Service.get("/");

    let data = response.data.gallery;

    // Extract objects with 'pic' values
    let pics = data.map((item) => ({ pic: item.pic }));

    // Group 'pic' objects into subarrays of 3
    let groupedPics = [];
    for (let i = 0; i < pics.length; i += 3) {
      groupedPics.push(pics.slice(i, i + 3));
    }

    return groupedPics;
  },

  async getCategory() {
    let response = await Service.get("/");

    let data = response.data.categories;

    // Extract objects with 'pic' values
    let pics = data.map((item) => ({ pic: item.pic }));

    // Group 'pic' objects into subarrays of 3
    let groupedPics = [];
    for (let i = 0; i < pics.length; i += 3) {
      groupedPics.push(pics.slice(i, i + 3));
    }

    return groupedPics;
  },
};

let postData = {
  async postData(name, email, text) {
    let response = await Service.post("/", {
      name: name,
      email: email,
      text: text,
    });
    let user = response.data;

    return true;
  },
};
export { getData, postData };
