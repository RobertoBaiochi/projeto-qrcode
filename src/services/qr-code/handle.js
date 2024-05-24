import { error, success } from "../../chalk/styled-messages.js";
import qr from "qrcode-terminal";

async function handle(err, result) {
    if (err) {
        console.log(error("error on application"));
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(success("QRCode gerado com sucesso"));
        console.log(qrcode);
    });
}

export default handle;
