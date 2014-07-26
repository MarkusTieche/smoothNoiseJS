function initGUI()
{
    document.getElementById("btn_menu").onclick = function(event)
    {
        if(document.getElementById("options").classList.contains("open"))
        {
            document.getElementById("options").classList.remove("open");
        }
        else
        {
            document.getElementById("options").classList.add("open");
        }
    }
}

function slide(e)
{
    e.target.previousElementSibling.innerHTML = e.target.id+":   "+e.target.value;

    updateSlide();
}

function check(e)
{
}

function updateSlide()
{
    changeCurve();
    
}
