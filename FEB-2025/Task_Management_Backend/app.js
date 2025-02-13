require("dotenv").config();
//attaches the dot env key values in the process variable that we can now use anywhere
require("./config/dbConfig.js");
const PORT = process.env.PORT || 1814;
const express = require("express"); //express framework for our backend
const morgan = require("morgan");
const cors = require("cors");
const User = require("./models/userModel.js");
const { generateOTP } = require("./utils/otpHelper.js");
const { sendOtpEmail } = require("./utils/emailHelper.js");
const OTP = require("./models/otpModel.js");
const bcrypt = require("bcrypt");
//---------------------------------------------------------------------
const app = express();
//---------------------------------------------------------------------
//middlewares
app.use((req, res, next) => {
  console.log("request received->", req.url);
  next();
});
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//--------------------------------------------------------
//request listener/ request handler
app.get("/users", (req, res) => {
  try {
  } catch (e) {
    console.log("Errror in GET /users");
    console.log(e.message);
    res.status(500);
    res.json({
      status: "fail",
      message: "Internal Server Error " + err.message,
    });
  }
});
app.post("/users", async (req, res) => {
  try {
    const userInfo = req.body;
    const newUser = await User.create(userInfo);
    res.status(201);
    res.json({
      status: "success",
      data: {
        user: {
          email: newUser.email,
          fullName: newUser.fullName,
        },
      },
    });
  } catch (err) {
    console.log("Error in /POST users");
    console.log(err.name, err.code);
    console.log(err.message);
    if (err.name === "ValidationError") {
      res.status(400);
      res.json({
        status: "fail",
        message: "Data validation failed: " + err.message,
      });
    } else if (err.code === 11000) {
      res.status(400);
      res.json({
        status: "fail",
        message: "Email already exists",
      });
    } else {
      res.status(500);
      res.json({
        status: "fail",
        message: "Internal Server Error",
      });
    }
  }
});
app.post("/otps", async (req, res) => {
  // const queryObj= req.query;
  const { email } = req.query;
  //req format + regex + length checking of email.
  if (!email) {
    res.status(400).json({
      status: "fail",
      message: 'Missing required param: "email"',
    });
    return;
  }
  //create a OTP
  const otp = generateOTP();
  //send the OTP to mail
  const isEmailSent = await sendOtpEmail(email, otp);

  if (!isEmailSent) {
    // this is the case when isEmailSent is false
    res.status(500).json({
      status: "fail",
      message: "Email could not be sent! Please try again after 30 seconds!",
    });
    return;
  } else {
    console.log("isEmail sent", isEmailSent);
  }
  const newSalt= await bcrypt.genSalt(10);
  const hashedOtp= await bcrypt.hash(otp.toString(),newSalt);

  await OTP.create({
    email,
    otp: hashedOtp,
  });

  res.status(201);
  res.json({
    status: "success",
    message: `OTP sent to ${email}`,
  });
});


// const testing = async () => {
//   console.time("salt1");
//   const newSalt = await bcrypt.genSalt(10); // rounds-x == iterations pow(2,x)
//   const newHash = await bcrypt.hash("password1", newSalt);
//   console.log("salt= ", newSalt);
//   console.log("hash= ", newHash);
//   console.timeEnd("salt1");
//   console.log(newSalt);
// };

// testing();
app.listen(PORT, () => {
  console.log("Server Started on port: ", PORT);
});
