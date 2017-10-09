let error = (err) => {
    if (err) {
        console.log(err);
        return;
    }
};

let success = (res, data) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write(data);
    res.end();
};

let redirect = (res, page) => {
    res.writeHead(302, {
        Location: page
    });
    res.end();
};

module.exports = {
    error: error,
    success: success,
    redirect: redirect
};