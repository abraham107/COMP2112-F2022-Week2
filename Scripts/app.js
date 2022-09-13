//IIFE -- Immediately Invoked Functiom Expression
//AKA - Self Executing Function
(function()
{
    function Start()
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})();