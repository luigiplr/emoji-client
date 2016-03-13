import * as actions from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  didInvalidate: false,

  items: [
    {id: 1, author: "Anonymous", text: "Belmont St seriouly needs some repairs.",
      latitude: 48.4422, longitude: -123.3657,
      category: 'poop',
      replies:
      [{id: 1, author: "jake", text: "I live there too... It's ridiculous"},
      {id: 2, author: "Anonymous", text: "just buy a bike."}]},
    {id: 2, author: "Anonymous", text: "My pomeranian is sick, does any know a good vet?",
      latitude: 48.462344, longitude: -123.312536,
      category: 'event',
      emoji: '\u{1F604}',
      replies:
      [{id: 1, author: "harrison", text: "What did you expect buying that breed?"},
      {id: 2, author: "someGuy1337", text: "We have people living in tents downtown and you're worried about your fancy dog..."}]}
  ]
}

const posts = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default posts;
