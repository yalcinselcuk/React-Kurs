import { createStore } from "redux";
import reducers from "./index";
//bu yapının tamamını içeren yapı : store
//bu store'ı react'e bağlamak kaldı
//onu da normal projedeki index.js'nin içine gidip hallediyoruz

export default function configureStore(){
    return createStore(reducers);
}