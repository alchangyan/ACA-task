import {
  SET_SNACK_BAR,
} from '../actions/actionTypes'

export function setSnackBar(data) {
  console.log(data)
  return {
    type: SET_SNACK_BAR,
    data: {
      sbText: data.text || '',
      sbLinkSource: data.linkSource || '',
      sbLinkText: data.linkText || '',
    },
  }
}

