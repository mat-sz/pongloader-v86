import { V86Starter } from 'v86';

import './App.scss';

import seabios from './bios/seabios.bin';
import vgabios from './bios/vgabios.bin';
import pong from './img/pong.img';

let emulator = new V86Starter({
    screen_container: document.getElementById("screen_container"),
    bios: {
        url: seabios,
    },
    vga_bios: {
        url: vgabios,
    },
    fda: {
        url: pong,
    },
    autostart: true,
});