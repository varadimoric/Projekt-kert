import mongoose, { Document, Model, Schema } from 'mongoose';

interface ILexikon extends Document {
    name: string;
    size: string;
    likes: string;
}

const LexikonSchema: Schema<ILexikon> = new mongoose.Schema({
    name: { type: String, required: true},
    size: { type: String, required: false},
    likes: { type: String, required: false}
});


export const Lexikon: Model<ILexikon> = mongoose.model<ILexikon>('Lexikon', LexikonSchema);