//zamanla reducer'lar çoğalıcak ve bu reducer'ları bir arada tutmak
//ya da kontrol etmek için "reducers" paketinin içine bir tane 
//index.js dosyası oluşturulur

//bir arada tutmak için de redux'tan combineReducers kullanılır
import {combineReducers} from "redux"
import counterReducer from "./counterReducer"

const reducers = combineReducers({
    counterReducer
})

export default reducers;
