import Toast from "react-native-tiny-toast";

export const toastError = {
  show:  (error) => {
    Toast.show(error,{
      position: Toast.position.TOP,
      containerStyle:{
        backgroundColor: '#c9594a',
        borderRadius: 0,
        width: '100%',

      },
      textStyle: {},
      mask: true,
      maskStyle:{},
    })
  },
  hide:  () => {
    Toast.hide()
  }

}
