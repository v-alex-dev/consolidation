function header() {
    const body = document.body;
    const header = document.createElement('header');
    const title = document.createElement('h1');
    const div = document.createElement('div');

    header.className = 'flex justify-center items-center border-b bg-slate-500'
    div.className = 'flex justify-center items-center uppercase font-bold h-20 text-white';
    title.innerHTML = 'Collection by Alexandre Vens';

    body.prepend(header);
    header.append(div);
    div.append(title);
}

export {header};