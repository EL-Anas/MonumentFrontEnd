
import GetToken from "../persistance/GetToken";

const IsAdmin = () => {
    if (GetToken() == 'null') return false;
    if (GetToken().split('_')[0] == '0') return true;
    return false
}
export default IsAdmin;