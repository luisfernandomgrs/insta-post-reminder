const Notifier = {
    async  init() {
        const permision = await Notification.requestPermission();
        // console.log(permision);
        if (permision !== "granted") {
            throw new Error("Negated Permission");
        }
    },
    notify({title, body, icon}) {
        new Notification(title, {
            body,
            icon
        });
    }
}

export { Notifier };