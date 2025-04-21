// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { connectionToDatabase } from "../lib/db.js";
// import sql from "mssql";

// const router = express.Router();

// // CONTACT FORM SUBMISSION
// router.post("/contactform", async (req, res) => {
//   const {
//     Name,
//     Email,
//     Mobile,
//     Location,
//     BestDescribes,
//     AreaofInterest,
//     Captcha,
//   } = req.body;

//   // Capture client IP address
//   const ipAddress =
//     req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

//   try {
//     const db = await connectionToDatabase();

//     await db
//       .request()
//       .input("Name", Name)
//       .input("Email", Email)
//       .input("Mobile", Mobile)
//       .input("Location", Location)
//       .input("BestDescribes", BestDescribes)
//       .input("AreaofInterest", AreaofInterest)
//       .input("IPAddress", ipAddress)
//       .input("Captcha", Captcha).query(`
//         INSERT INTO ContactForm
//         (Name, Email, Mobile, Location, BestDescribes, AreaofInterest, Captcha, IPAddress)
//         VALUES (@Name, @Email, @Mobile, @Location, @BestDescribes, @AreaofInterest, @Captcha, @IPAddress )
//       `);

//     res.status(200).send("Form submitted successfully.");
//   } catch (err) {
//     console.error("Database error:", err);
//     res.status(500).send("An error occurred while submitting the form.");
//   }
// });

// // REGISTER
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const db = await connectionToDatabase();

//     const checkUser = await db
//       .request()
//       .input("email", email)
//       .query("SELECT * FROM register WHERE email = @email");

//     if (checkUser.recordset.length > 0) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const hashPassword = await bcrypt.hash(password, 10);

//     await db
//       .request()
//       .input("username", username)
//       .input("email", email)
//       .input("password", hashPassword)
//       .query(
//         "INSERT INTO register (username, email, password) VALUES (@username, @email, @password)"
//       );

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Register error:", err);
//     res
//       .status(500)
//       .json({ message: "Registration failed", error: err.message });
//   }
// });

// // LOGIN
// router.post("/loginpage", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const db = await connectionToDatabase();

//     const result = await db
//       .request()
//       .input("email", email)
//       .query("SELECT * FROM register WHERE email = @email");

//     if (result.recordset.length === 0) {
//       return res.status(404).json({ message: "User does not exist" });
//     }

//     const user = result.recordset[0];
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }

//     const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ token });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Login failed", error: err.message });
//   }
// });

// // VERIFY TOKEN MIDDLEWARE
// const verifyToken = (req, res, next) => {
//   try {
//     const authHeader = req.headers["authorization"];
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(403).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// // DASHBOARD (PROTECTED)
// router.get("/dashboard", verifyToken, async (req, res) => {
//   try {
//     const db = await connectionToDatabase();

//     const result = await db
//       .request()
//       .input("id", req.userId)
//       .query("SELECT * FROM register WHERE id = @id");

//     if (result.recordset.length === 0) {
//       return res.status(404).json({ message: "User does not exist" });
//     }

//     return res.status(200).json({ user: result.recordset[0] });
//   } catch (err) {
//     console.error("Dashboard error:", err);
//     return res
//       .status(500)
//       .json({ message: "Server error", error: err.message });
//   }
// });

// // ========== PROTECTED FACULTY PROFILE FORM ==========
// router.post("/facultyprofileform", verifyToken, async (req, res) => {
//   const {
//     typecategory,
//     facultyname,
//     designation,
//     teaching,
//     research,
//     recognition,
//   } = req.body;

//   try {
//     const db = await connectionToDatabase();

//     console.log("Received Faculty Profile Data:", req.body);

//     await db
//       .request()
//       .input("typecategory", typecategory)
//       .input("facultyname", facultyname)
//       .input("designation", designation)
//       .input("teaching", teaching)
//       .input("research", research)
//       .input("recognition", recognition).query(`
//         INSERT INTO FacultyProfileNew
//         (typecategory, facultyname, designation, teaching, research, recognition)
//         VALUES (@typecategory, @facultyname, @designation, @teaching, @research, @recognition)
//       `);

//     res.status(200).send("Faculty profile submitted successfully.");
//   } catch (err) {
//     console.error("Faculty profile submission error:", err);
//     res
//       .status(500)
//       .send(`An error occurred while submitting the form: ${err.message}`);
//   }
// });

// // router.post("/facultyprofileform", async (req, res) => {
// //   const {
// //     typecategory,
// //     facultyname,
// //     designation,
// //     teaching,
// //     qualification,
// //     research,
// //     recognition,
// //   } = req.body;

// //   try {
// //     const db = await connectionToDatabase();

// //     // Log incoming request data
// //     console.log("Received Faculty Profile Data:", req.body);

// //     await db
// //       .request()
// //       .input("typecategory", typecategory)
// //       .input("facultyname", facultyname)
// //       .input("designation", designation)
// //       .input("teaching", teaching)
// //       .input("research", research)
// //       .input("recognition", recognition).query(`
// //         INSERT INTO FacultyProfileNew
// //         (typecategory, facultyname, designation, teaching, research, recognition)
// //         VALUES (@typecategory, @facultyname, @designation, @teaching,  @research, @recognition)
// //       `);

// //     res.status(200).send("Faculty profile submitted successfully.");
// //   } catch (err) {
// //     console.error("Database error:", err); // Log the error for debugging
// //     res
// //       .status(500)
// //       .send(`An error occurred while submitting the form: ${err.message}`);
// //   }
// // });

// // LOGOUT
// router.post("/logout", (req, res) => {
//   res.status(200).json({ message: "Logged out successfully" });
// });

// export default router;

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { connectionToDatabase } from "../lib/db.js";
import sql from "mssql";

const router = express.Router();

// CONTACT FORM SUBMISSION
router.post("/contactform", async (req, res) => {
  const {
    Name,
    Email,
    Mobile,
    Location,
    BestDescribes,
    AreaofInterest,
    Captcha,
  } = req.body;

  // Capture client IP address
  const ipAddress =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  try {
    const db = await connectionToDatabase();

    await db
      .request()
      .input("Name", Name)
      .input("Email", Email)
      .input("Mobile", Mobile)
      .input("Location", Location)
      .input("BestDescribes", BestDescribes)
      .input("AreaofInterest", AreaofInterest)
      .input("IPAddress", ipAddress)
      .input("Captcha", Captcha).query(`
        INSERT INTO ContactForm
        (Name, Email, Mobile, Location, BestDescribes, AreaofInterest, Captcha, IPAddress)
        VALUES (@Name, @Email, @Mobile, @Location, @BestDescribes, @AreaofInterest, @Captcha, @IPAddress )
      `);

    res.status(200).send("Form submitted successfully.");
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("An error occurred while submitting the form.");
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const db = await connectionToDatabase();

    const checkUser = await db
      .request()
      .input("email", email)
      .query("SELECT * FROM register WHERE email = @email");

    if (checkUser.recordset.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await db
      .request()
      .input("username", username)
      .input("email", email)
      .input("password", hashPassword)
      .query(
        "INSERT INTO register (username, email, password) VALUES (@username, @email, @password)"
      );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err);
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
});

// LOGIN
router.post("/loginpage", async (req, res) => {
  const { email, password } = req.body;
  try {
    const db = await connectionToDatabase();

    const result = await db
      .request()
      .input("email", email)
      .query("SELECT * FROM register WHERE email = @email");

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// VERIFY TOKEN MIDDLEWARE
const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(403).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// DASHBOARD (PROTECTED)
router.get("/dashboard", verifyToken, async (req, res) => {
  try {
    const db = await connectionToDatabase();

    const result = await db
      .request()
      .input("id", req.userId)
      .query("SELECT * FROM register WHERE id = @id");

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    return res.status(200).json({ user: result.recordset[0] });
  } catch (err) {
    console.error("Dashboard error:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

// Setup multer storage
// Storage config for faculty images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "..", "public", "DataStore");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `faculty_${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

// ========== PROTECTED FACULTY PROFILE FORM ==========

// Faculty profile submission endpoint OLD code without img
router.post("/facultyprofileform", verifyToken, async (req, res) => {
  const {
    typecategory,
    facultyname,
    designation,
    teaching,
    research,
    recognition,
  } = req.body;

  // Capture client IP address
  const ipAddress =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  try {
    const db = await connectionToDatabase();

    console.log("Received Faculty Profile Data:", req.body);

    // Generate a FacultyId (can be changed as needed)
    const facultyId = `FAC${Date.now()}`; // Use a timestamp for uniqueness, or implement your own logic

    await db
      .request()
      .input("facultyId", facultyId)
      .input("typecategory", typecategory)
      .input("facultyname", facultyname)
      .input("designation", designation)
      .input("teaching", teaching)
      .input("IPAddress", ipAddress)
      .input("research", research)
      .input("recognition", recognition).query(`
        INSERT INTO FacultyProfileNew
        (FacultyId, typecategory, facultyname, designation, teaching, research, IPAddress, recognition)
        VALUES (@facultyId, @typecategory, @facultyname, @designation, @teaching, @research, @IPAddress, @recognition)
      `);

    res.status(200).send("Faculty profile submitted successfully.");
  } catch (err) {
    console.error("Faculty profile submission error:", err);
    res
      .status(500)
      .send(`An error occurred while submitting the form: ${err.message}`);
  }
});

// POST route for submitting faculty profiles
// router.post("/facultyprofileform", verifyToken, async (req, res) => {
//   const {
//     typecategory,
//     facultyname,
//     designation,
//     teaching,
//     research,
//     recognition,
//   } = req.body;

//   // Capture client IP address
//   const ipAddress =
//     req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

//   try {
//     const db = await connectionToDatabase();

//     console.log("Received Faculty Profile Data:", req.body);

//     // Generate a FacultyId (can be changed as needed)
//     const facultyId = `FAC${Date.now()}`; // Use a timestamp for uniqueness, or implement your own logic

//     await db
//       .request()
//       .input("facultyId", facultyId)
//       .input("typecategory", typecategory)
//       .input("facultyname", facultyname)
//       .input("designation", designation)
//       .input("teaching", teaching)
//       .input("IPAddress", ipAddress)
//       .input("research", research)
//       .input("recognition", recognition).query(`
//         INSERT INTO FacultyProfileNew
//         (FacultyId, typecategory, facultyname, designation, teaching, research, IPAddress, recognition)
//         VALUES (@facultyId, @typecategory, @facultyname, @designation, @teaching, @research, @IPAddress, @recognition)
//       `);

//     res.status(200).send("Faculty profile submitted successfully.");
//   } catch (err) {
//     console.error("Faculty profile submission error:", err);
//     res
//       .status(500)
//       .send(`An error occurred while submitting the form: ${err.message}`);
//   }
// });

// GET route for fetching all faculty profiles
router.get("/facultyprofiles", verifyToken, async (req, res) => {
  try {
    const db = await connectionToDatabase();

    const result = await db.request().query("SELECT * FROM FacultyProfileNew");

    res.status(200).json(result.recordset); // Send back the records in JSON format
  } catch (err) {
    console.error("Error fetching faculty profiles:", err);
    res
      .status(500)
      .send(`An error occurred while fetching the records: ${err.message}`);
  }
});

// GET all faculty profiles that are not soft-deleted
router.get("/facultyprofiles", verifyToken, async (req, res) => {
  try {
    const pool = await sql.connect(dbconfig);
    const result = await pool
      .request()
      .query(
        "SELECT * FROM FacultyProfileNew WHERE IsDeleted = 0 ORDER BY CreatedAt DESC"
      );

    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Error fetching profiles:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

//update

// Fetch faculty profile route - Using GET
router.get("/facultyprofile/:id", verifyToken, async (req, res) => {
  const { id } = req.params; // Get the facultyId from the URL parameter

  try {
    const db = await connectionToDatabase();

    // Query to fetch the faculty profile by facultyId
    const result = await db.request().input("facultyId", id).query(`
        SELECT * FROM FacultyProfileNew WHERE FacultyId = @facultyId
      `);

    if (result.recordset.length === 0) {
      return res.status(404).send("Faculty profile not found");
    }

    res.status(200).json(result.recordset[0]); // Send the fetched profile data
  } catch (err) {
    console.error("Error fetching faculty profile:", err);
    res
      .status(500)
      .send("An error occurred while fetching the faculty profile");
  }
});

// Update the route to use PUT method OLD
router.put("/facultyprofileform/:id", verifyToken, async (req, res) => {
  const { id } = req.params; // Get the facultyId from URL parameter
  const {
    typecategory,
    facultyname,
    designation,
    teaching,
    research,
    recognition,
  } = req.body;

  const ipAddress =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  try {
    const db = await connectionToDatabase();

    console.log("Received Faculty Profile Data for Update:", req.body);

    await db
      .request()
      .input("facultyId", id) // Use facultyId from URL parameter
      .input("typecategory", typecategory)
      .input("facultyname", facultyname)
      .input("designation", designation)
      .input("teaching", teaching)
      .input("research", research)
      .input("IPAddress", ipAddress)
      .input("recognition", recognition).query(`
        UPDATE FacultyProfileNew
        SET
          typecategory = @typecategory,
          facultyname = @facultyname,
          designation = @designation,
          teaching = @teaching,
          research = @research,
          IPAddress = @IPAddress,
          recognition = @recognition
        WHERE FacultyId = @facultyId
      `);

    res.status(200).send("Faculty profile updated successfully.");
  } catch (err) {
    console.error("Faculty profile update error:", err);
    res
      .status(500)
      .send(`An error occurred while updating the profile: ${err.message}`);
  }
});

// Delete a faculty profile by FacultyId
router.delete("/facultyprofiles/:facultyId", verifyToken, async (req, res) => {
  const { facultyId } = req.params;

  try {
    const db = await connectionToDatabase();

    // Soft delete example (can also do actual deletion based on your schema)
    await db
      .request()
      .input("facultyId", facultyId)
      .query("DELETE FROM FacultyProfileNew WHERE FacultyId = @facultyId");

    res.status(200).send("Faculty profile deleted successfully.");
  } catch (err) {
    console.error("Error deleting faculty profile:", err);
    res.status(500).send("Error deleting faculty profile");
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
