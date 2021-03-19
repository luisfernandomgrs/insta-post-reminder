import { Notifier } from "./notifier.js";

const App = {
    async start() {
        try {
            await Notifier.init();
            Notifier.notify({
                title: "Is time of the Post",
                body: "Create content to help community"
            });
        }
        catch (error) {
            console.log(error.message)
        }
        
    }
}

export { App };