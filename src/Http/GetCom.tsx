import { config } from "../api-constants";
import Data from "../Models/Data.model";
import UserData from "../Models/UserData.model";

const get = async (a: string): Promise<UserData> => {
    const result: Response = await fetch(`${config.reqresUrl}${a}`);
    const body = await result.json();
    return body as UserData;
}

export default get;