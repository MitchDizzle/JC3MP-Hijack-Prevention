/**
 * @overview JC3:MP Freeroam Hijack Prevention
 * @author Mitch 'MitchDizzle' Gardner
 */
'use strict';

global.hijack = {
    chat: jcmp.events.Call('get_chat')[0],
	chat_color: new RGB(200, 64, 64)
};

process.on('uncaughtException', e => console.error(e.stack || e));

jcmp.events.Add('PlayerHijackVehicle', (hijacker, vehicle, player) => {
    if (player.invulnerable || hijacker.invulnerable) {
		hijack.chat.send(hijacker, 'You cant steal from a passive player.', hijack.chat_color);
		vehicle.driver = player;
	}
});