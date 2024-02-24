const userModel = require("../model/schema");
const jwt = require("jsonwebtoken")
const CONFIG = require("../config.json")
const api_response = require("../api_response/responses")

class Controller {

    static registerUser = async (req, res) => {
        const { name, email, phone } = req.body;
        const userData = await userModel.findOne({ email: email });

        if (userData) {
            api_response.errorResponse(res, "Email already registered", 400);
        } else {
            if (name && email && phone) {
                try {

                    let randomPassword = Math.floor(Math.random() * 900) + 100;
                    const newUser = new userModel({
                        name,
                        email,
                        contact: phone,
                        password: randomPassword.toString()
                    })
                    await newUser.save();

                    api_response.successResponse(res, "User register successfully", 200);
                } catch (err) {
                    api_response.errorResponseWithError(res, "Unable to register user", 500, err.message);
                }

            } else {
                api_response.errorResponse(res, "All fileds required", 400)
            }
        }
    }


    static loginUser = async (req, res) => {
        let { email, password } = req.body
        let userData = await userModel.findOne({ email });
        if (!userData) {
            api_response.errorResponse(res, "Not a valid mail ID !!!", 400);
        } else {
            if (userData.isWinner == false) {
                if (email && password) {
                    if (userData.password == password) {
                        const token = jwt.sign({ userID: userData._id }, CONFIG.JWT_KEY, { expiresIn: '1d' });
                        api_response.successResponseWithToken(res, "Successfully Login", 200, token);
                    } else {
                        await userModel.updateOne({ email: userData.email }, { $inc: { hitCount: 1 } })
                        api_response.errorResponse(res, "Incorrect Password", 400);
                    }
                } else {
                    api_response.errorResponse(res, "All fileds required !!!", 400);
                }
            } else {
                api_response.errorResponse(res, "You are already a WINNER", 400);
            }
        }
    }

    static winnerEntry = async (req, res) => {
        let userId = req.userID;

        try {
            await userModel.updateOne({ _id: userId }, { $set: { isWinner: true } });
            api_response.successResponse(res, "🎉 Success! 🎉 You've been selected as one of our winners. 🏆 Congratulations on your achievement! 🎊", 200);
        } catch (error) {
            api_response.errorResponseWithError(res, "Internal error unable to register as a winner", 500, error.message);
        }

    }

    static getWinners = async (req, res) => {

        try {
            let winners = await userModel.find({ isWinner: true });

            api_response.successResponseWithData(res, "Successfully fetched data", 200, winners);
        } catch (error) {
            api_response.errorResponseWithError(res, "Unable to fetch data", 500, error.message);
        }

    }

}


module.exports = Controller;
