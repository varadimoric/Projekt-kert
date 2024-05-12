import mongoose, { Document, Model, Schema } from 'mongoose';

interface IDiary extends Document {
    diary?: string;
}

const DiarySchema: Schema<IDiary> = new mongoose.Schema({
    diary: { type: String, required: false}
});


export const Diary: Model<IDiary> = mongoose.model<IDiary>('Diary', DiarySchema);