import { info, error } from "../chalk/styled-messages.js";

const promptSchemaMain = [
    {
        name: "select",
        description: info("Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD"),
        pattern: /^[1-2]+$/,
        message: error("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaMain;
