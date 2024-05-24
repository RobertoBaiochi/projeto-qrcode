import { info, error } from "../chalk/styled-messages.js";

const promptSchemaQRCode = [
    {
        name: "link",
        description: info("Digite o link para gerar o QRCode: "),
    },
    {
        name: "type",
        description: info(
            "Escolha entre o tipo de QRCode: (1- IMAGE ou (2- TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        message: error("Escolha apenas entre 1 e 2"),
        required: true,
    },
];

export default promptSchemaQRCode;
