import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import type Client from "../Client";
import type { IEventsOptions } from "../Base/BaseEvent";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface IListener {
    options: IEventsOptions;
    run: (client: Client, ...args: any[]) => Promise<any>;
}

export class Listeners {
    private client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async init() {
        const dirPath = path.join(__dirname, "../../App/Listeners");
        const files = fs
            .readdirSync(dirPath)
            .filter((f) => f.endsWith(".ts"));

        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(dirPath, files[i]);
            const fileUrl = pathToFileURL(filePath).href;

            const listener: IListener = (await import(fileUrl)).default;

            if (
                listener &&
                typeof listener === "object" &&
                "options" in listener &&
                typeof listener.run === "function"
            ) {
                this.addListener(listener);
            }
        }
    }

    private addListener(listener: IListener) {
        this.client[listener.options.once ? "once" : "on"](
            listener.options.name,
            (...args) => {
                listener.run(this.client, ...args);
            },
        );
    }
}
