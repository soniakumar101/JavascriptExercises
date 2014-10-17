var cat = {
        tiredness: 20,
        hunger: 40,
        loneliness: 20,
        awake: true,
        happiness: 50,
        obedientness: -1000,
        alive: function(){
            if (this.hunger > 100 || this.loneliness > 100 || this.happiness < 0)
            {
                console.log("Cat is dead....");
                return false;
            }else
            {
                return true;
            }
        },
        feed: function(){
            if (this.alive())
            {
                this.awake = true;
                console.log("Om nom nom")
                this.hunger = this.hunger - 20;
            }
        },
        sleep: function(){
            this.tiredness = this.tiredness -40;
            this.awake = false;
        },
        pet: function(){
            this.happiness = this.happiness +5;
            this.loneliness = this.loneliness - 15;
            
        },
        play: function(){
            if(this.alive())
            {
            if (this.awake === true)
            {
                this.tiredness = this.tiredness - 5;
                this.happiness = this.happiness +10;
                this.loneliness = this.loneliness -15;
                this.hunger = this.hunger + 20;
            }else
            {
                console.log("Cat is asleep.")
            }
            }
            
        },
        bother: function(){
            this.tiredness = this.tiredness + 10;
            this.awake = true;
            this.obedientness = this.obedientness - 100;
            this.hunger = this.hunger + 20;
            this.loneliness = this.loneliness + 30;
            this.happiness = this.happiness - 10;
            console.log("Cat has been bothered.")
        },
        killCat: function(){
            this.hunger = -500;
        }
}; 

function cat_status(specificcat)
{
    if (specificcat.alive())
    {
        console.log("Cat is" + specificcat.tiredness + "tired.");
        console.log("Cat is" + specificcat.hunger + "hungry");
        console.log("Cat is" + specificcat.loneliness + "lonely");
        if (specificcat.awake === true)
        {
            console.log("Cat is awake!");
        }else
        {
            console.log("Cat is asleep.");
        }
            console.log("Cat is" + specificcat.happiness + "happy");
            console.log("Cat is" + specificcat.obedientness + "obedient");
    }else
    {
        console.log("Cat is deadddddddddd....shiiiiiit....");
    }
}

cat.killCat();
console.log(cat.alive())
cat_status(cat);