
import * as User from '../services/UserService'
import {RETURN_CODE} from '../common/ReturnCode'


export const getAllUsers = async (req, res) => {
    try {
      const users = await User.getAllUsers();
      res
        .status(RETURN_CODE.SUCCESS)
        .json({ success: true, data: {users: users} });;
    } catch (err) {
        res
        .status(RETURN_CODE.NOT_FOUND)
        .json({ success: false, message: err.message });
    }
  };