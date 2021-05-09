import * as bcrypt from "bcryptjs";

const hashPassword = async (password: String) => {
    return await bcrypt.hash(password, 10);
};

const comparePassword = async (password: String, hashPassword: String) => {
    return await bcrypt.compare(password, hashPassword);
};

export { hashPassword, comparePassword };
