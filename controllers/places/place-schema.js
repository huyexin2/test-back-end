import mongoose from 'mongoose';
const schema = mongoose.Schema({
    name: String,
    place_id: String,
    address: String,
}, {collection: 'places'});
export default schema;