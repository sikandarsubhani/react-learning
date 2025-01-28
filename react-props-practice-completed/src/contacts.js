const contacts = [
  {
    name: "Jerry",
    imgURL:
      "data:image/png;base64,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",
    phone: "+123 456 789",
    email: "b@Jerry.com",
  },
  {
    name: "Tom",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9m1ET6DE4nAYN-TcD5n3mrxigBxpf6Y3VA&s",
    phone: "+987 654 321",
    email: "Tom@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];

export default contacts;
