export const validateText = (text) => {
    if(text.trim() === ''){
        return false;
    }
    return true;
}

export const validateTextMessage = 'No deje el campo vacio';