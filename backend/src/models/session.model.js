import mongoose from "mongoose";

const sessionProductSchema = new mongoose.Schema(
	{
		sessionId: {
			type: String,
			required: true,
			unique: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				id: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				price: {
					type: Number,
					required: true,
					min: 0,
				},
			},
		],
		couponCode: {
			type: String,
			default: "",
		},
		createdAt: {
			type: Date,
			default: Date.now,
			expires: 86400, // Expire after 24 hours
		},
	},
	{
		timestamps: true,
	}
);

const SessionProduct = mongoose.model("SessionProduct", sessionProductSchema);

export default SessionProduct;
