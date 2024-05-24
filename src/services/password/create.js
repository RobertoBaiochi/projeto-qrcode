import { warning } from "../../chalk/styled-messages.js";
import handle from "./handle.js";

async function createPassword() {
    console.log(warning("Password gerado:"));

    const password = await handle();
    console.log(password);
}

export default createPassword;
