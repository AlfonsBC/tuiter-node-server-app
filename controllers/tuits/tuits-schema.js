import mongoose from 'mongoose';// load the mongoose library
const schema = mongoose.Schema({ // create the schema
tuit: String,                   // tuit property of type String
image: {type: String, default: '../../images/mateabc.jpeg'},
userName: {type: String, default: 'MateABC'},
handle: {type: String, default: 'mateabc'},
nlikes: {type: Number, default: 0},
liked: {type: Boolean, default: false},
nunlikes: {type: Number, default: 0},
unliked: {type: Boolean, default: false},
}, {collection: 'tuits'});
export default schema;