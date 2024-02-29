import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {GameOptions} from "@/global/type/gameOptions.ts";


export interface ServerStore {
    gameOptions: GameOptions
    setGameOptions: (gameOptions: GameOptions) => void
}

// 服务器store 用于表单处理
const useServerStore = create(
    persist<ServerStore> (
        (set) => ({
            gameOptions: {} as GameOptions,
            setGameOptions: (gameOptions: GameOptions) => set({gameOptions})
        }),
        {
            name: "server-option",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useServerStore