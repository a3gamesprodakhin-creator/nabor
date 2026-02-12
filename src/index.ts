import Client from "./Struct/Client";
import { system } from "./config";

console.clear();

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

if (!system.token) {
    console.error("Error: Token includes in .env file or config.ts is missing!");
    process.exit(1);
}

new Client().init();
