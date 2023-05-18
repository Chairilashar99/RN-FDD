import {ApiConstants} from '../constants';
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import {getToken} from '../Store';

const getUserData = async () => {
  console.log(`UserService | getUserData`);
  try {
    let userResponse = await axios.get(
      `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.USER}/get-user`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (userResponse?.status === 200) {
      return {
        status: true,
        message: `User data fetched`,
        data: userResponse?.data,
      };
    } else {
      return {
        status: true,
        message: `User data not found`,
      };
    }
  } catch (error) {
    return {
      status: true,
      message: `User data not found`,
    };
  }
};

export default {getUserData};
