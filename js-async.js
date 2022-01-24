const button = document.querySelector('button');
const div = document.querySelector('div');

const setText = (text) => {
    div.textContent = text;
};

// Callback
const checkAuth = cb => {
    setText('Checking Auth...');
    setTimeout(() => {
        cb(true);
    }, 2000);
};

const fetchUser = cb => {
    setText('Fetching user....');
    setTimeout(() => {
        cb({ name: 'Max' });
    }, 2000);
};

button.addEventListener("click", () => {
    checkAuth(auth => {
        if (auth) {
            fetchUser(user => {
                setText(user.name);
            });
        }
    })
});

// Promise
const checkAuthPromise = () => {
    return new Promise((resolve, reject) => {
        setText('Checking Auth');
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const fetchUserPromise = () => {
    return new Promise((resolve, reject) => {
        setText('Fetching User');
        setTimeout(() => {
            resolve({name: 'Max'});
        }, 2000);
    });
}

button.addEventListener('click', () => {
    checkAuthPromise()
        .then(isAuth => {
            if (isAuth) {
                return fetchUserPromise();
            }
        })
        .then(user => {
            setText(user.name);
        })
});

// Async and Await
button.addEventListener('click', async () => {
    const isAuth = await checkAuthPromise();
    let user = null;
    if (isAuth) {
        user = await fetchUserPromise();
    }
    setText(user.name);
})
