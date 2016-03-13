import * as actions from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,

  items: [
    {id: 1, author: "Anonymous", text: "Belmont St seriouly needs some repairs.",
      replies:
      [{text: "I live there too... It's ridiculous"},
      {text: "just buy a bike."}]},
    {id: 2, author: "Anonymous", text: "My pomeranian is sick, does any know a good vet?",
      replies:
      [{text: "What did you expect buying that breed?"},
      {text: "We have people living in tents downtown and you're worried about your fancy dog..."}]}
  ]
}

const posts = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default posts;
