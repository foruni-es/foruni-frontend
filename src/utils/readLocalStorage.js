const readLocalStorage = () => {
    if (localStorage.getItem('user')) {
        const user = JSON.parse(localStorage.getItem('user'));
            return {
                isAuth: true,
                ...user
            };
    }
    else return { isAuth: false };
}

export default readLocalStorage;