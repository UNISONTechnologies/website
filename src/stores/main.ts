import { defineStore } from "pinia";
import type { Service } from "../models";

export interface StoreState {
    services: Service[];
}

export const useStore = defineStore("main", {
    state: (): StoreState => {
        return {
            services: [],
        };
    },
});
