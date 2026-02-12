import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import type Client from "../Client";
import type { IComponentOptions } from "../Base/BaseComponent";
import { Collection } from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type component = "Buttons" | "Modals" | "Menus";

export interface IComponent {
    options: IComponentOptions;
    run: (client: Client, ...args: any[]) => Promise<any>;
}

export class Components {
    public cache = new Collection<string, IComponent>();

    constructor(
        private client: Client,
        private type: component,
    ) {
        this.client = client;
        this.type = type;

        this.init();
    }

    async init() {
        try {
            const dirPath = path.join(__dirname, `../../App/${this.type}`);
            const files = fs
                .readdirSync(dirPath)
                .filter((f) => f.endsWith(".ts"));

            for (let i = 0; i < files.length; i++) {
                const filePath = path.join(dirPath, files[i]);
                const fileUrl = pathToFileURL(filePath).href;
                const component = (await import(fileUrl)).default;

                this.cache.set(component.options.name, component);
            }
        } catch {
            this.client.logger.error(`Failed to load ${this.type}`);
        }
    }
}
