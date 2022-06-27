import * as Errors from '../error_classes'
import User from '../models/User'


export const getUserByID = async id => {
    const user = await User.findById(id);
    if (!user) throw new Errors.NotFoundError('User Account Not Found');
    return user;
  };

  export const UserExists = async searchObject => {
    const user = await User.findOne(searchObject);
    return !!user;
  };

  export const deleteUserById = async id => {
    return User.findByIdAndDelete(id);
  };


  export const create = async createObject => {
    const user = new User(createObject);
    await user.save();
    // // mixpanel tracking
    // mixPanelAccountCreated(user.user.email);
    return user;
  };

  export const getUser = async searchObject => {
    const user = await User.findOne(searchObject);
    if (!user) throw new Errors.NotFoundError('User Account Not Found');
    return user;
  };

  export const getAllUsers = async (searchObject = {}) => {
    const user = await User.find(searchObject);
    if (!user) throw new Errors.NotFoundError('Users Account Not Found');
    return user;
  };
  
  export const userFindOneAndUpdate = async (
    searchObject,
    updateObject,
    options = {}
  ) => {
    let user;
    try {
      user = await User.findOneAndUpdate(searchObject, updateObject, {
        new: true,
        runValidators: true,
        ...options
      });
      if (!user) throw new Errors.NotFoundError('user Account Not Found');
    } catch (err) {
      if (err instanceof Errors.NotFoundError) throw err;
      throw new Errors.InternalServerError(
        'user Account Could Not Be Updated, Please Report The Issue To Turon Team',
        { time: new Date(), searchObject }
      );
    }
    return user;
  };