const blackClover = {
  name: "black clover",
  descriptions:
    "An e-commerce product page. Features include product overview, related items, saving items to user account, user questions and answers, user product reviews",
  gitHubUrl: "https://github.com/Black-Clover-FEC/black-clover-FEC",
  technologies: [
    "JAVASCRIPT",
    "REACT",
    "REACT ROUTER",
    "EXPRESS.JS",
    "STYLED COMPONENTS",
    "HTML5",
    "CSS3",
  ],
  images: ["/public/assets/black-clover/black-clover-product-page.png"],
  gifs: [
    "../../public/assets/black-clover/0productIndex.gif",
    "../../public/assets/black-clover/1productOverview.gif",
    "../../public/assets/black-clover/2relatedProducts.gif",
    "../../public/assets/black-clover/3reviewsAddVoteReport.gif",
    "../../public/assets/black-clover/3reviewsFilterAndSort.gif",
  ],
};

const stackage = {
  name: "stackage",
  descriptions:
    "StackageApp is a community-powered, self-policing fully mobile social media platform for sharing information about technology. In the application, authenticated users can make and share posts, view and filter a feed of others' posts, approve posts for inclusion in the feed, make a profile, view and connect with other users, message connections, and more. Limited features are also available to unauthenticated users when they sign in as a guest. StackageApp is an open source project.",
  gitHubUrl: "https://github.com/StackageApp/stackage-app",
  technologies: [
    "REACT NATIVE",
    "JAVASCRIPT",
    "NODE.JS",
    "EXPO",
    "REDUX",
    "JEST",
    "FIREBASE",
  ],
  images: [],
  gifs: [],
};

const bluegillApi = {
  name: "BluegillAPI",
  descriptions:
    'BluegillAPI is a RESTful API that allows for the fast and secure access of data stored for an e-commerce application. It was created to replace a legacy API service. The API supports endpoints for the "Questions and Answers" segment of the product page.',
  gitHubUrl: "",
  technologies: [],
  images: [],
  gifs: [],
};

const projects = {
  blackClover: blackClover,
  stackage: stackage,
  bluegillApi: bluegillApi,
};

export { projects };