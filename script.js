const recursion = (data, mr) => {
    for(let i = 0; i < data.length; i++)
    {
        const container = document.querySelector('.container');
        const newElement = document.createElement('h3');
        newElement.style.marginLeft = mr + "rem";
        newElement.innerHTML = data[i].name;
        container.appendChild(newElement.cloneNode(true));
        if(data[i]?.categories?.length)
        {
            recursion(data[i].categories, mr+2);
        }
    }
}

recursion(data, 2);