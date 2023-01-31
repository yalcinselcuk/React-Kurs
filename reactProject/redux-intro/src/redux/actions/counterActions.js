//sayac aksiyonları asıl burada tanımlanıp kullanılacak
//actionTypes'te sadece kullanacağımız aksiyonları tanımladık ama bir islem yapmadık
//asagidaki importta yıldız kullanılmasının nedeni o dosyadaki 3 degiskeni de kullanmak istiyoruz
import * as actionTypes from "./actionTypes"

export const sayaciArtir = () => ({
    type:actionTypes.SAYACI_ARTIR,
    payLoad : 1
})
//bizim aksiyonumuz aslında bir fonksiyon ve o fonksiyonun parametresi de bunlar

export const sayaciAzalt = () => ({
    type:actionTypes.SAYACI_AZALT,
    payLoad : 1
})
export const ikiserArtir = () => ({
    type:actionTypes.IKISER_ARTIR,
    payLoad : 2
})