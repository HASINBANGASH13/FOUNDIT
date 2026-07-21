export const registerUser = async (req, res) => {
    res.status(201).json({
        success: true,
        message: "Register API Working",
    });
};

export const loginUser = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Login API Working",
    });
};

export const getUserProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Profile API Working",
    });
};

export const updateUserProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Update Profile API Working",
    });
};