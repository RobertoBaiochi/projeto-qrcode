import prompt from "prompt";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";
import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";
import { error } from "../../chalk/styled-messages.js";

async function programInitialization() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) console.log(error(err));

        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
    });

    prompt.start();
}

export default programInitialization;
