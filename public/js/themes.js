var darkTheme = false

if(darkTheme == false)
{
    document.getElementById('light-theme-btn').style.display = 'none'
    document.getElementById('dark-theme-btn').style.display = 'block'
    document.getElementById('dynamic-theme').className = 'bg-light'
    document.getElementById('dynamic-nav-title').className = 'text-decoration-none text-light display-6 mx-auto'
    document.getElementById('dynamic-navbar').className = 'navbar navbar-dark bg-light-mode border-bottom border-dark p-3'
}else
{
    document.getElementById('light-theme-btn').style.display = 'block'
    document.getElementById('dark-theme-btn').style.display = 'none'
    document.getElementById('dynamic-theme').className = 'bg-dark'
    document.getElementById('dynamic-nav-title').className = 'text-decoration-none text-white display-6 mx-auto'
    document.getElementById('dynamic-navbar').className = 'navbar navbar-dark bg-dark border-bottom border-secondary p-3'
}

function switchTheme()
{
    if(darkTheme == false)
    {
        document.getElementById('light-theme-btn').style.display = 'block'
        document.getElementById('dark-theme-btn').style.display = 'none'
        document.getElementById('dynamic-theme').className = 'bg-dark'
        document.getElementById('dynamic-nav-title').className = 'text-decoration-none text-white display-6 mx-auto'
        document.getElementById('dynamic-navbar').className = 'navbar navbar-dark bg-dark border-bottom border-secondary p-3'
        darkTheme = true
    }else
    {
        document.getElementById('light-theme-btn').style.display = 'none'
        document.getElementById('dark-theme-btn').style.display = 'block'
        document.getElementById('dynamic-theme').className = 'bg-light'
        document.getElementById('dynamic-nav-title').className = 'text-decoration-none text-light display-6 mx-auto'
        document.getElementById('dynamic-navbar').className = 'navbar navbar-dark bg-light-mode border-bottom border-dark p-3'
        darkTheme = false
    }
}