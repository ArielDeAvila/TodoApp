import { Endpoint } from '../../types/TypeStore';

const UserEndpoint = {
  registerUser: {
    method: 'post',
    uri: () => 'user/register'
  } as Endpoint
}

export default UserEndpoint