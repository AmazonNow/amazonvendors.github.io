let gstooltipHover=document.querySelectorAll(".gspb-tooltip-wrapper-hover .gspb-tooltip-block");for(let t=0;t<gstooltipHover.length;t++)gstooltipHover[t].addEventListener("mouseover",t=>{t.currentTarget.classList.add("active")},!1),gstooltipHover[t].addEventListener("mouseleave",t=>{t.currentTarget.classList.remove("active")},!1);let gstooltipClick=document.querySelectorAll(".gspb-tooltip-wrapper-click .gspb-tooltip-block");for(let t=0;t<gstooltipClick.length;t++)gstooltipClick[t].addEventListener("click",t=>{t.currentTarget.classList.toggle("active")},!1);