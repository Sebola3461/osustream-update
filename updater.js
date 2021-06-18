async function update() {
    const { dialog, app } = require('electron');
    const Downloader = require('nodejs-file-downloader');
    const downloader = new Downloader({
        url: 'https://github.com/Sebola3461/osustream-update/releases/download/banana/app.asar', //If the file name already exists, a new file with the name 200MB1.zip is created.     
        directory: "./../resources/app/",
    })

    try {
        await downloader.download();
        console.log('All done');
        dialog.showMessageBox({
            title: "Osu!Stream Updater",
            message: "Osu!Stream has been updated!",
        }).then(() => {
            app.quit()
        })
    } catch (error) {
        dialog.showErrorBox("Bro, what? Errors!?", `${error.message}`)
        app.quit()
        console.log('Download failed', error)
    }
}

module.exports.update = update;