import Router from 'next/router';

function returnToDashBoard(){
    Router.push("/dashboard");
};

export { returnToDashBoard };