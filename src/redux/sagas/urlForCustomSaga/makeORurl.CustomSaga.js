const makeUrlOrFunction = (array) => {
    let urlString = `?`;
    array.forEach(chip => {
        urlString += `${chip.value}=true&`
    })

    urlString = urlString.slice(0, -3);
    return urlString;
};

export default makeUrlOrFunction