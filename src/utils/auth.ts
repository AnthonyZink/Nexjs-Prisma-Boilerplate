import * as bcrypt from 'bcryptjs';

const hashPassword = async (password: String) => {
    return await bcrypt.hash(password, 10)
} 

export {
    hashPassword
}