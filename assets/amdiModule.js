/**
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░░███╗██████╗░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░████║██╔══██╗██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔████╔██║██║░░██║██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚██╔╝██║██║░░██║██║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚═╝░██║██████╔╝██║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝
 __  __       _ _   _       ____             _          
|  \/  |_   _| | |_(_)     |  _ \  _____   _(_) ___ ___ 
| |\/| | | | | | __| |_____| | | |/ _ \ \ / / |/ __/ _ \
| |  | | |_| | | |_| |_____| |_| |  __/\ V /| | (_|  __/
|_|  |_|\__,_|_|\__|_|     |____/ \___| \_/ |_|\___\___|
* @project_name King Anonymous [WA Multi-device]
* @author Uthpala mahikalpa <https://github.com/wabot333>
* @description All credits goes to BlackAmda
* @link <https://github.com/BlackAmda/wabot333>
* @version 4.0.6
* @file  amdiModule.js - KingAnonymous bot module and Web WA connection

© 2023 uthpala mahikalpa. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in complance with the License.*/

const anonymousWA = require('king_anonymous_core/dist/anonymousCore');
const { qrDisplayDL } = require('king_anonymous_core/dist/qrDisplay');
const anonymousWEB = require('king_anonymous_core/qr_code/anonymousWEB');

anonymousWA.start()

const events = async () => {
    const WASocket = await anonymousWA.ev.on("open.connection");

    await qrDisplayDL();
    await anonymousWEB.appObj();
    
    anonymousWA.ev.on("connection.update", WASocket);
    anonymousWA.ev.on("auth.update", WASocket);
    anonymousWA.ev.on("messages.upsert", WASocket);
    
    anonymousWA.ev.on("group.updates", WASocket);
    anonymousWA.ev.on("call.manage", WASocket);
}
events();

const console_info = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("SessionEntry")){
        return console_info(...arguments)
    }
}
