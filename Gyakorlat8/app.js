const GITHUB_ACCESS_TOKEN = '';

function loadNavigation()
{
    fetch('nav.html')
        .then(res => res.text())
        .then(navhtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navhtml);
        })
        .catch(err => console.error(err));
}

loadNavigation();