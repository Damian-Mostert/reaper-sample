
import { Seeder } from "reaperjs";

const userSeeder = new Seeder("users",(q)=>{
    
    q.create({
        firstName:"test",
        lastName:"test",
        email:"test@example.com",
        password:'test',
        admin:true,
    })
})

userSeeder.seed().then(res=>{

}).catch(error=>{

}).finally(()=>{

})

