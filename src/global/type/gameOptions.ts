import {GameSettingsType} from "@/page/server/options/basic";
import {PalOptionsType} from "@/page/server/options/pal";
import {PlayerOptionsType} from "@/page/server/options/player";
import {OtherOptionsType} from "@/page/server/options/other";

export interface GameOptions extends GameSettingsType,PalOptionsType,PlayerOptionsType,OtherOptionsType {

}