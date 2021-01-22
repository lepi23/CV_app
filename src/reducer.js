const reducer = (state = "EN", action) => {
    switch (action.type) {
      case 'SWITCH_LANGUAGE':
        return state = ([action.text])
      default:
        return state
    
  }
   
}
export default reducer