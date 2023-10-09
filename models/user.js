import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
      image: {
        type: String,
      }
});
// The "models" objects is provided by the Mongoode library and stores all the registered models.
// If a model named "user already exists in the "models" object, it assigns that existing modek to the "User" varibale.
// This prevents redefining the model and ensures that the existing model is reused.

// If a model named "User" already exists in the "models" object, the "model" function from Mongoose is called to create a new model.
// The newly created model is then assigned to the "User" varibale.

const User = models.User || model("User", userSchema);

export default User;