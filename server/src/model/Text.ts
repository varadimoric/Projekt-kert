import mongoose, { Document, Model, Schema } from 'mongoose';

interface IText extends Document {
    text?: string;
}

const TextSchema: Schema<IText> = new mongoose.Schema({
    text: { type: String, required: false}
});


export const Text: Model<IText> = mongoose.model<IText>('Text', TextSchema);