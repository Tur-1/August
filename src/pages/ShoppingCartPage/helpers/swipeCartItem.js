

let clientX;
let start;
let end;
export const touchstart = (event, id) =>
{

    let item = document.getElementById(id);


    start = event.touches[0].clientX;


    if (start >= 310)
    {
        [...item.parentElement.parentElement.children].forEach((element) =>
        {
            element.firstElementChild.style.transform = `translateX(0px)`;
        })

        item.addEventListener('touchmove', (e) =>
        {

            if (clientX >= 145) return

            clientX = event.touches[0].clientX - e.touches[0].clientX;

            item.style.transform = `translateX(-${ clientX }px)`;
        });

    }


};
export const touchend = (event, id) =>
{

    let item = document.getElementById(id);

    end = event.changedTouches[0].clientX;

    if (clientX >= 40)
    {
        item.style.transform = `translateX(-148px)`;
    }
    if (end < start)
    {
        item.style.transform = `translateX(-148px)`;
    }

    if (end > start)
    {
        item.style.transform = `translateX(0px)`;
    }
};