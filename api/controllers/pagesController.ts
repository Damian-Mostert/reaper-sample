import { Controller } from "reaperjs";
import { homeViewPropsType } from "types/homeViewProps";

const pageController:Controller={
    async home(request,response){
        response.render<homeViewPropsType>("home",{
            metadata:{
                title:"Home",
                description:'Home',                
            },
            props:{
                data:request.params.test
            }
        })
    },
}

export default pageController;